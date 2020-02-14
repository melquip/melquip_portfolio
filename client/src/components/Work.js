import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WorkDetails from './WorkDetails';
import SVGTitle from './SVGTitle';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import { useDebounce } from '../helpers/index';

const Portfolio = styled.section`
  .search {
    width: 100%;
    margin-bottom: 2rem;
    input {
      width: 100%;
      padding: 1rem;
      font-size: 1.5rem;
      line-height: 1.5rem;
      border: 2px solid ${props => props.theme.colors.lightgray};
      transition: all .33s ease-in-out;
      &:focus {
        border: 2px solid ${props => props.theme.colors.red};
      }
    }
  }
`
const ProjectFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  & > .col {
    margin-bottom: 1.6rem;
  }
  & > .col.col-2 {
    max-width: 100%;
    flex-basis: 100%;
  }
  @media ${props => props.theme.mediaDesktop} {
    & > .col.col-2 {
      max-width: calc((100% / 2) - .8rem);
      flex-basis: calc((100% / 2) - .8rem);
    }
  }
`;

const Work = (props) => {
  const { projects, getProjects } = props;
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearch = useDebounce(search.toLowerCase(), 700);
  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (debouncedSearch && projects.length) {
      setSearchResults(
        projects.filter(p => {
          const foundTech = p.tech.find(t => t.toLowerCase().includes(debouncedSearch));
          const foundTitle = p.title.toLowerCase().includes(debouncedSearch);
          // const foundDescription = p.description.includes(debouncedSearch)
          return foundTitle || foundTech
        })
      );
    } else {
      setSearchResults(projects)
    }
  }, [projects, debouncedSearch]);

  const searchOnChange = (e) => {
    const searched = e.target.value;
    setSearch(searched);
  }

  const focusSearch = (e) => {
    document.querySelector('.search input').focus();
  }

  return (
    <Portfolio>
      <div className="inner">
        <SVGTitle>Projects</SVGTitle>
        <div className="search">
          <input
            type="text"
            name="search"
            onMouseEnter={focusSearch}
            onChange={searchOnChange}
          />
        </div>
        <ProjectFlex>
          {searchResults.length ? searchResults.map(project => <WorkDetails key={project.id} type="list" project={project} />) : <p>
            No projects match your search query.
          </p>}
        </ProjectFlex>
      </div>
    </Portfolio>
  )
}

export default connect(state => state, actionCreators)(Work);