//TODO 样式用Form
import { Form } from "../components/form";
import { request } from "../js/request";
import { BottomNav } from "../components/BottomNav.jsx";
import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { AllLink } from "../components/AllLink";
import { MyContext } from "../App";

const Section = styled.section`
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
  h3 {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    font-size: 38px;
  }
  @media (max-width: 600px) {
    header {
      margin-top: 30px;
      margin-bottom: 20px;
      height: 26px;
    }
    header h3 {
      font-size: 26px;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    font-size: 18px;
    border-radius: 6px;

    label {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    }
    input,
    .submit {
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
    @media (max-width: 600px) {
      padding: 10px;
      label {
        margin-top: 6px;
      }
      input,
      .submit {
        margin: 4px 0 8px;
        height: 28px;
        font-size: 16px;
        border-radius: 4px;
        padding: 3px 10px;
      }
      .submit {
        margin-top: 20px;
        height: 40px;
      }
    }
  }
`;
const Main = styled.main`
  max-width: 1200px;
  padding: 40px;
  background-color: #fff;
  > h3 {
    font-size: 26px;
    line-height: 39px;
    text-align: center;
    color: rgb(36, 41, 46);
    border-bottom: 1px solid rgb(174, 193, 207);
  }
  > ul {
    text-align: center;
    > li {
      padding: 24px;
      text-align: left;
      border-bottom: 1px solid rgba(174, 193, 207, 0.5);
      > h4 {
        display: flex;
        justify-content: space-between;
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 10px;
        > span {
          margin-left: 0;
          margin-right: 0;
        }
        > a {
          margin-left: 0;
          margin-right: 0;
          color: rgb(3, 104, 214);
          font-size: 16px;
          line-height: 22px;
        }
      }
      > p {
        max-width: 1200px;
        margin-top: 5px;
        color: rgb(88, 96, 105);
        line-height: 24px;
        > span {
          display: inline-block;
          font-size: 16px;
          > i {
            font-size: 20px;
          }
        }
        > .time {
          width: 265px;
        }
        > .place {
          width: 150px;
        }
      }
    }
  }
  @media (max-width: 600px) {
    padding: 10px;
    > h3 {
      font-size: 20px;
    }
    > ul li {
      padding: 16px 16px 12px 16px;
      > h4 {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 6px;
        > a {
          font-size: 14px;
          line-height: 18px;
        }
      }
      > p {
        margin-top: 4px;
        > span {
          font-size: 14px;
          > i {
            font-size: 18px;
          }
        }
        > .time {
          width: 235px;
        }
        > .place {
          width: 130px;
        }
      }
    }
  }
`;
const Login = (props) => {
  const { state, modifyLogin } = useContext(MyContext);
    console.log(props)
  const {id,username,password}=state["user_login"];
    const changeLoginUsername=(value)=>{
        modifyLogin({'username':value})
    }
    const changeLoginPassword=(value)=>{
        modifyLogin({'password':value})
    }
    const toMy=()=>{
        props.history.push("/my");
    }
  const onSubmit=(e)=>{
      e.preventDefault();
      request('/new_user/api/login',{username,password},'POST').then(
          (response)=>{
              const {data}=JSON.parse(response);
              const {token,user_id,username}=data;
              //TODO token
              modifyLogin({'id':user_id})
              toMy()
          },(response)=>{
              const {msg,code,errors}=JSON.parse(response);
              const {non_field_errors}=errors;
              console.log(non_field_errors[0])
          }
      );
  };
  return (
    <>
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
          <button
            type="submit"
            className="submit"
            onClick={onSubmit}
          >
            确定
          </button>
        </main>
      </Section>
      <BottomNav />
    </>
  );
};
export default withRouter(Login);
