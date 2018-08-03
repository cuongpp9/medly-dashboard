import randomstring from 'randomstring';

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