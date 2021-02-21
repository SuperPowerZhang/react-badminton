import {Link} from "react-router-dom";
import styled from "styled-components";

const Div=styled.div`
padding: 8px 6px;
border:1px solid rgb(225, 228, 232);
background-color:#fff;
margin:10px;
border-radius: 6px;
text-align: center;
>a{
font-size: 12px;
color: rgb(3, 102, 214);
}
`;
const AllLink=()=>{
    return (
        <Div>
          <Link to={'/'}>查看所有活动</Link>
        </Div>
    )
}
export {AllLink}
