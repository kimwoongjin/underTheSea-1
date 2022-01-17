import React from "react";
import styled from "styled-components";

//manage 페이지에서 카드의 세부 css / ManageInfo
//후에 컴포넌트 이동
//이름 영어나 한글로 통일 / 컴포넌트 이름 재설정 /  이미지 파일 정리

const ContainerS = styled.div`
  display: flex;
  align-items: center;
  /* background-color: rgba(51, 153, 255, 0.1); */
  border-top: 2px solid #108dee;
  border-bottom: 2px solid #108dee;
  /* border-radius: 10px; */
  width: 100%;
  height: 20vh;
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
  height: 20vh;
  /* text-align: left; */
  /* line-height: 200%; */
`;

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100%;
  /* border: 1px solid darkgrey; */
`;

const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  /* border: 1px solid darkgrey; */
`;

const FishDesc = styled.div`
  box-sizing: border-box;
  padding-left: 15px;
  width: 100%;
  height: 90%;
  color: #108dee;
  font-size: 1rem;
  line-height: 140%;
  border-left: 1.5px solid #108dee;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 5px; */
  /* border-bottom: 2px solid #108dee; */
  /* background-color: rgba(51, 153, 255, 0.1); */
  color: #108dee;
  /* background: #108dee; */
  /* color: white; */
  width: 80%;
  height: 20%;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "Kfont";
  /* border: 2px solid #108dee; */
  /* border: 1px solid red; */
`;

const HabitatContainer = styled.div`
  border-radius: 5px;
  /* background-color: rgba(51, 153, 255, 0.1); */
  /* background: #108dee; */
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
  /* border: 2px solid #108dee; */
`;
const MidContainer = styled.div`
  display: flex;
  width: 80%;
  height: 20%;
  /* border: 1px solid red; */
`;

const Habitat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #108dee;
  font-weight: bold;
  font-family: "Kfont";
  /* border: 1px solid red; */
  width: 50%;
  height: 100%;
`;

const HabitatShow = styled.div`
  /* background: white; */
  color: #108dee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
  /* border-top-right-radius: 4px; */
  /* border-bottom-right-radius: 4px; */
  width: 50%;
  height: 100%;
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
              <ImgD src={el.fish_img} alt="" />
            </DetailImg>
            {/* ----------------------------------------- */}
            <Content>
              <LeftInfo>
                <Name>{el.fish_name}</Name>

                <HabitatContainer>
                  <Habitat>종류</Habitat>
                  <HabitatShow>
                    {el.fresh_water ? "담수어" : "해수어"}
                  </HabitatShow>
                </HabitatContainer>
                <HabitatContainer>
                  <Habitat>적정수온</Habitat>
                  <HabitatShow>{el.temp}</HabitatShow>
                </HabitatContainer>

                <HabitatContainer>
                  <Habitat>산호합사</Habitat>
                  <HabitatShow>{el.reefsafe ? "O" : "X"}</HabitatShow>
                </HabitatContainer>
                <HabitatContainer>
                  <Habitat>마릿수</Habitat>
                  <HabitatShow>{el.temp}</HabitatShow>
                </HabitatContainer>
              </LeftInfo>
              <RightInfo>
                <FishDesc>{el.desc}</FishDesc>
              </RightInfo>
            </Content>
          </ContainerS>
        );
      })}
    </>
  );
}
export default ManageDetInfo;
