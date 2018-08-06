import React, { Component } from 'react';
import './stype.scss';
import FormControl from './components/FormControl/';
import ListItem from './components/ListItem/';
import {connect} from 'react-redux';
import * as actions from './../../../../redux/actions/index';
import moment from 'moment';
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TaskReminder extends Component {

  clearItemReminder= ()=>{
    this.props.onClearAllReminder();
  }

  render() {
    var {ListReminders} = this.props;
    var elmListReminder = ListReminders.map((ListReminder, index ) => {
    var timerReminder = moment(ListReminder.dueDate).diff(moment(new Date()));
    var notify = () => {
      toast.info("A have reminder: " + ListReminder.reminderItem);
    }
    if(timerReminder > 0){
      setTimeout(notify, timerReminder);
    }
      return <ListItem key = {index} index = {index} ListReminder = {ListReminder}/>
    });
    return (
      <div>
        <div className = "FormReminder">
        <div className = "TaskReminder">
        <span>Reminder Pro</span>
      </div>
      <FormControl/>
      <div className="collection">
        <div className="clolecttionReminder">
          {elmListReminder}
          <ToastContainer autoClose={60000}/>
        </div>
      </div>
      <div className="btnClearReminder">
      <button type="submit" className="btn btnClear"
        onClick = {this.clearItemReminder}>Clear Reminder</button>
      </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  //console.log(state.TastReminders);
  return {
    ListReminders : state.TastReminders
  }
}
const mapDispatchToProps = (dispatch, props)=>{
  return {
    onClearAllReminder: () => {
          dispatch(actions.clearReminder());
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskReminder);
