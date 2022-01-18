import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: 390px;
  /* box-shadow: 5px 8px 7px 3px #c6c6c6; */
  box-shadow: 0px 0px 20px #adb5bd;
  margin: 3%;
  /* background: #d1f8ff; */
  border-radius: 20px;
  transition: all 0.3s;
  :hover {
    transform: matrix(1, 0, 0, 1, 0, -10);
    box-shadow: 0px 0px 30px #adb5bd;
    transition: all 0.3s;
  }
`;

const Contents = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  /* border: 1px solid green; */
  text-align: left;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  overflow: hidden;
  cursor: pointer;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* border: 1px solid black; */
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  /* opacity: 0.8; */
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
  width: 100%;
  height: 50%;
  /* padding: 10px; */
  box-sizing: border-box;
  /* margin-top: 2%; */
  line-height: 200%;
  margin: auto;
  /* border: 1px solid black; */
`;

const Name = styled.div`
  /* width: 80%; */
  /* position: absolute; */
  /* left: 5%; */
  border-radius: 5px;
  /* background: #e5e5e5; */
  text-align: center;
  font-family: "Kfont";
  font-weight: bold;
  font-size: 1.3rem;
  border: 1px solid red;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
  line-height: 170%;
  font-weight: 450;
  font-size: 1.25rem;
  border: 1px solid red;
`;

const Size = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
  line-height: 170%;
  font-weight: 450;
  font-size: 1.25rem;
  border: 1px solid red;
`;

const Theme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
  line-height: 170%;
  font-weight: 450;
  font-size: 1.25rem;
  border: 1px solid red;
`;
const BottomBack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
const Seaweed = styled.img`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 30%;
  /* border: 1px solid red; */
`;

function ManageInfo({ id, name, size, theme, level, getConInfo }) {
  const navigate = useNavigate();
  console.log(name, level);
  const month = new Date().getMonth() + 1;

  const sendCardInfo = async () => {
    let newData = await getConInfo(id);
    console.log("ID and NEW CONINFO:", id, newData);
    navigate(`${id}`);
  };
  const imgSrcUrl = "http://localhost:80/level/" + level;
  return (
    // 컨테이너를 누르면 매니지 디테일페이지로 정보가 넘어가야되요
    // 컨테이너 올을하면 수조 목록이 다뜨는데 환수정보랑 피딩정보가 없음
    // 클릭했을때 수조 아이디만 넘어가고 그 아이디로 피딩기록, 환수기록 조회, 물고기종류와 마릿수
    <Container onClick={sendCardInfo}>
      <Contents>
        <ImgContainer>
          <Img src={imgSrcUrl}></Img>
          {/* <Img src="/관리어항.png"></Img> */}
        </ImgContainer>
        <Content>
          <Name>{name}</Name>
          <Text>사이즈</Text>
          <Size>{size}L</Size>
          <Text>테마</Text>
          <Theme>{theme}</Theme>
        </Content>
      </Contents>
    </Container>
  );
}
export default ManageInfo;
