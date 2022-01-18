import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Header2 from "../component/Header2";

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
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Tips = styled.div`
  width: 34vw;
  height: 90vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #80808;
  }
`;
const SeaImg = styled.img`
  width: 100%;
  height: 100%;
  :hover {
    filter: brightness(90%);
    transform: scale(1.05);
    transition: all 300ms ease-in;
  }
`;
const FreshImg = styled.img`
  width: 100%;
  height: 100%;
  :hover {
    filter: brightness(90%);
    transform: scale(1.05);
    transition: all 300ms ease-in;
  }
`;
const Freshwater = styled.div`
  width: 33vw;
  height: 90vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Guide() {
  const Navigate = useNavigate();
  const goToSeawater = () => {
    Navigate("/seawaterguide");
  };
  const goToTips = () => {
    Navigate("/honeytips");
  };
  return (
    <>
      <Container>
        <Header2></Header2>
        <MiddleContainer>
          <Seawater onClick={goToSeawater}>
            <SeaImg src="가이드타이틀이미지1.png" />
          </Seawater>
          <Tips onClick={goToTips}>Tips</Tips>
          <Freshwater>
            <FreshImg src="가이드타이틀이미지2.png" />
          </Freshwater>
        </MiddleContainer>
      </Container>
    </>
  );
}
export default Guide;
