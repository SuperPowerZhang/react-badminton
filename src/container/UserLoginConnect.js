import {connect} from "react-redux";
import User from '../views/user';
import {
    changeLoginUsername,
    changeLoginPassword,
    login, setToken, setLoginId,setLoginStateTrue, setLoginStateFalse
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
        setLoginId:value=>{
            dispatch(setLoginId(value))
        },
        setLoginStateTrue:()=>{
            dispatch(setLoginStateTrue())
        },
        setLoginStateFalse:()=>{
            dispatch(setLoginStateFalse())
        }
    }
};
const UserLoginConnect=connect(mapStateToProps,mapDispatchToProps)(User);

export {UserLoginConnect};
