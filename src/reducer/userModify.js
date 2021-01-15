const initState={


    user_register:{
        username:'',
        weChat:'',
        password:'',
        new_password:''
    },
    user_login:{
        state:false,
        username:'李四来登录',
        password:'22222',
        token: ""
    }
};
const CHANGE_USERNAME='CHANGE_USERNAME';
const CHANGE_WECHAT='CHANGE_WECHAT'
const CHANGE_PASSWORD='CHANGE_PASSWORD';
const RENEW_PASSWORD='RENEW_PASSWORD';
const CHANGE_LOGINUSERNAME='CHANGE_LOGINUSERNAME';
const CHANGE_LOGINPASSWORD='CHANGE_LOGINPASSWORD';
const LOGIN ='LOGIN';
const REGISTER='REGISTER';
const SETTOKEN='SETTOKEN';
const TOGGLELOGINSTATE='TOGGLELOGINSTATE'
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
function changeLoginUsername(value){
    return{
        type:CHANGE_LOGINUSERNAME,
        value
    }
}
function changeLoginPassword(value){
    return{
        type:CHANGE_LOGINPASSWORD,
        value
    }
}
function register(){
    return{
        type:REGISTER
    }
}
function login(){
    return{
        type:LOGIN
    }
}
function setToken(value) {
    return{
        type:SETTOKEN,
        value
    }
}
function toggleLoginState() {
return{
    type:TOGGLELOGINSTATE
}
}

const user_newModifier=(state=initState,action)=>{
    switch(action.type){
        case 'CHANGE_USERNAME':
            return {...state,user_register: {...state.user_register,username:action.value}}
        case 'CHANGE_WECHAT':
            return {...state,user_register: {...state.user_register,weChat:action.value}}
        case 'CHANGE_PASSWORD':
            return {...state,user_register: {...state.user_register,password:action.value}}
        case 'RENEW_PASSWORD':
            return {...state,user_register: {...state.user_register,new_password:action.value}}
        case 'CHANGE_LOGINUSERNAME':
            return {...state,user_login: {...state.user_login,username:action.value}}
        case 'CHANGE_LOGINPASSWORD':
            return {...state,user_login: {...state.user_login,password:action.value}}
        case 'LOGIN':
            return {...state,user_login: {...initState.user_login}}
        case 'REGISTER':
            return {...state,user_register: {...initState.user_register}}
        case 'SETTOKEN':
            return{...state, user_login:{...state.user_login,token: action.value }}
        case 'TOGGLELOGINSTATE':
                return{...state, user_login:{...state.user_login,state: !state.user_login.state }}

    }
    return state;
}
export  {user_newModifier,changeUsername,changeWeChat,changePassword,renewPassword,changeLoginUsername,changeLoginPassword,register,login,setToken,toggleLoginState};
