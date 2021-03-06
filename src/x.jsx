
import React,{useContext } from 'react'
import {MyContext} from "./App";

const X=()=>{
    const data=useContext(MyContext)
    const xyz=()=>{
        data.modifyState()
    }
    return (
        <>
        <div>{data.state}</div>
        <button onClick={xyz}>xxxx</button>
            </>
    )
}

export {X}
