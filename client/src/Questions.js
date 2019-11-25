import React from 'react';
import styled from 'styled-components';

const StyledQuestions = styled.section`
  padding: 8rem 0;
  h2 {
    margin-left: -5px;  
    font-size: 5rem;
    font-family: ${props => props.theme.fonts.secondary};
    margin-bottom: 3rem;
  }
`;
const Faq = styled.div`
  margin-top: 1rem;
  .question {
    position: relative;
    font-size: 1rem;
    line-height: 2rem;
    padding: 0 1.25rem;
    border-bottom: 2px solid ${props => props.theme.colors.black};
    transition: all .2s ease-in-out;
    button {
      position: absolute;
      bottom: -2px;
      right: 0;
      width: 50px;
      border-left: 2px solid ${props => props.theme.colors.black};
      font-size: inherit;
      line-height: inherit;
    }
    &:hover {
      background-color: ${props => props.theme.colors.lightgray};
    }
  }
  .answer {
    overflow: hidden;
    max-height: 0;
    transition: max-height .8s cubic-bezier(0, 1, 0, 1) -.1s;
    background-color: ${props => props.theme.colors.lightgray};
    p {
      line-height: 1.3;
    }
  }
  &.open {
    .answer {
      max-height: 9999px;
      padding: 1.25rem;
      transition: max-height .8s cubic-bezier(.5, 0, 1, 0) 0s;
    }
  }
`;

const Questions = (props) => {
  const openFAQ = (e) => {
    //console.log(e);
  }
  return (
    <StyledQuestions className="questions">
      <div className="inner">
        <h2>Frequently asked questions</h2>
        <Faq onClick={openFAQ}>
          <div className="question">
            <p>What is the question?</p>
            <button>+</button>
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
        <Faq>
          <div className="question">
            <p>What is the question?</p>
            <button>+</button>
          </div>
          <div className="answer">
            <p>
              This is an answer to the question
              this is an answer to the question
              this is an answer to the question
            </p>
          </div>
        </Faq>
      </div>
    </StyledQuestions>
  )
}

export default Questions