import {createStore} from 'redux';
import reducerReminder from './reducers';

const store = createStore(reducerReminder);
export default store;