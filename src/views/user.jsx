import {Form} from "../components/form";
import {post} from "../js/post";
import {BottomNav} from "../components/BottomNav.jsx";
import React from 'react';
import NavConnect from "../container/NavConnect";
import {Activities} from "../container/activities";
import {withRouter} from "react-router-dom"

const User=({user_login,changeLoginUsername,changeLoginPassword,setToken,setLoginStateTrue,history})=>{
const {username,password,state}=user_login;
const onSubmit=(e)=>{
    e.preventDefault();
    post('/new_user/api/login',{username,password}).then(
        (response)=>{
            const {data}=JSON.parse(response);
            const {token,user_id,username}=data;
            setToken(data.token);
            setLoginStateTrue();
            history.push("/")
        }
    );
};
    let eles;
    if(state){
        eles=<>
            <NavConnect />
            <Activities title="我的活动"/>
        </>
    }else{
        eles=<>
            <Form>
                <h3>登录</h3>
                <label>
                    <span>用户名:</span>
                    <input
                        onChange={e => changeLoginUsername(e.target.value)                    }
                        type="text"
                        name="username"
                        required="required"
                        value={username}
                    />
                </label>
                <label>
                    <span>密码:</span>
                    <input
                        type="password"
                        onChange={e =>  changeLoginPassword(e.target.value)                        }
                        name="password"
                        required="required"
                        value={password}
                    />
                </label>
                <button type="submit" className="submit" onClick={onSubmit}>
                    确定
                </button>
            </Form>
            <BottomNav />
        </>
    }
    return(
        <>{eles}</>
    )
}
export default withRouter(User)
