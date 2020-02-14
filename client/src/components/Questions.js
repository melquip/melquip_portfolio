import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import SVGTitle from './SVGTitle';
import Loading from './Loading';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const Faq = styled.div`
  margin-top: 1rem;
  .question {
    cursor: pointer;
    position: relative;
    font-size: 1rem;
    line-height: 2.25rem;
    padding: 0 1.25rem;
    border-bottom: 2px solid ${props => props.theme.colors.black};
    transition: all .2s ease-in-out;
    button {
      position: absolute;
      bottom: -2px;
      right: 0;
      width: 50px;
      border-left: 2px solid ${props => props.theme.colors.black};
      font-size: 1.5rem;
      line-height: inherit;
      span {
        display: block;
        transition: transform .4s ease-in-out, color .33s ease-in-out;
      }
    }
    &:hover {
      background-color: ${props => props.theme.colors.lightblue};
    }
  }
  .answer {
    overflow: hidden;
    max-height: 0;
    transition: max-height .33s cubic-bezier(0, 1, 0, 1) -.04125s, padding .5s ease-in-out;
    background-color: ${props => props.theme.colors.lightblue};
    p {
      line-height: 1.3;
    }
  }
  &.open {
    .question {
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.midblue};
      button span {
        color: ${props => props.theme.colors.white};
        transform: rotate(45deg);
      }
    }
    .answer {
      max-height: 9999px;
      padding: 1.25rem;
      transition: max-height .33s cubic-bezier(.5, 0, 1, 0) 0s, padding .33s ease-in-out;
    }
  }
`;

const Questions = (props) => {
  const { questions, toggleFAQ, getQuestions } = props;
  const toggleQuestionOnClick = useCallback((id) => (e) => toggleFAQ(id), [toggleFAQ]);
  useEffect(() => {
    if (!questions.length) {
      getQuestions();
    }
  }, [])
  if (!questions.length) {
    return <Loading />;
  }
  return (
    <section className="questions">
      <div className="inner">
        <SVGTitle>Frequently asked questions</SVGTitle>
        {questions.length ? questions.map(question => (
          <Faq key={question.id} onClick={toggleQuestionOnClick(question.id)} className={question.open ? "open" : ""}>
            <div className="question">
              <p>{question.question}</p>
              <button><span>+</span></button>
            </div>
            <div className="answer">
              <p>{question.answer}</p>
            </div>
          </Faq>
        )) : null}
      </div>
    </section>
  );
}

export default connect(state => state, actionCreators)(Questions);