import React,{useContext} from "react";
import styled from "styled-components";
import {Activities} from "../components/activities";
import {Nav} from "../components/Nav";
import {MyContext} from "../App";
const Header = styled.header`
  max-width: 1200px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Index = () => {
    const {state}=useContext(MyContext)
    const activities=state["all_activities"]
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Activities title="所有活动" activities={activities} />
    </>
  );
};
export { Index };
