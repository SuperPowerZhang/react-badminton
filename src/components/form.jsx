import styled from 'styled-components'
import React from "react";
 const FormWrapper=styled.form`
   display: flex;
    flex-direction: column;
    justify-content: center;
          @media (max-width: 600px) {
        width: 100vm;
        //TODO 这里需要配合root的样式，改为100%
        margin-top: auto;
        margin-bottom: auto;
        padding: 8px;
      }
      > h3 {
        font-size: 26px;
        height: 27px;
        margin-top: 20px;
        margin-bottom: 20px;
        @media (max-width: 600px) {
          font-size: 20px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
      > label {
        display: flex;
        margin-top: 10px;
        height: 54px;
        @media (max-width: 600px) {
          width: 100%;
          margin-top: 6px;
          height: 42px;
        }
        > span {
          width: 80px;
          @media (max-width: 600px) {
          line-height: 42px;
          display: block;
          width: 100%;
          }
        }
        > input {
          flex-grow: 1;
          height: 40px;
          border: 1px solid rgb(174, 191, 207);
          border-radius: 6px;
          margin-top: 4px;
          margin-bottom: 8px;
          font-size: 18px;
          padding: 5px 16px;
          @media (max-width: 600px) {
            height: 28px;
            font-size: 16px;
            border-radius: 4px;
            padding: 3px 10px;
          }
        }
      }
      > .submit {
        height: 40px;
        color: #fff;
        text-align: center;
        border: 1px solid rgb(174, 191, 207);
        border-radius: 6px;
        margin-top: 24px;
        margin-bottom: 8px;
        font-size: 18px;
        padding: 5px 16px;
        background-color: rgb(46, 164, 79);
        @media (max-width: 600px) {
          width: 100%;
          display: flex;
          flex-grow: 1;
          justify-content: space-around;
          margin-top: 20px;
          height: 28px;
          font-size: 16px;
          border-radius: 4px;
          padding: 3px 10px;
        }
      }
`

const Form=(props)=>{
    return(
        <FormWrapper>
            {props.children}
        </FormWrapper>
    )
}
export {Form}
