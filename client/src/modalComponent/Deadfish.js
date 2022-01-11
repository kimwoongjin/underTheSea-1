import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { modalOff } from "../store/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

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
  height: 60%;
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
const ThememContainer = styled.section`
  display: flex;
  align-items: center;
  width: 90%;
  height: 30px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
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

function Deadfish() {
  const dispatch = useDispatch();

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            color="#e5e5e5"
            onClick={() => dispatch(modalOff)}
          />
        </CloseBtnContainer>
        <ShowContainer>
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

export default Deadfish;
