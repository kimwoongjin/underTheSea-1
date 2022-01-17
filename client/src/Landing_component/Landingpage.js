import React from "react";
import styled from "styled-components";
import "./Landingpage.css";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background: linear-gradient(to top, #70d6ff, #d2f7ff);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
const Shark = styled.img`
  position: absolute;
  /* -webkit-transform: rotate(30deg) */
  left: 2%;
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
  display: flex;
  flex-direction: column;
`;
const MainImg = styled.img`
  position: absolute;
  top: 12%;
  left: 37%;
  width: 30%;
`;

const Contents = styled.div`
  position: absolute;
  color: #092011;
  font-size: 1.5rem;
  top: 51%;
  left: 41.5%;
  font-weight: 460;
  line-height: 170%;
  text-align: center;
  font-family: "Kfont";
`;

function Landingpage() {
  return (
    <Container>
      <Coral src="해초.png" />
      <SeaWeed src="작은해초.png" />
      <SeaWeedL src="해초L.png" />
      <Shark src="상어.png" />
      <JellyFish src="해파리.png" />
      <TilteContainer>
        <MainImg src="/메인1.png"></MainImg>
        <Contents>
          당신의 물 속 세상을 만나보세요.
          <br></br> Under The Sea가 함께합니다.
        </Contents>
      </TilteContainer>
      <Fish1 src="물고기1.png" />
      <Fish3 src="물고기3.png" />
      <BubbleL src="물방울L.png" />
      <BubbleM src="물방울M1.png" />
      <BubbleR src="물방울R.png" />
    </Container>
  );
}

export default Landingpage;
