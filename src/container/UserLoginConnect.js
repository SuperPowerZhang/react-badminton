import {connect} from "react-redux";
import {Login} from '../View/login';
import {
    changeLoginUsername,
    changeLoginPassword,
    login, setToken, setLoginStateTrue, setLoginStateFalse
} from '../reducer/actions'

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
        setLoginStateTrue:()=>{
            dispatch(setLoginStateTrue())
        },
        setLoginStateFalse:()=>{
            dispatch(setLoginStateFalse())
        }
    }
};
const UserLoginConnect=connect(mapStateToProps,mapDispatchToProps)(Login);

export {UserLoginConnect};
