import * as types from '../actions/types';

export function projectsReducer(state = [], action) {
  switch (action.type) {
    case types.VIEW:
      return state;
    default:
      return state;
  }
}

const initialQuestionsState = [
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
];
export function questionsReducer(questions = initialQuestionsState, action) {
  switch (action.type) {
    case types.TOGGLE_FAQ:
      return questions.map(question => {
        if (question.id === action.payload) {
          return { ...question, open: !question.open };
        }
        return question;
      });
    default:
      return questions;
  }
} 