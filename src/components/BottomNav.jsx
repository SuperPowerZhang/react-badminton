import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
const NavWrapper=styled.nav`
    display: flex;
    justify-content: space-around;
    text-align: center;
a{
    background-color: rgb(46, 164, 79);
    color: #fff;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 18px;
}
@media (max-width: 600px) {
a{
        padding: 5px 10px;
        max-width:52px;
        margin-top: 20px;
        font-size: 16px;
    }
}
`
const BottomNav=()=>{
    return(
        <NavWrapper>
        <NavLink to='/new_user/api/login' >登录</NavLink>
        <NavLink to='/new_user/api/register'> 注册</NavLink>
        </NavWrapper>
    )
}
export {BottomNav}
