import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;
const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;
const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;

const DarkBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: blue; */
  background: rgba(0, 0, 0, 0.5);

  animation-duration: 0.25s;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const ModalContainer = styled.div`
  width: 30%;
  height: 60%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
  /* justify-content: space-between; */
  border-radius: 20px;
  align-items: center;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `};
`;
const CloseBtnContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 10%;
  /* border: 1px solid red; */
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  /* background: #e5e5e5; */
  /* border-top-left-radius: 20px; */
  /* border-top-right-radius: 20px; */
  /* border-bottom: 1px solid black; */
  /* overflow: hidden; */
  /* border: 1px solid red; */
`;

const ShowContainer = styled.div`
  width: 90%;
  height: 90%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const LogoContainer = styled.div`
  /* position: absolute;
  top: 10px; */
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  /* border: 1px solid red; */
`;
const Logo = styled.img`
  width: 50%;
`;

const InfoShow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 95%;
  /* border: 1px solid blue; */
`;
const ThememContainer = styled.section`
  display: flex;
  align-items: center;
  width: 90%;
  height: 30px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  /* margin-top: 40px; */
`;
const ThemeTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 90%;
  font-weight: bold;
  color: #108dee;
  border-right: 1px solid #e5e5e5;
  font-family: "Kfont";
`;
const ThemeShow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
`;
const LastExchange = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 150px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
`;
const TopText = styled.div`
  color: #108dee;
  font-family: "Kfont";
  margin-bottom: 1%;
  font-size: 1.25rem;
`;
const MiddleText = styled.div`
  font-weight: bold;
  color: #108dee;
  font-family: "Kfont";
  margin-bottom: 1%;
  font-size: 1.5rem;
`;
const BottomText = styled.div`
  color: #108dee;
  font-family: "Kfont";
  font-size: 1.25rem;
`;

function AquaInfo({ onCancel, visible }) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  //   const handleInputValue = (e) => {
  //     setUserData({
  //       ...userData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  useEffect(() => {
    // visible -> false
    if (localVisible && !visible) {
      setAnimate(true);
      // 0.25초의 시간동안 애니메이션을 보여주겠다는 의미
      setTimeout(() => setAnimate(false), 250);
    }
    // visible 값이 바뀔 때마다 로컬 visible 값을 동기화 시켜준다.
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;

  return (
    <DarkBackGround disappear={!visible}>
      <ModalContainer disappear={!visible}>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            onClick={onCancel}
            color="#e5e5e5"
          />
        </CloseBtnContainer>
        <ShowContainer>
          {/* <LogoContainer>
            <Logo src="/로고.png" />
          </LogoContainer> */}
          <InfoShow>
            <ThememContainer>
              <ThemeTitle>테마</ThemeTitle>
              <ThemeShow>산호수조</ThemeShow>
            </ThememContainer>
            <ThememContainer>
              <ThemeTitle>크기</ThemeTitle>
              <ThemeShow>200L</ThemeShow>
            </ThememContainer>
            <ThememContainer>
              <ThemeTitle>마릿수</ThemeTitle>
              <ThemeShow>13마리</ThemeShow>
            </ThememContainer>
            <ThememContainer>
              <ThemeTitle>마지막 환수일</ThemeTitle>
              <ThemeShow>2021-12-24</ThemeShow>
            </ThememContainer>
            <LastExchange>
              <TopText>마지막 환수일로부터</TopText>
              <MiddleText>4일</MiddleText>
              <BottomText>지났습니다!</BottomText>
            </LastExchange>
          </InfoShow>
        </ShowContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default AquaInfo;
