import React from "react";
import styled, { keyframes } from "styled-components";
import "./Landingpage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

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
  width: 27%;
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
  width: 22%;
  position: absolute;
  right: 11%;
  bottom: 14%;
`;

const Shark = styled.img`
  position: absolute;
  left: 8%;
  width: 13%;
  top: 22%;
`;

const JellyFish = styled.img`
  width: 9%;
  position: absolute;
  left: 24%;
  bottom: 30%;
`;

const Fish1 = styled.img`
  width: 11%;
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
  width: 90%;
  margin-bottom: 27%;
  position: relative;
  left: 2%;
`;

const Contents = styled.div`
  position: absolute;
  color: #092011;
  font-size: 1.4rem;
  top: 62%;
  font-weight: 450;
  line-height: 140%;
  text-align: center;
  font-family: "Kfont";
`;

const Bubble = styled.div`
  z-index: 20;
`;

const Bimg = styled.img`
  position: absolute;
  animation: bubble infinite linear 6s;
  width: 100px;

  @keyframes bubble {
    0% {
      transform: scale(0.95) translateY(0) translateX(0px) rotate(0deg);
      opacity: 1;
    }
    10% {
      transform: scale(1) translateY(-100px) translateX(10px);
      opacity: 1;
    }
    20% {
      transform: scale(0.95) translateY(-350px) translateX(14px);
    }

    30% {
      transform: scale(1) translateY(-450px) translateX(8px) rotate(90deg);
      opacity: 1;
    }
    40% {
      transform: scale(0.95) translateY(-650px) translateX(0px);
      opacity: 1;
    }
    50% {
      transform: scale(1) translateY(-750px) translateX(-5px);
      opacity: 1;
    }
    60% {
      transform: scale(0.95) translateY(-900px) translateX(-12px)
        rotate(-180deg);
      opacity: 0.95;
    }
    70% {
      transform: scale(1) translateY(-1000px) translateX(-2px);
      opacity: 0.9;
    }
    80% {
      transform: scale(0.95) translateY(-1250px) translateX(-1px);
      opacity: 0.8;
    }
    90% {
      transform: scale(1) translateY(-1350px) translateX(5px);
      opacity: 0.7;
    }
    100% {
      transform: scale(0.95) translateY(-1500px) translateX(15px)
        rotate(-360deg);
      opacity: 0.5;
    }
  }
`;
function Landingpage() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <Container>
      <Bubble>
        <Bimg
          src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF2.png"
          alt="mini.png"
          style={{
            right: 120,
            top: 700,
            width: 30,
            animationDelay: "4s",
          }}
        />
        <Bimg
          src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF2.png"
          alt="mini.png"
          style={{
            left: 120,
            top: 700,
            width: 80,
            animationDelay: "3s",
          }}
        />
        <Bimg
          src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF1.png"
          alt="mini.png"
          style={{
            left: 80,
            top: 800,
            width: 50,
            animationDelay: "1s",
          }}
        />
        <Bimg
          src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF1.png"
          alt="mini.png"
          style={{
            left: 200,
            top: 700,
          }}
        />
        <Bimg
          src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF2.png"
          alt="mini.png"
          style={{
            left: 500,
            top: 700,
            width: 70,
            animationDelay: "1.5s",
          }}
        />
        <Bimg
          src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF1.png"
          alt="mini.png"
          style={{
            left: 1000,
            top: 700,
            width: 60,
            animationDelay: "2s",
          }}
        />
        <Bimg
          src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF3.png"
          alt="mini.png"
          style={{
            left: 1200,
            top: 700,
            animationDelay: "1s",
          }}
        />
        <Bimg
          src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF2.png"
          alt="mini.png"
          style={{
            left: 1300,
            top: 700,
            animationDelay: "3s",
          }}
        />
      </Bubble>
      {/* src="https://iconmage.s3.ap-northeast-2.amazonaws.com/메인1.png" */}
      <Coral src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해초.png" />
      <SeaWeed src="https://iconmage.s3.ap-northeast-2.amazonaws.com/작은해초.png" />
      <SeaWeedL src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해초L.png" />
      <Shark src="https://iconmage.s3.ap-northeast-2.amazonaws.com/상어.png" />
      <JellyFish src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해파리.png" />
      <TilteContainer>
        <MainImg className="mainimg" src="/메인.png"></MainImg>
        <Contents>
          당신의 물 속 세상을 만나보세요.
          <br></br> Under The Sea가 함께합니다.
        </Contents>
      </TilteContainer>
      <Fish1 src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물고기1.png" />
      <Fish3 src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물고기3.png" />
      <BubbleL src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물방울L.png" />
      {/* <BubbleM src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물방울M1.png" /> */}
      <BubbleR src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물방울R.png" />
    </Container>
  );
}

export default Landingpage;
