import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import ManageDetCard from "./ManageDetCard";

//경로 "/manage/detailinfo"의 전체 페이지
//물고기 수, 레벨, 어항 이미지, 버튼, 횟수 넘버 기재
//manage 페이지 카드정보 import 순서 manageDetail > manageDetCard > manageInfo

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  width: 100%;
  height: 40vh;
  text-align: left;
  /* border: 1px solid black; */
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  margin-left: 15%;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  line-height: 180%;
  color: #008eff;
`;

const Text = styled.div`
  position: absolute;
  top: 65%;
  font-weight: bold;
  margin-left: 15%;
  font-size: 1.8rem;
  text-align: center;
  line-height: 180%;
`;

const Img = styled.img`
  width: 5%;
  height: 35%;
  margin: 10% 0 0 28%;
`;

const OuterContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TextContainer = styled.div`
  width: 16%;
  height: 3%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  margin-left: 30%;
`;
const Detail = styled.div`
  margin-right: 15%;
`;
const Level = styled.div`
  font-weight: bold;
`;
const ImgContainer = styled.div`
  /* border: 1px solid black; */
  margin: 2%;
  width: 50%;
  height: 40%;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;
//--------------------------------------------
const ProgressBar = styled.div`
  /* border: 1px solid black; */
  border-radius: 30px;
  width: 50%;
  height: 7vh;
  margin-top: 1%;
  background: #108dee;
`;
const Progress = styled.div`
  /* border: 1px solid black; */
  width: 15%;
  height: 4vh;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background: #caf8ff;
  margin: 1.5% 0 0 2%;
`;
//--------------------------------------------
const ContainerB = styled.div`
  /* border: 1px solid black; */
  width: 50%;
  height: 7vh;
  margin-top: 3%;
`;
const ButtonL = styled.button`
  width: 46.5%;
  height: 8vh;
  border-radius: 30px;
  margin-right: 7%;
  background: #108dee;
  border: 2px solid #108dee;
  color: white;
  font-size: 2rem;
`;
const ButtonR = styled.button`
  width: 46.5%;
  height: 8vh;
  border-radius: 30px;
  background: #108dee;
  border: 2px solid #108dee;
  color: white;
  font-size: 2rem;
`;
//--------------------------------------------
const Counter = styled.div`
  /* border: 1px solid black; */
  width: 50%;
  height: 12%;
  margin-top: 4%;
  display: flex;
`;
const Feeding = styled.div`
  border: 1px solid black;
  width: 46.5%;
  height: 17vh;
  margin-right: 7%;
  border-radius: 30px;
  background: #108dee;
  border: 2px solid #108dee;
`;
const Changing = styled.div`
  border: 1px solid black;
  width: 46.5%;
  height: 17vh;
  border-radius: 30px;
  background: #108dee;
  border: 2px solid #108dee;
`;
const TextN = styled.div`
  color: white;
  text-align: center;
  font-size: 2rem;
  margin-top: 8%;
`;
const Input = styled.input`
  background: white;
  border: none;
  width: 60%;
  height: 22%;
  border-radius: 10px;
  margin: 6% 0 0 20%;
`;

function showText(e) {
  console.log(e.target.value);
}

function ManageDetail() {
  return (
    <>
      <Header />
      <Container>
        <Title>My Aquarium</Title>
        <Text>구피와 구구 어항</Text>
        <Img src="/작은해초.png" alt="" />
      </Container>
      {/* ----------------------------------------- */}
      <OuterContainer>
        <TextContainer>
          <Detail>실제 물고기 수 : </Detail>
          <Level>Lv. 1 </Level>
        </TextContainer>
        <ImgContainer>
          <MainImg src="/관리어항.png" alt="" />
        </ImgContainer>
        {/* ----------------------------------------- */}
        <ProgressBar>
          <Progress></Progress>
        </ProgressBar>
        {/* ----------------------------------------- */}
        <ContainerB>
          <ButtonL>피딩했어요!</ButtonL>
          <ButtonR>환수했어요!</ButtonR>
        </ContainerB>
        <Counter>
          <Feeding>
            <TextN>주간 피딩 횟수</TextN>
            <Input type="text" placeholder="" onChange={showText} />
          </Feeding>
          <Changing>
            <TextN>주간 환수 횟수</TextN>
            <Input type="text" placeholder="" onChange={showText} />
          </Changing>
        </Counter>
        <ManageDetCard />
      </OuterContainer>
    </>
  );
}
export default ManageDetail;
