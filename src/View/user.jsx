import styled from "styled-components";

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
    form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
      @media (max-width: 600px) {
        width: 100%;
      }
      > h3 {
        font-size: 26px;
        height: 27px;
        margin-top: 20px;
        margin-bottom: 20px;
        @media (max-width: 600px) {
          font-size: 20px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
      > label {
        display: flex;
        margin-top: 10px;
        height: 54px;
        @media (max-width: 600px) {
          width: 100%;
          margin-top: 6px;
          height: 42px;
        }
        > span {
          width: 80px;
          @media (max-width: 600px) {
          line-height: 42px;
          }
        }
        > input {
          flex-grow: 1;
          height: 40px;
          border: 1px solid rgb(174, 191, 207);
          border-radius: 6px;
          margin-top: 4px;
          margin-bottom: 8px;
          font-size: 18px;
          padding: 5px 16px;
          @media (max-width: 600px) {
            height: 28px;
            font-size: 16px;
            border-radius: 4px;
            padding: 3px 10px;
          }
        }
      }
      > .submit {
        height: 40px;
        color: #fff;
        text-align: center;
        border: 1px solid rgb(174, 191, 207);
        border-radius: 6px;
        margin-top: 24px;
        margin-bottom: 8px;
        font-size: 18px;
        padding: 5px 16px;
        background-color: rgb(46, 164, 79);
        @media (max-width: 600px) {
          width: 100%;
          display: flex;
          flex-grow: 1;
          justify-content: space-around;
          margin-top: 20px;
          height: 28px;
          font-size: 16px;
          border-radius: 4px;
          padding: 3px 10px;
        }
      }
    }
  }
`;

const User = ({
  user,
  changeUsername,
  changeWeChat,
  changePassword,
  renewPassword,
}) => {
  const { username, weChat, password, new_password } = user;
  console.log("user加载了");
  return (
    <>
      <Header>
        <h1>小羽毛报名系统</h1>
      </Header>
      <Main>
        <section>
          <p className="tips">提示话术——可能没有</p>
          <form className="form" action="" method="post">
            <h3> 标题替换</h3>
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
            <button type="submit" className="submit">
              确定
            </button>
          </form>
        </section>
      </Main>
    </>
  );
};

export default User;
