import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 30px;
`;

const Project = styled.div`
  position: relative;
  padding: 1rem 1rem 4.5rem;
  border: 2px solid ${props => props.theme.colors.black};
  h3 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
    font-family: ${props => props.theme.fonts.secondary};
  }
  p {
    font-size: 1rem;
    line-height: 1.3rem;
  }
  .button {
    position: absolute;
    bottom: 1rem;
    padding: .7rem 1rem;
    background-color: ${props => props.theme.colors.lightgray};
    transition: all .2s ease-in-out;
    &:last-child {
      right: 1rem;
    }
    &:hover {
      background-color: ${props => props.theme.colors.black};
      color: ${props => props.theme.colors.white};
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
      }
    ])
  }, []);

  return (
    <section className="portfolio">
      <div className="inner">
        <h1>Projects</h1>
        <Grid>
          {projects.length ? projects.map(project => (
            <Project key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* image eventually */}
              <a href={project.urlRepo} className="button">View repository</a>
              <a href={project.urlLive} className="button">View live</a>
            </Project>
          )) : null}
        </Grid>
      </div>
    </section>
  )
}

export default Work