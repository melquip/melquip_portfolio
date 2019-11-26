import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
        transition: transform .5s ease-in-out;
      }
    }
    &:hover {
      background-color: ${props => props.theme.colors.lightorange};
    }
  }
  .answer {
    overflow: hidden;
    max-height: 0;
    transition: max-height .33s cubic-bezier(0, 1, 0, 1) -.04125s, padding .5s ease-in-out;
    background-color: ${props => props.theme.colors.lightorange};
    p {
      line-height: 1.3;
    }
  }
  &.open {
    .question {
      background-color: ${props => props.theme.colors.orange};
      button span {
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
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions([
      {
        id: 1,
        question: "What is the question?",
        answer: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
        open: true,
      },
      {
        id: 2,
        question: "What is the question?",
        answer: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
        open: false,
      }
    ])
  }, []);

  const toggleFAQ = (id) => (e) => {
    setQuestions(questions.map(question => {
      if(question.id === id) return { ...question, open: !question.open };
      return { ...question, open: false };
    }));
  }

  return (
    <section className="questions">
      <div className="inner">
        <h1>Frequently asked questions</h1>
        {questions.length ? questions.map(question => (
          <Faq key={question.id} onClick={toggleFAQ(question.id)} className={question.open ? "open" : ""}>
            <div className="question">
              <p>What is the question?</p>
              <button><span>+</span></button>
            </div>
            <div className="answer">
              <p>
                This is an answhe question
                this is an ao the question
                this is er to the question
                Tan answer to the question
                s an answer to the question
                is is an answer to the question
            </p>
            </div>
          </Faq>
        )) : null}
      </div>
    </section>
  )
}

export default Questions