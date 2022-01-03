import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 99vw;
  height: 100vh;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, #d2f7ff, #70d6ff);
`;

// const Sqaure = styled.div`
//   position: absolute;
//   left: 0%;
//   top: 0%;
//   width: 25vw;
//   text-decoration: none;
//   font-weight: bold;
//   display: block;
//   border-right: 350px solid transparent;
//   border-bottom: 790px solid #caf8ff;
//   line-height: 50px;
// `;
const ManImg = styled.img`
  position: absolute;
  width: 33%;
  height: 63%;
  right: 10%;
  bottom: 18%;
`;
const CoralL = styled.img`
  z-index: 999;
  position: absolute;
  width: 15%;
  height: 27%;
  bottom: 3%;
  left: 2%;
`;
const CoralS = styled.img`
  z-index: 999;
  position: absolute;
  width: 10%;
  height: 18%;
  bottom: 3%;
  left: 17%;
`;

const Fish = styled.img`
  position: absolute;
  z-index: 999;
  width: 13%;
  height: 15%;
  top: 7%;
  right: 4%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  .icon {
    position: absolute;
    z-index: 999;
    top: 63.5%;
    left: 45.5%;
  }
`;

const SearchTitle = styled.div`
  position: absolute;
  z-index: 999;
  color: black;
  font-size: 2rem;
  top: 63%;
  left: 35%;
  font-weight: 650;
`;

const SearchText = styled.div`
  position: absolute;
  text-align: right;
  z-index: 999;
  font-weight: 650;
  color: #092011;
  font-size: 1.5rem;
  top: 42%;
  left: 29%;
  line-height: 150%;
`;
const MainText = styled.div`
  position: absolute;
  font-weight: 750;
  font-size: 2.7rem;
  top: 28%;
  left: 26%;
  color: #092011;
`;

function LandingSearch() {
  return (
    <Container>
      <ManImg src="메인남자인물.png" alt="" />
      <CoralL src="해초.png" />
      <CoralS src="해초.png" />
      <Fish src="무리.png" />
      <TextContainer>
        <MainText>Fish Searching</MainText>
        <SearchText>
          다양한 물고기의 종류를<br></br>알고 싶으시다면<br></br>
          어종명으로 검색해보세요.<br></br>자세한 정보를 알려드립니다.
        </SearchText>
        <SearchTitle>Search</SearchTitle>
        <div className="icon">
          <FontAwesomeIcon size="2x" icon={faAngleDoubleRight} />
        </div>
      </TextContainer>
      {/* <Sqaure /> */}
    </Container>
  );
}

export default LandingSearch;