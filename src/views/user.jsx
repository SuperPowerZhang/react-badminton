import {Form} from "../components/form";
import {request} from "../js/request";
import {BottomNav} from "../components/BottomNav.jsx";
import React from 'react';
import NavConnect from "../container/NavConnect";
import {Activities} from "../components/activities";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";
import {AllLink} from '../components/AllLink'

const Section=styled.section`
//应该用form的样式，再改回来
display: flex;
flex-direction: column;
margin-left: 20px;
margin-right: 20px;
max-width: 600px;
header {
    margin-top: 60px;
    margin-bottom: 40px;
    position: relative;
    height: 38px;
}
h3{
 position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    font-size: 38px;
}
@media(max-width:600px){
    header{
        margin-top: 30px;
        margin-bottom: 20px;
        height: 26px;
    }
    header h3{
        font-size: 26px;
    }
}
main {
display: flex;
flex-direction: column;
    background-color: #fff;
    font-size: 18px;
    border-radius: 6px;
  
 label{
 display: flex;
 flex-direction: column;
 margin-top: 10px;
    }
input, .submit {
   height: 40px;
   border: 1px solid rgb(174, 191, 207);
    border-radius: 6px;
    margin: 4px auto 8px;
    font-size: 18px;
    padding: 5px 16px;
    }
.submit {
    color: #fff;
    margin-top: 24px;
    background-color: rgb(46, 164, 79);
      height: 40px;
}
@media(max-width:600px){
padding: 10px;
    label{
        margin-top: 6px;
            }
     input, .submit {
        margin: 4px 0 8px;
        height: 28px;
        font-size: 16px;
        border-radius: 4px;
        padding: 3px 10px;
    }
    .submit {
    margin-top:20px;
    height: 40px;
    }
    }
    }
`;
const User=({user_login,changeLoginUsername,changeLoginPassword,setToken,setLoginId,setLoginStateTrue,history})=>{
const {id,username,password,state}=user_login;
const onSubmit=(e)=>{
    e.preventDefault();
    request('/new_user/api/login',{username,password},'POST').then(
        (response)=>{
            const {data}=JSON.parse(response);
            const {token,user_id,username}=data;
            setToken(data.token);
            console.log(user_id)
            setLoginId(user_id);
            history.push("/my");
            setLoginStateTrue();

        },(response)=>{
            const {msg,code,errors}=JSON.parse(response);
            const {non_field_errors}=errors;
            console.log(non_field_errors[0])
        }
    );
};
    let eles;
    if(state){
        eles=<>
            <NavConnect />
            <Activities title="我的活动"/>
            <AllLink />
        </>
    }else{
        eles=<>
            <Section>
                <header>
                    <h3>登录</h3>
                </header>
               <main>
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
               </main>
            </Section>
            <BottomNav />
        </>
    }
    return(
        <>{eles}</>
    )
}
export default withRouter(User)
