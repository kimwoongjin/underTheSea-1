import React from "react";
import styled from "styled-components";

//manage 페이지에서 카드의 세부 css / ManageInfo
//후에 컴포넌트 이동
//이름 영어나 한글로 통일 / 컴포넌트 이름 재설정 /  이미지 파일 정리

const ContainerS = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 15%;
  width: 20vw;
  height: 33vh;
  margin-bottom: 7%;
  /* border: 1px solid black; */
`;

const DetailImg = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  cursor: pointer;
  /* border: 1px solid black; */
`;
const ImgD = styled.img`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  position: relative;
  width: 20vw;
  height: 15vh;
  text-align: left;
  line-height: 200%;
  /* border: 1px solid black; */
`;

const Name = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 1.2rem;
`;

const TextD = styled.div`
  position: absolute;
  top: 39%;
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
          <Name>이름 : 체리바브</Name>
          <TextD>
            서식지 : <br></br>적정수온 :
          </TextD>
        </Content>
      </ContainerS>
    </>
  );
}
export default ManageDetInfo;
