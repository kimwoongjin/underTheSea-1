import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
  width: 25%;
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
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;
const Title = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  color: #108dee;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 2px solid #108dee;
  margin-bottom: 30px;
`;
const Form = styled.form`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
`;
const Username = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
`;
const Email = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
`;

const Pwd = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  /* margin-bottom: 20px; */
`;
const PwdChk = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  /* margin-bottom: 20px; */
`;
const Warning = styled.div`
  width: calc(100%-10px);
  height: 20px;
  font-size: 0.5rem;
  /* justify-content: flex-start; */
  color: red;
`;

const SignupBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background: #108dee;
  border-style: none;
  padding: 10px;
  border-radius: 4px;
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
// ==================================================================================

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    user_name: "",
    user_pwd: "",
    pwd_chk: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputValue = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // ==================================================================================
  // 유효성 cherUsername/ checkEmail / checkPassword /
  // const checkUsername = (user_name) => {
  //   let regExp = /^([a-zA-Z가-힣]){0,10}$/;
  //   return regExp.test(user_name);
  // };

  // const checkEmail = (email) => {
  //   let regExp =
  //     /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  //   return regExp.test(email);
  // };

  // const checkPassword = (user_pwd) => {
  //   let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; //대문자, 소문자, 숫자로 이루어진 10자 이하
  //   return regExp.test(user_pwd);
  // };
  // ==================================================================================
  //-----------------------

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            onClick={() => dispatch(modalOff)}
          />
        </CloseBtnContainer>
        <Title>회원가입</Title>
        <Form>
          <Username
            placeholder="이름을 입력해주세요"
            type="text"
            name="user_name"
            required
            autoComplete="on"
          />

          <Email
            placeholder="이메일을 입력해주세요"
            type="email"
            name="email"
            required
            autoComplete="on"
          />

          <Pwd
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="user_pwd"
            autoComplete="on"
          />

          <PwdChk
            placeholder="비밀번호를 확인해주세요"
            type="password"
            name="pwd_chk"
            required
            autoComplete="on"
          />
          <SignupBtn type="button">회원가입</SignupBtn>
          <Warning></Warning>
        </Form>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default SignUp;
