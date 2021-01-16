import {Form} from "../components/form";
import {post} from "../js/post";
import styled from 'styled-components'
import {BottomNav} from "../components/BottomNav";
const Token=styled.div`
border: 1px solid red;
width: 200px;
height: 40px;
`
const Login=({user_login,changeLoginUsername,changeLoginPassword,login,setToken,setLoginStateTrue})=>{
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
            //TODO 这里刷新页面了
            window.open(`/`,"_self")
            // login();
        }
    );

    // get().then((response)=>{
    //
    //   let token=JSON.parse(response)["token"]
    //   console.log(token)
    //   get('/blog/api/category/',{"Authorization":"JWT "+token},true).then((response1)=>{
    //     console.log(response1)
    //   })
    // //  {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMDIsInVzZXJuYW1lIjoiXHU2ZDRiXHU4YmQ1MTIxNCIsImV4cCI6MTYwNzk1MDU3OSwiZW1haWwiOiIiLCJvcmlnX2lhdCI6MTYwNzg2NDE3OX0.FxuWOUlObuH9F7NWnu2_aSioSpAD3JrOSoEQh0qlS5Y"}
    // // 后面要在发送请求的时候加上token，Authorization: JWT 上面的token
    // },(error)=>{
    //   console.error('oh no',error)
    // })
};
    return(
        <>
            <Form>
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
