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
  background-color: lightgrey;
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
  padding: 10px;
`;
const Content = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #e5e5e5;
  background: skyblue;
  padding: 10px;

  border-radius: 20px;
`;
const ImgShow = styled.img`
  width: 500px;
  height: 450px;
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

// 환수목록받아온거에서 가장끝번 인덱스
function HelpInfo() {
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
            <ImgShow
              src="https://iconmage.s3.ap-northeast-2.amazonaws.com/level.png"
              alt="level"
            />
            <Content>
              레벨시스템을 통해 더욱 의욕적으로 수조를 관리 할 수 있게
              도와드립니다.<br></br>
              <br></br> 한 주 동안 <br></br>
              14번 이상 사료를 주고 <br></br>
              1번 이상 물을 갈아 주어<br></br>
              당신의 수조 레벨을 높여 보세요.
              <br></br>레벨이 높아지면 수조에 물고기들이 점점 늘어나요!
            </Content>
          </InfoShow>
        </ShowContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default HelpInfo;
