import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { signoutAction, modalOff } from "../store/actions";
import { useState } from "react";
// 1.7 송다영 1차 회원탈퇴 설정 (리덕스로 상태 관리 예정)

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
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  z-index: 999;
  width: 25%;
  height: 55%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
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
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const Form = styled.form`
  z-index: 999;
  width: 80%;
  height: 85%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TextForm = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  top: 5%;
`;
const Text = styled.div`
  position: relative;
  font-family: "Kfont";
  font-size: 1.2rem;
  font-weight: 600;
`;

const CurPwd = styled.input`
  margin-top: 20%;
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 15%;
`;
const NewPwd = styled.form`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;

const NewPwd1 = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 10%;
`;
const NewPwd2 = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
`;

const Btn = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  flex-direction: row;
  position: absolute;
  top: 80%;
  justify-content: space-between;
`;

const ConfirmBtn = styled.button`
  z-index: 999;
  width: 100%;
  height: 50%;
  background: #0474e8;
  color: white;
  font-family: "Kfont";
  border-style: none;
  border-radius: 4px;
  font-weight: bold;
  position: relative;
  font-size: 1.3rem;
  cursor: pointer;
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

function PwdChange() {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  //   function signOut() {
  //     axios
  //       .delete("http://localhost:80/user", {
  //         headers: { Authorization: `Bearer ${accessToken}` },
  //       })
  //       .then(() => {
  //         dispatch(signoutAction);
  //         navigate("/");
  //       });
  //   }

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            onClick={() => {
              dispatch(modalOff);
            }}
          />
        </CloseBtnContainer>
        <Form>
          <TextForm>
            <Text>비밀번호 변경</Text>
          </TextForm>
          <CurPwd placeholder="현재 비밀번호" type="password" name="cur_pwd" />
          <NewPwd>
            <NewPwd1 placeholder="새 비밀번호" type="password" name="new_pwd" />
            <NewPwd2
              placeholder="새 비밀번호 확인"
              type="password"
              name="new_pwd_check"
            />
          </NewPwd>
          <Btn>
            <ConfirmBtn type="button">확인</ConfirmBtn>
          </Btn>
        </Form>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default PwdChange;
