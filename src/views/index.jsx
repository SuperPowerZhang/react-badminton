import React from "react";
import styled from "styled-components";
import {Activities} from "../components/activities";
import {Nav} from "../components/Nav";
const Header = styled.header`
  max-width: 1200px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Index = () => {
    //TODO get请求获取活动列表，遍历生成列表
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Activities title="所有活动" />
    </>
  );
};
export { Index };
