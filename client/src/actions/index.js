import * as types from './types';

export const toggleFAQ = (id) => {
  return {
    type: types.TOGGLE_FAQ,
    payload: id
  }
}