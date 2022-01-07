import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const DarkBackGround = styled.div`
  z-index: 999;
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
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const ModalContainer = styled.div`
  z-index: 999;
  width: 25%;
  height: 40%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  z-index: 999;
  border-radius: 20px;
`;
const CloseBtnContainer = styled.div`
  z-index: 999;
  position: absolute;
  right: 3%;
  top: 0%;
  width: 12%;
  /* border: 1px solid red; */
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const Form = styled.form`
  z-index: 999;
  width: 80%;
  height: 60%;
  /* border: 1px dashed black; */
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TextForm = styled.div`
  position: relative;
  display: flex;
  /* border: 1px solid black; */
  text-align: center;
  top: 22%;
`;
const Text = styled.div`
  position: relative;
  line-height: 170%;
  font-family: "Kfont";
  font-size: 1.2rem;
  font-weight: 600;
`;
const Btn = styled.div`
  /* border: 1px solid black; */
  display: flex;
  width: 100%;
  height: 25%;
  flex-direction: row;
  position: absolute;
  top: 80%;
  justify-content: space-between;
`;
const CancleBtn = styled.button`
  z-index: 999;
  width: 45%;
  height: 90%;
  background: #e1e1e1;
  color: black;
  font-family: "Kfont";
  border-style: none;
  border-radius: 4px;
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
const SignOutBtn = styled.button`
  z-index: 999;
  width: 45%;
  height: 90%;
  background: #0474e8;
  color: white;
  font-family: "Kfont";
  border-style: none;
  border-radius: 4px;
  font-weight: bold;
  position: relative;
  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
`;
//=======================================================================

function SignOut({ showModal, closeModal, accessToken, setIsLogin }) {
  const navigate = useNavigate();
  function signOut() {
    axios
      .delete("", {
        headers: {
          accept: "application/json",
          Authorization: accessToken,
        },
      })
      .then((res) => {
        setIsLogin(false);
        navigate("/");
        window.alert("다음에 또 오세요!!");
      });
    // isLogin을 flase로 만든다음 메인페이지로 리다이렉트
  }

  return (
    <DarkBackGround disappear={!showModal}>
      <ModalContainer disappear={!showModal}>
        <CloseBtnContainer>
          <FontAwesomeIcon icon={faTimes} size="2x" onClick={closeModal} />
        </CloseBtnContainer>
        <Form>
          <TextForm>
            <Text>
              정말로 탈퇴하시나요? <br></br> 탈퇴시 유저 정보가 모두 삭제됩니다.
            </Text>
          </TextForm>
          <Btn>
            <CancleBtn type="button">아니요. 취소합니다.</CancleBtn>
            <SignOutBtn type="button" onClick={signOut}>
              네. 탈퇴합니다.
            </SignOutBtn>
          </Btn>
        </Form>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default SignOut;
