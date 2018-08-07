import *as types from '../types/ActionType'

export const listAllReminder = () =>{
    return {
        type: types.LIST_REMINDER
    }
}


//////Action Add and update Reminder///////////////
export const saveReminder = (reminderItem) =>{
  return {
      type: types.SAVE_REMINDER,
      reminderItem //task:task
  }
}

//////Action delete Reminder///////////////
export const deleteReminder = (id) =>{
    return {
        type: types.DELETE_REMINDER,
        id //task:task
    }
}

//////Action delete all reminder///////////////
export const clearReminder = () =>{
    return {
        type: types.CLEAR_REMINDER
    }
}

//////Action delete all reminder///////////////
export const editReminder = (reminderItem) =>{
    return {
        type: types.EDIT_REMINDER,
        reminderItem,
    }
}

//////Action delete all reminder///////////////
export const authencationReminder = (userName) =>{
    console.log("vao roi", userName);
    return {
        type: types.AUTHENTICATION_REMINDER,
        userName,
    }
  }

//////Action delete all reminder///////////////
export const singupReminder = (userName) =>{
    console.log("vao roi", userName);
    return {
        type: types.SINGUP_REMINDER,
        userName,
    }
}