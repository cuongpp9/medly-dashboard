import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import './stype.scss';
import * as actions from './../../../../../../redux/actions';
import Countdown from "react-countdown-now";

class ListItem extends Component {

    onDeleteItem = () => {
        this.props.onDeleteReminder(this.props.ListReminder.id);
    }
    onEditReminderItem = () => {
        //console.log("item:",this.props.ListReminder)
        this.props.onEditReminder(this.props.ListReminder);
    }
    onShowReminderIsDone = () => <span>Reminder is done!</span>;
    render() {
        var { ListReminder } = this.props;
        var timerReminder = moment(ListReminder.dueDate).diff(moment(new Date()));
        return (
            <a className="collection-item">
                <span className="itemReminder" onClick={this.onEditReminderItem}>{ListReminder.reminderItem}</span>
                <span className="deleteItem" onClick={this.onDeleteItem}>&#x2715;</span><br />
                {/* <em>{moment(new Date(ListReminder.dueDate)).fromNow()}</em> */}
                <Countdown date={Date.now() + moment.duration(timerReminder).as('millisecond')}>
                    <i>{this.onShowReminderIsDone()}</i>
                </Countdown>
            </a>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteReminder: (id) => {
            dispatch(actions.deleteReminder(id));
        },
        onEditReminder: (reminderItem) => {
            dispatch(actions.editReminder(reminderItem));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
