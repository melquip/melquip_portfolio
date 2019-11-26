import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WorkDetails from './WorkDetails';
import SVGTitle from './SVGTitle';

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
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        id: 1,
        title: "Title of a portfolio project",
        description: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
        urlLive: "https://www.google.com/",
        urlRepo: "https://github.com/melquip/melquip_portfolio",
        open: false,
      },
      {
        id: 2,
        title: "Title of a portfolio project",
        description: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
        urlLive: "https://www.google.com/",
        urlRepo: "https://github.com/melquip/melquip_portfolio",
        open: false,
      },
      {
        id: 3,
        title: "Title of a portfolio project",
        description: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
        urlLive: "https://www.google.com/",
        urlRepo: "https://github.com/melquip/melquip_portfolio",
        open: false,
      },
      {
        id: 4,
        title: "Title of a portfolio project",
        description: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
        urlLive: "https://www.google.com/",
        urlRepo: "https://github.com/melquip/melquip_portfolio",
        open: false,
      },
      {
        id: 5,
        title: "Title of a portfolio project",
        description: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
        urlLive: "https://www.google.com/",
        urlRepo: "https://github.com/melquip/melquip_portfolio",
        open: false,
      },
      {
        id: 6,
        title: "Title of a portfolio project",
        description: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
        urlLive: "https://www.google.com/",
        urlRepo: "https://github.com/melquip/melquip_portfolio",
        open: false,
      }
    ])
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

export default Work