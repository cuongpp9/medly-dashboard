import *as types from "../types/ActionType";
import * as utility from '../utility';

var initialState = {
    email: '',
    password: ''
}; 

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.AUTHENTICATION_REMINDER:
            console.log("Kiem tra Action:",action.userName.email);
            if(action.userName.email !==null && action.userName.password !==null){
                utility.checkAuthentication(action.userName.email, action.userName.password)
            }
            return [...state];

        case types.SINGUP_REMINDER:
            console.log("Kiem tra Action:",action.userName.email);
            if(action.userName.email !==null && action.userName.password !==null){
                utility.singupFireBaseReminder(action.userName.email, action.userName.password)
            }
            return [...state];
        default: return state;
    }
};

export default myReducer;