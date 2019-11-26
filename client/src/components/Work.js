import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WorkDetails from './WorkDetails';
import SVGTitle from './SVGTitle';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 30px;
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
      }
    ])
  }, []);

  return (
    <section className="portfolio">
      <div className="inner">
        <SVGTitle>Projects</SVGTitle>
        <Grid>
          {projects.length ? projects.map(project => <WorkDetails key={project.id} type="list" project={project} />) : null}
        </Grid>
      </div>
    </section>
  )
}

export default Work