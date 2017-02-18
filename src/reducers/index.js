import { combineReducers } from 'redux';

import DataReducer from './dataReducer';
import CurrentTweetReducer from './currentTweetReducer';


const rootReducer = combineReducers({
  data: DataReducer,
  current: CurrentTweetReducer,
});

export default rootReducer;
