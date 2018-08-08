import { combineReducers } from 'redux';
import TastReminders from './TastReminders';
import editReminder from './editReminder';
import authentication from './authentication';

const reducerReminder = combineReducers({
    TastReminders, editReminder, authentication
});

export default reducerReminder;
