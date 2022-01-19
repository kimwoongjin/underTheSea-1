import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, #a8f2ff, #d2f7ff);
`;

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
  position: absolute;
  right: 10%;
  display: flex;
  flex-direction: column;
  /* border: 2px dashed red; */
`;

const SearchTitle = styled.div`
  display: flex;
  z-index: 999;
  font-size: 1.8rem;
  font-weight: 650;
  color: #092011;
  /* font-family: "Kfont"; */
  font-family: "SCBfont";
  margin-top: 5px;
`;

const SearchText = styled.div`
  text-align: left;
  z-index: 999;

  color: #092011;
  font-size: 1.5rem;

  line-height: 150%;

  font-family: "Kfont";
`;
const MainText = styled.div`
  /* position: absolute; */
  font-weight: 750;
  font-size: 2.7rem;
  /* right: 25.5%; */
  /* top: 29%; */
  color: #092011;
  font-family: "SCBfont";
  margin-bottom: 10px;
  /* font-family: "Kfont"; */
`;

const IconCover = styled.div`
  margin-left: 10px;
`;

function LandingManage() {
  return (
    <Container>
      <WomanImg
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/메인여자인물3.png"
        alt="메인여자인물3.png"
      />
      <Fish
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해파리.png"
        alt="해파리.png"
      />
      <TextContainer>
        <MainText>
          Weekly Aquarium
          <br />
          Management
        </MainText>
        <SearchText>
          어항 관리가 필요하세요?<br></br>Under the Sea에서 도와드립니다.
        </SearchText>
        <SearchTitle>
          Management
          <IconCover>
            <FontAwesomeIcon size="1x" icon={faAngleDoubleRight} />
          </IconCover>
        </SearchTitle>
      </TextContainer>
      {/* <Sqaure /> */}
    </Container>
  );
}

export default LandingManage;
