import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background: #70d6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MainImg = styled.img`
  position: absolute;
  bottom: 80px;
  left: 410px;
  margin-top: 60px;
  width: 35%;
`;
const SeaWeed = styled.img`
  width: 15%;
  position: absolute;
  bottom: 0px;
  right: 20px;
`;
const Coral = styled.img`
  width: 8%;
  position: absolute;
  bottom: 12px;
  right: 180px;
`;
const BubbleL = styled.img`
  width: 25%;
  position: absolute;
  left: 10px;
  bottom: 20px;
`;
const BubbleR = styled.img`
  width: 26%;
  position: absolute;
  right: 80px;
  bottom: 20px;
`;
const Shark = styled.img`
  position: absolute;
  /* -webkit-transform: rotate(30deg) */
  left: 40px;
  width: 15%;
  bottom: 280px;
`;
const JellyFish = styled.img`
  width: 10%;
  position: absolute;
  left: 240px;
  bottom: 180px;
`;
const Fish1 = styled.img`
  width: 7%;
  position: absolute;
  bottom: 220px;
  right: 370px;
`;
const Fish3 = styled.img`
  width: 7%;
  position: absolute;
  bottom: 180px;
  right: 150px;
`;

function Landingpage() {
  return (
    <Container>
      <MainImg src="완성어항.png" alt="어항" />
      <Coral src="해초.png" />
      <SeaWeed src="작은해초.png" />
      <Shark src="상어.png" />
      <JellyFish src="해파리.png" />
      <Fish1 src="물고기1.png" />
      <Fish3 src="물고기3.png" />
      <BubbleL src="물방울L.png" />
      <BubbleR src="물방울R.png" />
    </Container>
  );
}

export default Landingpage;
