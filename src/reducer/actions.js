
export const CHANGE_USERNAME='CHANGE_USERNAME';
export const CHANGE_WECHAT='CHANGE_WECHAT'
export const CHANGE_PASSWORD='CHANGE_PASSWORD';
export const RENEW_PASSWORD='RENEW_PASSWORD';
export const CHANGE_LOGINUSERNAME='CHANGE_LOGINUSERNAME';
export const CHANGE_LOGINPASSWORD='CHANGE_LOGINPASSWORD';
export const LOGIN ='LOGIN';
export const REGISTER='REGISTER';
export const SETTOKEN='SETTOKEN';
export const SETLOGINSTATETRUE='SETLOGINSTATETRUE';
export const SETLOGINSTATETRUEFALSE='SETLOGINSTATETRUEFALSE';
const SETLOGINID='SETLOGINID';
const MODIFYPASSWORDUSERNAME='MODIFYPASSWORDUSERNAME';
const MODIFYPASSWORD='MODIFYPASSWORD';


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
function setLoginId(value) {
    return{
        type:SETLOGINID,
        value
    }
}
function setLoginStateTrue() {
    return{
        type:SETLOGINSTATETRUE
    }
}
function setLoginStateFalse() {
    return{
        type:SETLOGINSTATETRUEFALSE
    }
}

export  {changeUsername,changeWeChat,changePassword,renewPassword,
    changeLoginUsername,changeLoginPassword,register,login,
    setToken,setLoginId,setLoginStateTrue,setLoginStateFalse};
