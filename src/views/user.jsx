import {Form} from "../components/form";
import {post} from "../js/post";
import {BottomNav} from "../components/BottomNav.jsx";
import React from 'react';
import NavConnect from "../container/NavConnect";
import {Activities} from "../container/activities";

const User=({user_login,changeLoginUsername,changeLoginPassword,setToken,setLoginStateTrue})=>{
const {username,password,state}=user_login;
    console.log(state)
const onSubmit=(e)=>{
    e.preventDefault();
    console.log(username,password);
    post('/new_user/api/login',{"username":"测试1214","password": "ceshi1214"}).then(
        (response)=>{
            console.log(typeof response,(JSON.parse(response)).token);
            setToken((JSON.parse(response)).token);
            setLoginStateTrue();
            //TODO 这里刷新页面了(1)用户体验不好（2）登录状态丢失
            window.open(`/`,"_self")
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
export {User}
