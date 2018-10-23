import * as constants from './constants';
import { v4 } from 'uuid';

export const addTodo = text => {
  return {
    type:  constants.ADD_TODO,
    id: v4(),
    text: text
  };
};

export const toggleTodo = id => {
  return {
    type: constants.TOGGLE_TODO,
    id: id
  };
};