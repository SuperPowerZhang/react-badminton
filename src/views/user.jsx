import { Form } from "../components/form";
import { request } from "../js/request";
import { BottomNav } from "../components/BottomNav.jsx";
import React, { useContext } from "react";
import NavConnect from "../container/NavConnect";
import { Activities } from "../components/activities";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { AllLink } from "../components/AllLink";
import { MyContext } from "../App";
import { Nav } from "../components/Nav";

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
        > .time,.place  {
          width: 265px;
        }
        > .formal .full {
          width: 100px;
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
        > .time,.place  {
          width: 200px;
        }
        > .formal .full {
          width: 50px;
        }
      }
    }
  }
`;

const User = (props) => {
  const { state } = useContext(MyContext);
  const activities = state["my_activities"];
  console.log(activities);
  return (
    <>
      <Nav />
      <Main>
        <h3>我的活动</h3>
        <ul>
          {activities.map((item) => {
            if (item["is_alive"]) {
              return (
                <li key={item["activity_number"]}>
                  <h4>
                    <span>{item["activity_name"]}</span>
                    <Link to={`/my/${item["activity_name"]}`}>查看详情</Link>
                  </h4>
                  <p>
                    <span className="time">
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-time"></use>
                      </svg>
                      &nbsp;{item["time"]}
                    </span>
                    <span className="formal">
                    {
                      item["is_substitution"]?<>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-informal-copy"></use>
                        </svg>
                        &nbsp;<em>替补</em></>:<>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-formal"></use>
                        </svg>
                        &nbsp;<em>正式</em></>
                    }
                       </span>
                    <span className="place">
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-Place"></use>
                      </svg>
                      &nbsp; {item["activity_place"]}
                    </span>

                    <span className="full">
                    {
                        item["is_full"]? <>
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-PersonAvailable-1"></use>
                          </svg>&nbsp;
                          <em>已报满</em>
                            </>:<>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-PersonAvailable"></use>
                        </svg>
                        &nbsp;<em>可报名</em>
                        </>
                    }
                         </span>
                  </p>
                </li>
              );
            }
          })}
        </ul>
      </Main>
      <AllLink />
    </>
  );
};

export default User;
