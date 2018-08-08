import *as types from "../types/ActionType";
import * as utility from '../utility';

var initialState = {
    email: '',
    password: ''
}; 

export default (state = initialState, action) =>{
    switch(action.type){
        case types.AUTHENTICATION_REMINDER:
            console.log("Kiem tra Action:",action.userName.email);
            if(action.userName.email !==null && action.userName.password !==null){
                utility.checkAuthentication(action.userName.email, action.userName.password)
            }
            return [...state];

        case types.SIGNUP_REMINDER:
            console.log("Kiem tra Action:",action.userName.email);
            if(action.userName.email !==null && action.userName.password !==null){
                utility.singupFireBaseReminder(action.userName.email, action.userName.password)
            }
            return [...state];

        case types.SIGNOUT_REMINDER:
            console.log("Kiem tra Action:",action);
            utility.singoutFireBaseReminder();
            return [...state];
        default: return state;
    }
};
