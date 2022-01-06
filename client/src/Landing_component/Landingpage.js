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
const MainImg = styled.img`
  position: absolute;
  bottom: 10%;
  margin-top: 60px;
  width: 30%;
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
  width: 10%;
  position: absolute;
  bottom: 12px;
  right: 13%;
  opacity: 0.7;
`;
const BubbleL = styled.img`
  width: 30%;
  position: absolute;
  left: 4%;
  bottom: 7%;
`;
const BubbleR = styled.img`
  width: 26%;
  position: absolute;
  right: 6%;
  bottom: 10%;
`;
const Shark = styled.img`
  position: absolute;
  /* -webkit-transform: rotate(30deg) */
  left: 2%;
  width: 15%;
  bottom: 44%;
`;
const JellyFish = styled.img`
  width: 9%;
  position: absolute;
  left: 18%;
  bottom: 28%;
`;
const Fish1 = styled.img`
  width: 9%;
  position: absolute;
  top: 29%;
  right: 22%;
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
// const Img = styled.img`
//   position: absolute;
//   top: 0%;
//   left: 38%;
//   width: 25%;
// `;
const Title = styled.div`
  position: absolute;
  font-weight: 800;
  color: #092011;
  font-size: 2.7rem;
  top: 20%;
  left: 40%;
  /* font-family: "KBfont"; */
  /* font-family: "Hfont"; */
  /* font-family: "NBfont"; */
  /* font-family: "EBfont"; */
  /* font-family: "TBfont"; */
  font-family: "CBfont";
  /* font-family: "SCBfont"; */
`;
const Contents = styled.div`
  position: absolute;
  color: #092011;
  font-size: 1.5rem;
  top: 32%;
  left: 39%;
  font-weight: 460;
  line-height: 140%;
  text-align: center;
  /* font-family: "Kfont"; */
  /* font-family: "Hfont"; */
  /* font-family: "Nfont"; */
  /* font-family: "Efont"; */
  /* font-family: "Tfont"; */
  font-family: "Cfont";
  /* font-family: "SCfont"; */
`;

function Landingpage() {
  return (
    <Container>
      <MainImg src="관리어항.png" alt="어항" />
      <Coral src="해초.png" />
      <SeaWeed src="작은해초.png" />
      <Shark src="상어.png" />
      <JellyFish src="해파리.png" />
      <TilteContainer>
        {/* <Img src="/메인.png"></Img> */}
        <Title id="title">My Aquarium</Title>
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
