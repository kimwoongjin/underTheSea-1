import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Header from "../component/Header";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const MiddleContainer = styled.div`
  display: flex;
`;
const Seawater = styled.div`
  width: 33vw;
  height: 90vh;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Tips = styled.div`
  width: 34vw;
  height: 90vh;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Freshwater = styled.div`
  width: 33vw;
  height: 90vh;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Guide() {
  const Navigate = useNavigate();
  const goToSeawater = () => {
    Navigate("/seawaterguide");
  };
  return (
    <>
      <Container>
        <Header></Header>
        <MiddleContainer>
          <Seawater onClick={goToSeawater}>Seawater Guide</Seawater>
          <Tips>Tips</Tips>
          <Freshwater>Freshwater Guide</Freshwater>
        </MiddleContainer>
      </Container>
    </>
  );
}
export default Guide;
