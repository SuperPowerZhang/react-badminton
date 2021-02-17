import styled from "styled-components";
import React from 'react';
import  {post} from '../js/post'
import { Link } from "react-router-dom";
import {getTime} from "../js/getTime";

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

const Activities=(props)=>{
    const initialActivities=[];
    const {title}=props,
        [activities,setActivities]=React.useState(initialActivities);

    //判断某个活动在activities是否已经存在的函数。因为每个item增加了time属性，判断重复的时候删除右边的大括号即可
    const checkDuplication=(origin,newItem)=>{
        const origin1=JSON.stringify(origin)
        const newItem1=JSON.stringify(newItem)
       return origin1.indexOf(newItem1.substring(0,newItem1.length-1))===-1;
    }
    //页面第一次渲染的生命周期中去获取activities数据
    React.useEffect(()=>{
        post('/myAPI/api/activity/','','GET').then((response)=>{
            const {data}=JSON.parse(response);
            data.map((item,index)=>{
                if(checkDuplication(activities,item)) {
                    const time=getTime(item["activity_start_time"],item["activity_end_time"])
                    setActivities((oldActivities) => {
                        return [...oldActivities, {...item,"time":time}]
                    })
                }else {
                    console.error("重复了")
                }
            })
        },(error)=>{
            console.log(error)
        });
    },[])

    return(
        <Main>
            <h3>{title}</h3>
            <ul>{activities.map((item)=>{
            return(
                <li key={item["activity_number"]}>
                    <h4>
                        <span>{item["activity_name"]}</span>
                        <Link to={`/detail/${item["activity_name"]}`}  >查看详情</Link>
                    </h4>
                    <p>
              <span className="time">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-time"></use>
                </svg>
                  &nbsp;{item["time"]}
              </span>
                        <span className="place">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-Place"></use>
                </svg>
                            &nbsp; {item["activity_place"]}
              </span>
                        <span className="place">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-PersonAvailable"></use>
                </svg>
                            &nbsp;<em>{item["is_full"]?"已报满":"可报名"}</em>
              </span>
                    </p>
                </li>
            )})}
            </ul>
        </Main>
    )
};
export {Activities};
