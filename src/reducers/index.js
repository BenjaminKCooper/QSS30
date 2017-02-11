import { combineReducers } from 'redux';

import DataReducer from './dataReducer';

const rootReducer = combineReducers({
  data: DataReducer,
});

export default rootReducer;
