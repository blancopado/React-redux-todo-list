import * as constants from '../actions/constants';

const visibilityFilter = (state = constants.SHOW_ALL, action) => {
  switch (action.type) {
    case constants.SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
} 

export default visibilityFilter;