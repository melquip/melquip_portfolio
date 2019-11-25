import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 30px;
`;

const Project = styled.div`
  position: relative;
  cursor: pointer;
  padding: 1rem;
  border: 2px solid ${props => props.theme.colors.black};
  transition: all .2s ease-in-out;
  h3 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.purple};
    transition: all .2s ease-in-out;
  }
  p {
    font-size: 1rem;
    line-height: 1.3rem;
  }
  .button {
    display: inline-block;
    margin-top: 1rem;
    padding: .7rem 1rem;
    background-color: ${props => props.theme.colors.lightgray};
    color: ${props => props.theme.colors.purple};
    transition: all .2s ease-in-out;
  }
  &:hover {
    border-color: ${props => props.theme.colors.red};
    h3 {
      color: ${props => props.theme.colors.orange};
    }
    .button {
      background-color: ${props => props.theme.colors.red};
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
              <Link to={'/work/' + project.id} className="button">See more</Link>
            </Project>
          )) : null}
        </Grid>
      </div>
    </section>
  )
}

export default Work