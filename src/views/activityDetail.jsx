import styled from "styled-components";
import NavConnect from "../container/NavConnect";
import {Link, useHistory} from "react-router-dom";
import {request} from "../js/request";
import React from 'react';
import {getTime} from "../js/getTime";

const Header = styled.header`
  max-width: 1200px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const Nav=styled.nav`
    max-width:1200px;
    margin-bottom:15px ;
    background-color: #fff;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    div{
    display: inline-block;
    margin-left: 0px;
    margin-right: 10px;
    }
    button{
    background-color: rgb(46, 164, 79);
    color: #fff;
    padding: 8px 16px;
    border-radius: 6px;
    margin-left: 0;
    margin-right: 0;
    font-size: 18px;
    }
@media (max-width: 600px) {
        margin-bottom:10px ;
        padding: 10px;
        font-size: 14px;
   button{
        width: 100px;
        padding: 3px 8px;
        font-size: 14px;
    }
}
`;
const Main=styled.main`
    max-width:1200px;
    background-color: #fff;
    text-align: left;
 .tab{
    padding: 16px;
    background-color: rgb(241, 248, 255);
    border: 1px solid rgb(200, 225, 255);
    border-radius: 6px 6px 0 0 ;
    border-bottom:none ;
}
 .tab h3{
    margin-bottom: 10px;
    font-size: 22px;
}
 .tab h3{
    margin-bottom: 10px;
}
 .tab  p{
    font-size:16px;
    line-height: 24px;
    //TODO 场地文字的缝隙太小了，可以自己替换下或者数据库改改
    letter-spacing:1px;
}
 .tab   a{
    color: rgb(3, 104, 214);
}
 .tab  p i{
    font-size: 20px;
}
@media (max-width: 600px) {
        padding: 10px;
 .tab{
        padding: 10px;
    }
 .tab h3{
        font-size: 18px;
    }
 .tab h3{
        margin-bottom: 6px;
    }
 .tab  p{
        font-size:14px ;
        line-height: 20px;
    }
 .tab  p i{
        font-size: 18px;
    }
}
.persons{
    border: 1px solid rgb(234, 236, 239);
    border-bottom:none ;
    border-radius: 0 0 6px 6px;
}
.persons ul li{
    display: flex;
    flex-direction: row;
    justify-content:space-between ;
    padding: 8px 16px;
    border-bottom: 1px solid rgb(234, 236, 239);
}
.persons ul .personsTab{
    background-color: rgb(250,251,252);
}

.persons ul li .substitute{
    display: inline-block;
    width: 72px;
    text-align: center;
}

@media (max-width: 600px) {
.persons ul li{
        padding: 4px 10px;
    }
.persons ul li .substitute{
        display: inline-block;
        width: 64px;
        text-align: center;
    }
}
.persons ul li:hover{
    background-color: rgb(250,251,252);
}
.persons ul li span{
display: inline-block;
    margin-left: 0;
    margin-right: 0;
}
`;

const ActivityDetail=(props)=>{
    const path=useHistory().location.pathname,
        [detail,setDetail]=React.useState({"activities": []}),
        [result,setResult]=React.useState([]);
    //得到路径活动x
    const getParams=(path)=>{
        let index=path.indexOf("活");
        return path.substring(index,path.length)
    };
    //计算剩余名额
    const getRemaind=(a,b)=>{
        return  a>b?a-b:0
    };
    //报名
    const signUp=()=>{
        const data={
            "activity_number": detail["activity_number"],
            "joiner": 222 ,
            "is_substitution": detail["is_full"]
        }
        console.log(JSON.stringify(data));
        request("/myAPI/api/substitution",data,'POST').then((response)=>{
            const {code,data}=JSON.parse(response);
            console.log(data)
            setResult(()=>{
                return [code,"报名成功"]
            })
        },(error)=>{
            console.log(error)
            const {code,data}=JSON.parse(error);
            let msg=data["non_field_errors"]||data["joiner"]||data["activity_number"]||"报名失败";
            setResult(()=>{
                return [code,msg]
            })
        });
    };
    // TODO 弹窗，弹窗关掉之后重置result

    React.useEffect(()=>{
        let url="/myAPI/api/activity/?activity_name="+getParams(path);
        console.log(url)
        request(url,'','GET').then((response)=>{
            const {data}=JSON.parse(response);
            const time=getTime(data[0]["activity_start_time"],data[0]["activity_end_time"])
            const remain=getRemaind(data[0]["limit_count"],data[0]["count"])
            setDetail((oldDetail)=>{
                return {...oldDetail,...data[0],time,remain}
            })
        },(error)=>{
            console.log(error)
        });
    },[])
    return(
        <>
            {/*TODO 这里登录状态和没登录状态应该要不一致的*/}
            <Header>
                <NavConnect />
            </Header>
            <Nav>
                <div>已有 <span>{detail.count} </span> 人报名，余 <span>{detail["remain"]}</span> 个名额，满员后仅可替补。</div>
                <button id="signUpForActivity" onClick={signUp}>
                    {/*TODO 判断登录的用户是否已经报名了，如果报名了这里是取消报名和取消替补*/}
                    {detail["is_full"]?"报名替补":"报名"}
                </button>
            </Nav>
            <Main>
                <div className="tab">
                    <p>{result[0]},{result[1]}</p>
                    <h3>活动详情</h3>
                    <div>
                        <p><svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-time"></use>
                        </svg> {detail["time"]}</p>
                        <p><svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-changdidingdan-yiyuding"></use>
                        </svg> {detail["place_number"]}</p>
                        {/*TODO 地图链接*/}
                        <p><svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-Place"></use>
                        </svg>
                             {detail["activity_place"]}</p>
                    </div>
                </div>
                <div className="persons">
                    <ul>
                        <li className="personsTab">
                            <span>报名人员</span>
                            <span className="substitute">是否替补</span>
                        </li>
                        {/*TODO 翻页功能*/}
                        {detail["activities"].map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span>{item["joiner"]}</span>
                                        {/*/!*TODO 缺了是否替补属性*!/*/}
                                        <span className="substitute">正式</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Main>

        </>
    )
}
export {ActivityDetail}
