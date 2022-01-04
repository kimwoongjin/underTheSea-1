import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import ManageInfo from "./ManageInfo";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 40vh;
`;

const Title = styled.div`
  position: absolute;
  top: 40%;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  line-height: 180%;
  color: #008eff;
`;

const Text = styled.div`
  position: absolute;
  top: 55%;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
  line-height: 180%;
`;

const Img = styled.img`
  position: absolute;
  top: 27%;
  right: 34%;
  width: 7%;
  height: 43%;
`;

const OuterContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 170%;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Manage() {
  return (
    <>
      <Header />
      <Container>
        <Title>My Aquarium</Title>
        <Text>당신의 어항을 관리해보세요!</Text>
        <Img src="작은해초.png" alt="" />
      </Container>
      <OuterContainer />
      <ManageInfo />
    </>
  );
}
export default Manage;
