import {Form} from "../components/form";
import {post} from "../js/post";

const Login=({user_login,changeLoginUsername,changeLoginPassword,login})=>{
const {username,password}=user_login;
const onSubmit=(e)=>{
    e.preventDefault();
    console.log(username,password);
    post('/new_user/api/login',{"username":"测试1214","password": "ceshi1214"}).then(
        (response)=>{
            console.log('haha',response)
        }
    );
    login();
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
                <button type="submit" className="submit" onClick={onSubmit}>
                    确定
                </button>
            </Form>
        </>
    )
}
export {Login}
