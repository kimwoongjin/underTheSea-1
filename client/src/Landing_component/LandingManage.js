import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* border-bottom: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, #a8f2ff, #d2f7ff);
`;

// const Sqaure = styled.div`
//   position: absolute;
//   right: 0%;
//   top: 0%;
//   width: 25.5vw;
//   text-decoration: none;
//   font-weight: bold;
//   display: block;
//   border-left: 350px solid transparent;
//   border-top: 790px solid #caf8ff;
//   line-height: 50px;
// `;
const WomanImg = styled.img`
  position: absolute;
  z-index: 999;
  width: 40%;
  height: 70%;
  left: 10%;
  bottom: 17%;
`;

const Fish = styled.img`
  position: absolute;
  z-index: 999;
  width: 9%;
  height: 15%;
  top: 13%;
  right: 7%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  .icon {
    position: absolute;
    z-index: 999;
    top: 55.5%;
    right: 31%;
  }
`;

const SearchTitle = styled.div`
  position: absolute;
  z-index: 999;
  font-size: 2rem;
  top: 55%;
  right: 34.5%;
  font-weight: 650;
  color: #092011;
`;

const SearchText = styled.div`
  position: absolute;
  text-align: left;
  z-index: 999;
  font-weight: 650;
  color: #092011;
  font-size: 1.5rem;
  top: 43%;
  right: 19.5%;
  line-height: 150%;
`;
const MainText = styled.div`
  position: absolute;
  font-weight: 750;
  font-size: 2.7rem;
  right: 17%;
  top: 29%;
  color: #092011;
`;

function LandingManage() {
  return (
    <Container>
      <WomanImg src="메인여자인물3.png" alt="" />
      <Fish src="해파리.png" />
      <TextContainer>
        <MainText>Daily Fish Manage</MainText>
        <SearchText>
          어항 관리가 필요하세요?<br></br>Under the Sea에서 도와드립니다.
        </SearchText>
        <SearchTitle>Manage</SearchTitle>
        <div className="icon">
          <FontAwesomeIcon size="2x" icon={faAngleDoubleRight} />
        </div>
      </TextContainer>
      {/* <Sqaure /> */}
    </Container>
  );
}

export default LandingManage;
