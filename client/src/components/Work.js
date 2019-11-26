import React, { useEffect } from 'react';
import styled from 'styled-components';
import WorkDetails from './WorkDetails';
import SVGTitle from './SVGTitle';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

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

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="portfolio">
      <div className="inner">
        <SVGTitle>Projects</SVGTitle>
        <ProjectFlex>
          {projects.length ? projects.map(project => <WorkDetails key={project.id} type="list" project={project} />) : null}
        </ProjectFlex>
      </div>
    </section>
  )
}

export default connect(state => state, actionCreators)(Work);