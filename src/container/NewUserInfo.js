import {connect} from "react-redux";
import Register from '../View/register';
import {changeUsername, changeWeChat, changePassword, renewPassword, register} from '../reducer/actions'

const mapStateToProps=state=>{
    return {
        user_register:state.user_register
    }
};
const mapDispatchToProps=dispatch=>{
    return {
        changeUsername:value=>{
            dispatch(changeUsername(value))
        },
        changeWeChat:value=>{
            dispatch(changeWeChat(value))
        },
        changePassword:value=>{
            dispatch(changePassword(value))
        },
        renewPassword:value=>{
            dispatch(renewPassword(value))
        },
        register:()=>{
            dispatch(register())
        }
    }
};
const NewUserInfo=connect(mapStateToProps,mapDispatchToProps)(Register);

export {NewUserInfo};
