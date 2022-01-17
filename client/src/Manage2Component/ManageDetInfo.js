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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
  /* border: 1px solid darkgrey; */
`;

const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  /* border: 1px solid darkgrey; */
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  /* background-color: rgba(51, 153, 255, 0.1); */
  background: #108dee;
  color: white;
  width: 80%;
  height: 20%;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "Kfont";
  border: 2px solid #108dee;
  /* border: 1px solid red; */
`;

const HabitatContainer = styled.div`
  border-radius: 5px;
  /* background-color: rgba(51, 153, 255, 0.1); */
  background: #108dee;
  overflow: hidden;
  display: flex;
  width: 80%;
  height: 20%;
  border: 2px solid #108dee;
`;

const Habitat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-family: "Kfont";
  width: 50%;
`;

const HabitatShow = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
  /* border-top-right-radius: 4px; */
  /* border-bottom-right-radius: 4px; */
  width: 50%;
`;

const TextD = styled.div`
  line-height: 130%;
  font-weight: 450;
`;

function ManageDetInfo({ conInfo }) {
  return (
    <>
      {conInfo.fish_list.map((el, idx) => {
        return (
          <ContainerS key={idx}>
            <DetailImg>
              <ImgD src="/체리바브.jpeg" alt="" />
            </DetailImg>
            {/* ----------------------------------------- */}
            <Content>
              <LeftInfo>
                <Name>{el.fish_name}</Name>
                <HabitatContainer>
                  <Habitat>서식지</Habitat>
                  <HabitatShow>아마존</HabitatShow>
                </HabitatContainer>
                <HabitatContainer>
                  <Habitat>서식지</Habitat>
                  <HabitatShow>아마존</HabitatShow>
                </HabitatContainer>
                {/* <Name>{el.fish_name}</Name> */}
              </LeftInfo>
              <RightInfo></RightInfo>
            </Content>
          </ContainerS>
        );
      })}
    </>
  );
}
export default ManageDetInfo;
