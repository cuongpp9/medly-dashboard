import randomstring from 'randomstring';
import firebaseConnect from './../../firebaseConnect';

export const randomIDReminder = ()=>{
    const randomID = "0802-Terralogic-" + randomstring.generate();
    return randomID;
}

export const findIDReminder = (listReminder, id) =>{
    var idEditReminder = -1;
    listReminder.forEach((reminderItem, index)=>{
        if(reminderItem.id === id){
            idEditReminder = index;
        }
    });
    return idEditReminder;
}


export const checkAuthentication = (email, password) =>{
    firebaseConnect.auth().signInWithEmailAndPassword(email, 
        password).then((u)=>{
        }).then((u)=>{
            console.log(u)
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
    });
    return false;
}

export const singupFireBaseReminder = (email, password) =>{
    firebaseConnect.auth().createUserWithEmailAndPassword(email, 
        password).then((u)=>{
        }).then((u)=>{
            console.log(u)
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
    });
    return false;
}