import * as types from '../actions/types';

const initialAboutState = [];

export function aboutReducer(state = initialAboutState, action) {
  switch (action.type) {
    case types.SET_ABOUT:
      return action.payload.map(slide => ({
        ...slide,
        line: slide.line.split('|')
      }));
    default:
      return state;
  }
}

const initialProjectsState = [];
export function projectsReducer(state = initialProjectsState, action) {
  switch (action.type) {
    case types.SET_PROJECTS:
      return action.payload.map(project => ({
        ...project,
        description: project.description.split('|'),
        tech: project.tech.split('|')
      }));
    default:
      return state;
  }
}

const initialQuestionsState = [];
export function questionsReducer(questions = initialQuestionsState, action) {
  switch (action.type) {
    case types.SET_QUESTIONS:
      return action.payload.map((question, i) => ({ ...question, open: i <= 2 }));
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

const initialUsersState = {};
export function userReducer(state = initialUsersState, action) {
  switch (action.type) {
    case types.SET_USER:
      return action.payload;
    case types.LOGOUT:
      return initialUsersState;
    default:
      return state;
  }
}
