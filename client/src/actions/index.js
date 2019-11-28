import * as types from './types';
import axios from 'axios';

export const toggleFAQ = (id) => {
  return {
    type: types.TOGGLE_FAQ,
    payload: id
  }
}

export const getQuestions = () => dispatch => {
  // get questions from back-end
  // axios.get('/questions').then(dispatch)
}

export const getProjects = () => dispatch => {
  // get questions from back-end
  // axios.get('/questions').then(dispatch)
}

export const getAbout = () => dispatch => {
  // get questions from back-end
  // axios.get('/questions').then(dispatch)
}