import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Header2 from "../component/Header2";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MiddleContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const BigBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  :hover .overlay {
    height: 100%;
  }
  :hover .image {
    filter: brightness(90%);
    transform: scale(1.05);
    transition: all 300ms ease-in;
  }
`;

const BigBox2 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  :hover .overlay {
    bottom: 0;
    height: 100%;
  }
  :hover .image {
    filter: brightness(90%);
    transform: scale(1.05);
    transition: all 300ms ease-in;
  }
`;

const MiddleBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 1s ease;
  /* transition-delay: 0.5s; */
`;

const MiddleBox2 = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 1s ease;
`;

const TextForm = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

const TextForm2 = styled.div`
  color: white;
  font-size: 2rem;
  position: absolute;
  font-weight: bold;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Seawater = styled.div`
  width: 33vw;
  height: 90vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`;

const Tips = styled.div`
  position: relative;
  width: 34vw;
  height: 90vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
  cursor: pointer;
  overflow: hidden;
`;

const TipImg = styled.img`
  position: block;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

const SeaImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  :hover {
    filter: brightness(60%);
    transform: scale(1.05);
    transition: all 300ms ease-in;
  }
`;
const FreshImg = styled.img`
  width: 100%;
  height: 100%;
  :hover {
    filter: brightness(90%);
    transform: scale(1.1);
    transition: all 300ms ease-in;
  }
`;
const Freshwater = styled.div`
  width: 33vw;
  height: 90vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

function Guide() {
  const Navigate = useNavigate();
  const goToSeawater = () => {
    Navigate("/seawaterguide");
  };
  const goToTips = () => {
    Navigate("/honeytips");
  };
  return (
    <>
      <Container>
        <Header2></Header2>
        <MiddleContainer>
          <Seawater onClick={goToSeawater}>
            <BigBox>
              <SeaImg src="초록바다사진.jpeg" className="image" />
              <MiddleBox className="overlay">
                <TextForm className="text">SEA WATER</TextForm>
              </MiddleBox>
            </BigBox>
          </Seawater>
          <Tips onClick={goToTips}>
            <BigBox>
              <TipImg src="가이드게시판사진.jpeg" className="image"></TipImg>
              <MiddleBox className="overlay">
                <TextForm className="text">TIPS</TextForm>
              </MiddleBox>
            </BigBox>
          </Tips>
          <Freshwater>
            <BigBox>
              <SeaImg src="초록바다사진.jpeg" className="image" />
              <MiddleBox className="overlay">
                <TextForm className="text">FRESH WATER</TextForm>
              </MiddleBox>
            </BigBox>
          </Freshwater>
        </MiddleContainer>
      </Container>
    </>
  );
}
export default Guide;
