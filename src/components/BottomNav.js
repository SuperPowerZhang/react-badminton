import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";
const NavWrapper = styled.ul`
  max-width: 1200px;
  margin-top: 40px;
  height: 110px;
  margin-bottom: 20px;
  background-color: #fff;
  display: flex;
  line-height: 110px;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  > li {
    margin-left: 0;
    margin-right: 0;
    > i {
      font-size: 26px;
    }
    > a {
      font-weight: 700;
      font-size: 16px;
      color: rgb(3, 102, 214);
    }
  }
  @media (max-width: 600px) {
    margin-top: 20px;
    height: 60px;
    margin-bottom: 10px;
    line-height: 60px;
    padding-left: 10px;
    padding-right: 10px;
    > li a {
      font-size: 14px;
    }
  }
`;
const BottomNav = () => {
  return (
    <NavWrapper>
      <li>
        {" "}
        <NavLink to="/register">立即注册</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/password_modify"> 修改密码</NavLink>{" "}
      </li>
    </NavWrapper>
  );
};
export { BottomNav };
