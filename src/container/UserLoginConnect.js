import {connect} from "react-redux";
import {Login} from '../View/login';
import {
    changeLoginUsername,
    changeLoginPassword,
    login, setToken, toggleLoginState
} from '../reducer/userModify'

const mapStateToProps=state=>{
    return {
        user_login:state.user_login
    }
};
const mapDispatchToProps=dispatch=>{
    return {
        changeLoginUsername:value=>{
            dispatch(changeLoginUsername(value))
        },
        changeLoginPassword:value=>{
            dispatch(changeLoginPassword(value))
        },
        login:()=>{
            dispatch(login())
        },
        setToken:value=>{
            dispatch(setToken(value))
        },
        toggleLoginState:()=>{
            dispatch(toggleLoginState())
        }
    }
};
const UserLoginConnect=connect(mapStateToProps,mapDispatchToProps)(Login);

export {UserLoginConnect};
