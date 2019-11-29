import * as types from './types';
import axios from 'axios';

const server = process.env.REACT_APP_API;

export const toggleFAQ = (id) => {
  return {
    type: types.TOGGLE_FAQ,
    payload: id
  }
}

export const getQuestions = () => dispatch => {
  axios.get(`${server}/api/questions`).then(({ data: questions }) => {
    dispatch({
      type: types.SET_QUESTIONS,
      payload: questions,
    });
  });
}

export const getProjects = () => dispatch => {
  axios.get(`${server}/api/projects`).then(({ data: projects }) => {
    dispatch({
      type: types.SET_PROJECTS,
      payload: projects,
    });
  });
}

export const getAbout = () => dispatch => {
  axios.get(`${server}/api/about`).then(({ data: about }) => {
    dispatch({
      type: types.SET_ABOUT,
      payload: about,
    });
  });
}

export const login = (form, history) => dispatch => {
  axios.post(`${server}/login`, form).then(response => {
    dispatch({
      type: types.SET_USER,
      payload: response.data
    });
    history.push('/admin/dashboard');
  }).catch(err => {
    dispatch({
      type: types.SET_USER,
      payload: err.response.data
    });
  });
}

export const logout = () => {
  return {
    type: types.LOGOUT,
  }
}