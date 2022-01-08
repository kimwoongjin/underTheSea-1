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
  height: 30%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
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
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  /* border: 1px solid black; */
`;

const ShowContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* border: 2px dashed red; */
`;

const InfoShow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 95%;
  /* border: 2px dashed blue; */
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  /* border: 1px dashed red; */
  font-family: "Kfont";
  font-weight: bold;
  font-size: 1.25rem;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 30%;
  /* border: 1px dashed red; */
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
`;

const Img = styled.img`
  :hover {
    background: #e5e5e5;
    border-radius: 5px;
  }
`;

const ImgNameContainer = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
`;

const ImgName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
  ${(props) =>
    props.type === props.name &&
    css`
      color: #108dee;
    `};
`;

const Btn = styled.button`
  width: 100%;
  height: 20%;
  border-style: none;
  border-radius: 4px;
  background: #108dee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;

  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.07);
  }
`;

function FeedingInput({ onCancel, visible }) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  const [foodType, setFoodType] = useState("");
  const choiceFood = (e) => {
    setFoodType(e.target.name);
  };
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
          <InfoShow>
            <Text>먹이 타입을 선택해주세요</Text>
            <ImgContainer>
              <Img name="펠렛" src="/펠렛.png" onClick={choiceFood} />
              <Img name="플레이크" src="/플레이크.png" onClick={choiceFood} />
              <Img name="냉동" src="/냉동.png" onClick={choiceFood} />
              <Img name="생먹이" src="/생먹이.png" onClick={choiceFood} />
            </ImgContainer>
            <ImgNameContainer>
              <ImgName type={foodType} name="펠렛">
                펠렛
              </ImgName>
              <ImgName type={foodType} name="플레이크">
                플레이크
              </ImgName>
              <ImgName type={foodType} name="냉동">
                냉동
              </ImgName>
              <ImgName type={foodType} name="생먹이">
                생먹이
              </ImgName>
            </ImgNameContainer>
            <Btn onClick={onCancel}>선택완료</Btn>
          </InfoShow>
        </ShowContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default FeedingInput;
