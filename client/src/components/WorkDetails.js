import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SVGTitle from './SVGTitle';

const Project = styled(Link)`
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
  const { type } = props; // , project
  const [project, setProject] = useState({});
  useEffect(() => {
    setProject({
      id: 1,
      title: "Title of a portfolio project",
      summary: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
      description: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione, cupiditate quidem accusantium corrupti voluptate maxime mollitia. Corrupti, exercitationem ex? Accusamus deleniti rerum vel cum optio asperiores explicabo rem laudantium!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsa saepe quasi nobis exercitationem iste commodi, tempora ea expedita et odit illo quis tenetur porro sequi necessitatibus suscipit odio quibusdam!", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga iste voluptates facilis sint possimus, tempora impedit vel voluptas soluta praesentium velit voluptatibus? Nemo ex numquam praesentium exercitationem cumque voluptas laboriosam?"],
      urlLive: "https://www.google.com/",
      urlRepo: "https://github.com/melquip/melquip_portfolio",
      open: false,
    });
  }, []);

  return (
    type === 'list' ? (
      <Project key={project.id} to={'/work/' + project.id}>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="button">See more</div>
      </Project>
    ) : (
        <StyledDetails className="portfolio_detail">
          <div className="inner">
            <SVGTitle>{project.title}</SVGTitle>
            <h6>{project.summary}</h6>
            {project.description && project.description.length ? project.description.map((p, i) => <p key={i}>{p}</p>) : null}
            <a href={project.urlRepo} className="button" target="_blank" rel="noopener noreferrer">View code</a>
            <a href={project.urlLive} className="button" target="_blank" rel="noopener noreferrer">View live</a>
          </div>
          
        </StyledDetails>
      )
  );
}

export default WorkDetails