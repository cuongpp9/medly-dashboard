import { combineReducers } from 'redux';
import TastReminders from './TastReminders';
import editReminder from './editReminder';
import authentication from './authentication';

const myReducer = combineReducers({
    TastReminders, editReminder, authentication
});

export default myReducer;
