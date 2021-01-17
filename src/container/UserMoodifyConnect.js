import {renewPassword} from "../reducer/actions";
import {connect} from "react-redux";

const mapStateToProps=state=>{
    return {
        user_modify :state.user_modify
    }
};

const UserModifyConnect=connect()()
// renewPassword:value=>{
//     dispatch(renewPassword(value))
// },
