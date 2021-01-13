import {connect} from "react-redux";
import User from '../View/user';
import {changeUsername,changeWeChat,changePassword,renewPassword} from '../reducer/userModify'

const mapStateToProps=state=>{
    return {
        user:state.user
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
        }
    }
};
const NewUserInfo=connect(mapStateToProps,mapDispatchToProps)(User);

export default NewUserInfo;
