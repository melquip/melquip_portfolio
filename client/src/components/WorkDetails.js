import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SVGTitle from './SVGTitle';
import Loading from './Loading';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const Project = styled(Link)`
  position: relative;
  cursor: pointer;
  padding: 1rem;
  border: 2px solid ${props => props.theme.colors.lightgray};
  transition: all .2s ease-in-out;
  h3 {
    font-size: 1.75rem;
    padding-bottom: 1rem;
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.purple};
    transition: all .2s ease-in-out;
  }
  p {
    font-size: 1rem;
    line-height: 1.3rem;
  }
  &:hover {
    border-color: ${props => props.theme.colors.red};
    h3 {
      color: ${props => props.theme.colors.orange};
    }
    .button:not(.tech) {
      background-color: ${props => props.theme.colors.red};
      color: ${props => props.theme.colors.white};
    }
  }
  .button.tech {
    margin-right: 1rem;
    &:hover {
      background-color: ${props => props.theme.colors.red};
      color: ${props => props.theme.colors.white};
    }
  }
`;

const StyledDetails = styled.section`
  h6 {
    font-weight: bold;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
  p {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .button {
    margin-top: 1.5rem;
    margin-right: 25px;
    &:hover {
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.red};
    }
  }
`;

const WorkDetails = (props) => {
  const { project, type, projects, match, getProjects } = props;
  useEffect(() => {
    if (!projects.length) getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const url = match ? match.params.url : null;
  const singleProject = project ? project : projects.find(proj => proj.url === url);

  if (!singleProject) {
    return <Loading />;
  }

  return (
    type === 'list' ? (
      <Project key={singleProject.id} to={'/work/' + singleProject.url} className="col col-2">
        <h3>{singleProject.title}</h3>
        <p>{singleProject.summary}</p>
        {
          singleProject.tech.length ? 
            singleProject.tech.map(t => <div key={t} className="button tech">{t}</div>)
          : null
        }
        {/* <div className="button"><i className="icon-eye"></i> View</div> */}
      </Project>
    ) : (
        <StyledDetails className="portfolio_detail">
          <div className="inner">
            <SVGTitle>{singleProject.title}</SVGTitle>
            <h6>{singleProject.summary}</h6>
            {singleProject.description && singleProject.description.length ? singleProject.description.map((p, i) => <p key={i}>{p}</p>) : null}
            <a href={singleProject.urlRepo} className="button" target="_blank" rel="noopener noreferrer"><i className="icon-code"></i> View code</a>
            <a href={singleProject.urlLive} className="button" target="_blank" rel="noopener noreferrer"><i className="icon-live"></i> View live</a>
          </div>
        </StyledDetails>
      )
  );
}

export default connect(state => state, actionCreators)(WorkDetails);