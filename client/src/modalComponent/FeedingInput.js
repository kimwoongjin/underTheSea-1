import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { modalOff } from "../store/actions";
import { useDispatch } from "react-redux";

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
`;

const ShowContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const InfoShow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 95%;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  font-family: "Kfont";
  font-weight: bold;
  font-size: 1.25rem;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
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

function FeedingInput({ onIncrease }) {
  const dispatch = useDispatch();
  const [foodType, setFoodType] = useState("");
  const choiceFood = (e) => {
    setFoodType(e.target.name);
  };

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            onClick={() => dispatch(modalOff)}
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
            <Btn onClick={onIncrease}>선택완료</Btn>
          </InfoShow>
        </ShowContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default FeedingInput;