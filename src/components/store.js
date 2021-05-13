import { createStore } from 'redux';
import { increment } from './actions/actions';
import rootReducer from './reducers/combineReducer';

const store = createStore(rootReducer);

store.dispatch(increment());

export default store;
