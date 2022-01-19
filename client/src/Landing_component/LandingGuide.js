import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
  position: absolute;
  left: 10%;
  bottom: 50%;
  display: flex;
  flex-direction: column;
  /* border: 2px dashed red; */
`;

const SearchTitle = styled.div`
  display: flex;
  color: #092011;
  font-size: 2rem;
  font-weight: 650;
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
  text-align: left;
  font-size: 2.7rem;
  margin-bottom: 10px;
  line-height: 120%;
  font-weight: 750;
  color: #092011;
`;

const IconCover = styled.div`
  margin-left: 10px;
`;

function LandingGuide() {
  const play = () => {
    var audio = document.getElementById("audio_play");
    console.log("Music is my life");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };
  return (
    <Container onclick={play}>
      <audio id="audio_play" src="waterdrop.mp3"></audio>
      <WomanImgL
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/메인여자인물1.png"
        alt="메인여자인물1.png"
      />
      <WomanImgR
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/메인여자인물2.png"
        alt="메인여자인물2.png"
      />
      <TextContainer>
        <MainText>해수어와 담수어 사육정보</MainText>
        <SearchText>
          사육정보를 확인하고 자신만의 노하우를 공유해주세요!
        </SearchText>
        <Link style={{ textDecoration: "none", color: "black" }} to="/guide">
          <SearchTitle>
            Guide
            <IconCover>
              <FontAwesomeIcon size="1x" icon={faAngleDoubleRight} />
            </IconCover>
          </SearchTitle>
        </Link>
      </TextContainer>
    </Container>
  );
}

export default LandingGuide;
