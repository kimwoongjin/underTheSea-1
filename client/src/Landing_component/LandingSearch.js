import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 99vw;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Sqaure = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  width: 30vw;
  text-decoration: none;
  font-weight: bold;
  display: block;
  border-right: 350px solid transparent;
  border-bottom: 790px solid #caf8ff;
  line-height: 50px;
`;
const ManImg = styled.img`
  position: absolute;
  width: 33%;
  height: 63%;
  right: 5%;
  bottom: 20%;
`;
const CoralL = styled.img`
  z-index: 999;
  position: absolute;
  width: 15%;
  height: 27%;
  bottom: 0%;
  left: 2%;
`;
const CoralS = styled.img`
  z-index: 999;
  position: absolute;
  width: 10%;
  height: 18%;
  bottom: 0%;
  left: 17%;
`;

const Fish = styled.img`
  position: absolute;
  z-index: 999;
  width: 13%;
  height: 15%;
  top: 12%;
  left: 12%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  .icon {
    position: absolute;
    z-index: 999;
    top: 59%;
    left: 44%;
  }
`;

const SearchTitle = styled.div`
  position: absolute;
  z-index: 999;
  color: black;
  font-size: 2.2rem;
  top: 59%;
  left: 34%;
  font-weight: 850;
`;

const SearchText = styled.div`
  position: absolute;
  text-align: center;
  z-index: 999;
  font-weight: 480;
  color: black;
  font-size: 2rem;
  top: 43%;
  left: 29%;
  line-height: 150%;
`;

function LandingSearch() {
  return (
    <Container>
      <ManImg src="메인남자인물.png" alt="" />
      <CoralL src="해초.png" />
      <CoralS src="해초.png" />
      <Fish src="무리.png" />
      <TextContainer>
        <SearchText>
          물고기를 키우고 싶으세요?<br></br>자세한 정보를 알려드립니다.
        </SearchText>
        <SearchTitle>Search</SearchTitle>
        <div className="icon">
          <FontAwesomeIcon size="3x" icon={faAngleDoubleRight} />
        </div>
      </TextContainer>
      <Sqaure />
    </Container>
  );
}

export default LandingSearch;
