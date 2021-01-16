import {Form} from "../components/form";
import {post} from "../js/post";
import styled from 'styled-components'
import {BottomNav} from "../components/BottomNav";
const Token=styled.div`
border: 1px solid red;
width: 200px;
height: 40px;
`
const Login=({user_login,changeLoginUsername,changeLoginPassword,setToken,setLoginStateTrue})=>{
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
    return(
        <>
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
                <Token >
                    {JSON.stringify(state)}
                </ Token>
                <button type="submit" className="submit" onClick={onSubmit}>
                    确定
                </button>
            </Form>
            <BottomNav />
        </>
    )
}
export {Login}
