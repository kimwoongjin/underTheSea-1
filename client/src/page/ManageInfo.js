import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* top: 15%; */
  width: 25%;
  height: 390px;
  box-shadow: 5px 8px 7px 3px #c6c6c6;
  margin: 1%;
  /* background: #d1f8ff; */
  border-radius: 20px;
  /* border: 1px solid black; */
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 50%;
  padding: 10px;
  box-sizing: border-box;
  /* margin-top: 2%; */
  line-height: 200%;
  margin: auto;
  /* border: 1px solid black; */
`;

const Name = styled.div`
  /* position: absolute; */
  /* left: 5%; */
  border-radius: 5px;
  background: #e5e5e5;
  text-align: center;
  font-family: "Kfont";
  font-weight: bold;
  font-size: 1.3rem;
  /* border: 1px solid red; */
`;

const Size = styled.div`
  /* position: absolute; */
  /* left: 5%; */
  /* top: 33%; */
  font-family: "Kfont";
  line-height: 170%;
  font-weight: 450;
  font-size: 1.25rem;
  /* border: 1px solid red; */
`;

const Theme = styled.div`
  /* position: absolute; */
  /* left: 5%; */
  /* top: 33%; */
  font-family: "Kfont";
  line-height: 170%;
  font-weight: 450;
  font-size: 1.25rem;
  /* border: 1px solid red; */
`;

function ManageInfo({ id, name, size, theme, level }) {
  const navigate = useNavigate();
  console.log(name, level);
  const sendCardInfo = () => {
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
        </ImgContainer>
        <Content>
          <Name>{name}</Name>
          <Size>사이즈: {size}L</Size>
          <Theme>테마: {theme}</Theme>
        </Content>
      </Contents>
    </Container>
  );
}
export default ManageInfo;
