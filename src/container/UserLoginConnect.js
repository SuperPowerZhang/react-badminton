import {connect} from "react-redux";
import {Login} from '../View/login';
import {
    changeLoginUsername,
    changeLoginPassword,
    login
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
        }
    }
};
const UserLoginConnect=connect(mapStateToProps,mapDispatchToProps)(Login);

export {UserLoginConnect};
