import {connect} from "react-redux";
import {Nav} from "../components/Nav";
import {setLoginStateTrue,setLoginStateFalse} from "../reducer/userModify";

const mapStateToProps=state=>{
    return {
        username:state.user_login.username,
        loginState:state.user_login.state
    }
};
const mapDispatchToProps=dispatch=>{
    return{
        setLoginStateTrue:()=>{
            dispatch(setLoginStateTrue())
        },
        setLoginStateFalse:()=>{
            dispatch(setLoginStateFalse())
        }
    }
}


const NavConnect=connect(mapStateToProps,mapDispatchToProps)(Nav);

export default NavConnect;
