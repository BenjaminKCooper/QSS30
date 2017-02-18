import { ActionTypes } from '../actions';

const CurrentTweetReducer = (state = { googleData: [] }, action) => {
  switch (action.type) {

    case ActionTypes.FETCH_GOOGLETRENDS:
      return { googleData: action.payload };

    default:
      return state;
  }
};

export default CurrentTweetReducer;
