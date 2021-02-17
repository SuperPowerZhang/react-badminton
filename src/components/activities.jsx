import styled from "styled-components";
import React from 'react';
import  {post} from '../js/post'
import { useHistory } from "react-router-dom";

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
    const initialActivities=[];
    let history = useHistory();
    const {title}=props,
        [activities,setActivities]=React.useState(initialActivities);
    React.useEffect(()=>{
        post('/myAPI/api/activity/','','GET').then((response)=>{
            const {data}=JSON.parse(response);
            data.map((item,index)=>{
                if(JSON.stringify(activities).indexOf(JSON.stringify(item))===-1) {
                    console.log(item["activity_start_time"])
                    setActivities((oldActivities) => {
                        return [...oldActivities, item]
                    })
                }
            })
        },(error)=>{
            console.log(error)
        });
    },[])
    const onClickDetail=(e)=>{
        e.preventDefault();
        history.push("/activity_detail");
        console.log(111111)
    }
    return(
        <Main>
            <h3>{title}</h3>
            <ul>{
           activities.map((item)=>{
            return(
                <li key={item["activity_number"]}>
                    <h4>
                        <span>{item["activity_name"]}</span>
                        <a onClick={onClickDetail} >查看详情</a>
                    </h4>
                    <p>
              <span className="time">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-time"></use>
                </svg>
                  &nbsp;{item["activity_start_time"]}-{item["activity_end_time"]}
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
            )
            })}
            </ul>
        </Main>
    )
};
export {Activities};
