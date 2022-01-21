import React from "react";
import styled, { keyframes } from "styled-components";
import "./Landingpage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background: linear-gradient(to top, #70d6ff, #d2f7ff);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  #flightPath {
    fill: none;
    stroke: blue;
    stroke-width: 2px;
  }
`;

const SeaWeed = styled.img`
  width: 15%;
  position: absolute;
  bottom: 0px;
  right: 2%;
  opacity: 0.7;
`;
const SeaWeedL = styled.img`
  width: 15%;
  position: absolute;
  bottom: 0px;
  left: 5%;
`;
const Coral = styled.img`
  width: 10%;
  position: absolute;
  bottom: 12px;
  right: 17%;
  opacity: 0.7;
`;
const BubbleL = styled.img`
  width: 30%;
  position: absolute;
  left: 2%;
  bottom: 7%;
`;
const BubbleM = styled.img`
  width: 17%;
  position: absolute;
  bottom: 5%;
  right: 35%;
`;
const BubbleR = styled.img`
  width: 26%;
  position: absolute;
  right: 11%;
  bottom: 18%;
`;
const rotate = keyframes`
  50% {
    transform: translateX(500px) translateY(-100px);
  }
  30%{ transform: translateX(350px);
  }
`;
const jelly = keyframes`
  50% {
    transform: translateY(-80px);
  }
  20% { 
    transform: translateX(50px);
  }
`;

const Shark = styled.img`
  position: absolute;
  left: -15%;
  width: 13%;
  top: 22%;
  animation: ${rotate} 7s linear infinite;
`;

const JellyFish = styled.img`
  width: 9%;
  position: absolute;
  left: 24%;
  bottom: 30%;
  animation: ${jelly} 4s linear infinite;
`;

const Fish1 = styled.img`
  width: 13%;
  position: absolute;
  top: 10%;
  right: 17%;
`;

const Fish3 = styled.img`
  width: 9%;
  position: absolute;
  bottom: 43%;
  right: 4%;
`;
const TilteContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 4px solid red; */
`;
const MainImg = styled.img`
  width: 80%;
`;

const Contents = styled.div`
  position: absolute;
  color: #092011;
  font-size: 1.5rem;
  top: 62%;
  font-weight: 460;
  line-height: 170%;
  text-align: center;
  font-family: "Kfont";
`;

function Landingpage() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <Container>
      <Coral src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해초.png" />
      <SeaWeed src="https://iconmage.s3.ap-northeast-2.amazonaws.com/작은해초.png" />
      <SeaWeedL src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해초L.png" />
      <Shark src="https://iconmage.s3.ap-northeast-2.amazonaws.com/상어.png" />
      <JellyFish src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해파리.png" />
      <TilteContainer>
        <MainImg src="https://iconmage.s3.ap-northeast-2.amazonaws.com/메인1.png"></MainImg>
        <Contents>
          당신의 물 속 세상을 만나보세요.
          <br></br> Under The Sea가 함께합니다.
        </Contents>
      </TilteContainer>
      <Fish1 src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물고기1.png" />
      <Fish3 src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물고기3.png" />
      <BubbleL src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물방울L.png" />
      <BubbleM src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물방울M1.png" />
      <BubbleR src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물방울R.png" />
    </Container>
  );
}

export default Landingpage;
