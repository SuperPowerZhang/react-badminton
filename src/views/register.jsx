import styled from "styled-components";
import {Form} from '../components/form'
import {post} from "../js/post";

const Header = styled.header`
margin-top: 60px;
margin-bottom: 40px;
position: relative;
height: 38px;
>h1{
position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    font-size: 38px;
}
@media(max-width:600px){
        margin-top: 30px;
        margin-bottom: 20px;
        position: relative;
        height: 26px;
   >h1{
        font-size: 26px;
    }
`;
const Main = styled.main`
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 600px) {
    width: 100%;
  }
  > section {
    max-width: 480px;
    padding: 20px;
    background-color: #fff;
    font-size: 18px;
    border-radius: 6px;
    @media (max-width: 600px) {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      > h3 {
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
`;

const Register = ({
  user_register,
  changeUsername,
  changeWeChat,
  changePassword,
  renewPassword,
    register
}) => {
  const { username, weChat, password, new_password } = user_register;
  let tips=null;
  const onSubmit=(e)=>{
    e.preventDefault();
    post('/new_user/api/register/',{
      "username": username,
      "weChat": weChat,
      "password": password
    }).then(({code,msg,data})=>{
      console.log(msg)
    },(error)=>{
      let t=(JSON.parse(error)).username[0];
      console.log('报错了')
      tips= <p className="tips">{t}</p>;
      //TODO tips不会自己更新在页面上，为啥呀
      console.log(tips)
    })
    register();
  }
  return (
    <>
      <Header>
        <h1>小羽毛报名系统</h1>
      </Header>
      <Main>
        <section>
          {tips}
          <Form className="form" action="" method="post">
            <h3>注册</h3>
            <label>
              <span>用户名:</span>
              <input
                onChange={(e) => {
                  changeUsername(e.target.value);
                }}
                type="text"
                name="username"
                required="required"
                value={username}
              />
            </label>
            <label>
              <span>微信群昵称:</span>
              <input
                type="text"
                onChange={(e) => changeWeChat(e.target.value)}
                name="weChat"
                required="required"
                value={weChat}
              />
            </label>
            <label>
              <span>密码:</span>
              <input
                type="password"
                onChange={(e) => changePassword(e.target.value)}
                name="password"
                required="required"
                value={password}
              />
            </label>
            <label>
              <span>新密码:</span>
              <input
                type="password"
                onChange={(e) => renewPassword(e.target.value)}
                name="new_password"
                required="new_password"
                value={new_password}
              />
            </label>
            <button type="submit" className="submit" onClick={onSubmit}>
              确定
            </button>
          </Form>
        </section>
      </Main>
    </>
  );
};

export default Register;
