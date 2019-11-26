import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const WorkDetails = (props) => {
  const { type, project } = props;
  // missing detail page data
  return (
    type === 'list' ? (
      <Project key={project.id} to={'/work/' + project.id}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {/* image eventually */}
        <Link to={'/work/' + project.id} className="button">See more</Link>
      </Project>
    ) : (
        <section className="portfolio_detail">
          <div className="inner">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a href={project.urlRepo} className="button" target="_blank">View code</a>
            <a href={project.urlLive} className="button" target="_blank">View live</a>
          </div>
        </section>
      )
  )
}

export default WorkDetails