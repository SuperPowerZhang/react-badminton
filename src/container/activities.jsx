import styled from "styled-components";
import React from 'react';

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
          > a {
            margin-left: 0;
            margin-right: 0;
            color: rgb(3, 104, 214);
            font-size: 16px;
            line-height: 22px;
          }
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
const Activities=(props)=>{
    const {title}=props;
    return(
        <Main>
            <h3>{title}</h3>
            <ul>
                {/*TODO 这里的活动是要根据数据遍历渲染出来的*/}
                <li>
                    <h4>
                        {/*  i.activity_name*/}
                        <span>活动208</span>
                        {/*href="/new_user/activity/{{ i.activity_number }}.html"*/}
                        <a>查看详情</a>
                    </h4>
                    <p>
              <span className="time">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-time"></use>
                </svg>
                  {/*  i .activity_start_time-.activity_end_time.time*/}
                  &nbsp;0115周二 20:00-22:00
              </span>
                        <span className="place">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-Place"></use>
                </svg>
                            {/*  i .activity_place*/}
                            &nbsp; 龙腾羽毛球馆
              </span>
                        <span className="place">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-PersonAvailable"></use>
                </svg>
                            {/*  i.is_full*/}
                            &nbsp;<em>可报名</em>
              </span>
                    </p>
                </li>
            </ul>
        </Main>
    )
};
export {Activities};
