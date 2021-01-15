import React from 'react'
import NavConnect from "../container/NavConnect";
import styled from 'styled-components'
const Header=styled.header`
max-width: 1200px;
@media (max-width: 600px) {
width: 100%;
}
`
const Index=()=>{
    return (
        <>
            <Header>
                <NavConnect/>
            </Header>

            一进来这里展示activities

        </>


    )
}
export {Index}
