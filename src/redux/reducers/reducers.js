import { combineReducers } from 'redux';
import { ADD_ROOM } from '../actions/actions';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_ROOM:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
}

const roomApp = combineReducers({
  todos,
});

export default roomApp;
