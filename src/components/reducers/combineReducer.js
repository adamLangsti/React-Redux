import { combineReducers } from 'redux';
import counter from './counterReducer';

const rootReducer = combineReducers({ counterReducer: counter });

export default rootReducer;
