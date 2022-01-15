import React from "react";
import styled from "styled-components";

//manage 페이지에서 카드의 세부 css / ManageInfo
//후에 컴포넌트 이동
//이름 영어나 한글로 통일 / 컴포넌트 이름 재설정 /  이미지 파일 정리

const ContainerS = styled.div`
  display: flex;
  align-items: center;
  /* background-color: rgba(51, 153, 255, 0.1); */
  border: 2px solid #108dee;
  border-radius: 10px;
  width: 100%;
  height: 15vh;
  margin-bottom: 7%;
  /* border: 1px solid red; */
`;

const DetailImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 25%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  /* border-radius: 10px; */
  cursor: pointer;
`;

const ImgD = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  /* border-top-left-radius: 10px; */
  /* border-bottom-left-radius: 10px; */
`;

const Content = styled.div`
  /* border: 1px solid red; */
  display: flex;
  width: 75%;
  height: 15vh;
  /* text-align: left; */
  /* line-height: 200%; */
`;

const LeftInfo = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid darkgrey;
`;

const RightInfo = styled.div`
  width: 50%;
  height: 100%;
  /* border: 1px solid darkgrey; */
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

const TextD = styled.div`
  line-height: 130%;
  font-weight: 450;
`;

function ManageDetInfo() {
  return (
    <>
      <ContainerS>
        <DetailImg>
          <ImgD src="/체리바브.jpeg" alt="" />
        </DetailImg>
        {/* ----------------------------------------- */}
        <Content>
          <LeftInfo></LeftInfo>
          <RightInfo></RightInfo>
        </Content>
      </ContainerS>
    </>
  );
}
export default ManageDetInfo;
