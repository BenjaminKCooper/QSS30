import { ActionTypes } from '../actions';

const CurrentTweetReducer = (state = { index: 0 }, action) => {
  switch (action.type) {

    case ActionTypes.FETCH_CHINA:
      return { index: action.payload };

    default:
      return state;
  }
};

export default CurrentTweetReducer;
