const initState={
    user:{
        username:'张三',
        weChat:'haha',
        password:'111111',
        new_password:''
    }
}
const CHANGE_USERNAME='CHANGE_USERNAME';
const CHANGE_WECHAT='CHANGE_WECHAT'
const CHANGE_PASSWORD='CHANGE_PASSWORD';
const RENEW_PASSWORD='RENEW_PASSWORD';

function changeUsername(value){
    return{
        type:CHANGE_USERNAME,
        value
    }
}
function changeWeChat(value){
    return{
        type:CHANGE_WECHAT,
        value
    }
}
function changePassword(value){
    return{
        type:CHANGE_PASSWORD,
        value
    }
}
function renewPassword(value){
    return{
        type:RENEW_PASSWORD,
        value
    }
}



const userModifier=(state=initState,action)=>{
    switch(action.type){
        case 'CHANGE_USERNAME':
            return {...state,user: {...state.user,username:action.value}}
        case 'CHANGE_WECHAT':
            return {...state,user: {...state.user,weChat:action.value}}
        case 'CHANGE_PASSWORD':
            return {...state,user: {...state.user,password:action.value}}
        case 'RENEW_PASSWORD':
            return {...state,user: {...state.user,new_password:action.value}}
    }
    return state;
    //直接提交了
    // case 'SUBMIT':
    //     return {...state,}
}
export  {changeUsername,changeWeChat,changePassword,renewPassword,userModifier};
