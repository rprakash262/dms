import { combineReducers } from 'redux';

import LayoutReducer from './layoutReducer';

const rootReducer = combineReducers({
  layout: LayoutReducer,
});

export default rootReducer;