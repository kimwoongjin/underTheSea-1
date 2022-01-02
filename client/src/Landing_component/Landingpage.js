import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background: #70d6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MainImg = styled.img`
  position: absolute;
  bottom: 80px;
  left: 380px;
  margin-top: 60px;
  width: 35%;
  opacity: 0.8;
`;
const SeaWeed = styled.img`
  width: 15%;
  position: absolute;
  bottom: 0px;
  right: 20px;
  opacity: 0.7;
`;
const Coral = styled.img`
  width: 8%;
  position: absolute;
  bottom: 12px;
  right: 180px;
  opacity: 0.7;
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
  right: 11%;
  bottom: 20px;
`;
const Shark = styled.img`
  position: absolute;
  /* -webkit-transform: rotate(30deg) */
  left: 2%;
  width: 15%;
  bottom: 280px;
`;
const JellyFish = styled.img`
  width: 9%;
  position: absolute;
  left: 14%;
  bottom: 33%;
`;
const Fish1 = styled.img`
  width: 7%;
  position: absolute;
  bottom: 220px;
  right: 29%;
`;
const Fish3 = styled.img`
  width: 7%;
  position: absolute;
  bottom: 180px;
  right: 12%;
`;
const TilteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  position: absolute;
  z-index: 999;
  font-weight: bold;
  color: white;
  font-size: 3rem;
  top: 20%;
  right: 10%;
`;
const Contents = styled.div`
  position: absolute;
  z-index: 999;
  color: white;
  font-size: 1.7rem;
  top: 33%;
  right: 8%;
  font-weight: 460;
  line-height: 140%;
  text-align: center;
`;

function Landingpage() {
  return (
    <Container>
      <MainImg src="완성어항.png" alt="어항" />
      <Coral src="해초.png" />
      <SeaWeed src="작은해초.png" />
      <Shark src="상어.png" />
      <JellyFish src="해파리.png" />
      <TilteContainer>
        <Title>My Aquarium</Title>
        <Contents>
          당신의 물 속 세상을 만나보세요.
          <br></br> Under The Sea가 함께합니다.
        </Contents>
      </TilteContainer>
      <Fish1 src="물고기1.png" />
      <Fish3 src="물고기3.png" />
      <BubbleL src="물방울L.png" />
      <BubbleR src="물방울R.png" />
    </Container>
  );
}

export default Landingpage;
