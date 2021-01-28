import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import {login} from "../reducer/userModify";
const NavWrapper=styled.ul`
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
>li{
        margin-left: 0;
        margin-right: 0;
    >i{
            font-size: 26px;
        }
    >a,.fakeA {
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
    >li a {
            font-size: 14px;
        }
    }
`
const Nav=({username,id,loginState,setLoginStateFalse,login})=>{
    console.log(username,loginState,id);
    const onLogout=()=>{
        console.log(11111)
        login();
        setLoginStateFalse();
    }
    const eles=loginState?(
        <>
            <li>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-badminton"></use>
                </svg>
                <span>用户: {username} </span>
                <span> ID: {id}</span>
            </li>
            <li>
                <span className="fakeA" onClick={onLogout}>退出登录 </span>
            </li>
        </>
    ):(
        <>
            <li>
                <NavLink to='/login' >登录</NavLink>
            </li>
            <li>
                <NavLink to='/register'> 注册</NavLink>
            </li>
        </>
    )
    return(
        <NavWrapper>{eles}</NavWrapper>
    )
}
export {Nav}
