import { createStore } from 'redux';
import reducer from './reducers';

// Creates the store from the State received from the reducer(s)
const store = createStore(reducer);

export default store;
