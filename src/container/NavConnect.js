import {connect} from "react-redux";
import {Nav} from "../components/Nav";

const mapStateToProps=state=>{
    return {
        username:state.user_login.username,
        loginState:state.user_login.state
    }
};

const NavConnect=connect(mapStateToProps)(Nav);

export default NavConnect;
