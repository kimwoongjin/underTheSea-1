import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, #e2fdfa, #a8f2ff);
`;

const WomanImgL = styled.img`
  position: absolute;
  z-index: 999;
  width: 29%;
  height: 47%;
  right: 35%;
  bottom: 7%;
`;
const WomanImgR = styled.img`
  position: absolute;
  z-index: 999;
  width: 27%;
  height: 63%;
  right: 7%;
  bottom: 25%;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  .icon {
    position: absolute;
    z-index: 999;
    top: 67.5%;
    left: 15%;
  }
`;

const SearchTitle = styled.div`
  position: absolute;
  z-index: 999;
  color: #092011;
  font-size: 2rem;
  top: 67%;
  left: 7%;
  font-weight: 650;
`;

const SearchText = styled.div`
  position: absolute;
  text-align: left;
  z-index: 999;
  font-weight: 650;
  font-size: 1.5rem;
  top: 54%;
  left: 7%;
  line-height: 150%;
  color: #092011;
`;
const MainText = styled.div`
  position: absolute;
  text-align: left;
  font-size: 2.7rem;
  left: 7%;
  line-height: 120%;
  top: 28%;
  font-weight: 750;
  color: #092011;
`;
function LandingGuide() {
  return (
    <Container>
      <WomanImgL src="메인여자인물1.png" alt="" />
      <WomanImgR src="메인여자인물2.png" alt="" />
      <TextContainer>
        <MainText>
          Saltwater fish<br></br>Freshwater fish<br></br> Tips
        </MainText>
        <SearchText>
          물고기 정보에서 <br></br>관리까지 가이드를 해드립니다.
        </SearchText>
        <SearchTitle>Guide</SearchTitle>
        <div className="icon">
          <FontAwesomeIcon size="2x" icon={faAngleDoubleRight} />
        </div>
      </TextContainer>
    </Container>
  );
}

export default LandingGuide;
