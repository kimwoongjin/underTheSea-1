import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { modalOff } from "../store/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  height: 40%;
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
  @media screen and (max-width: 480px) {
    width: 80%;
    height: 300px;
  }
  @media screen and (max-height: 700px) {
    height: 300px;
  }
`;

const CloseBtnContainer = styled.button`
  z-index: 999;
  position: absolute;
  right: 3%;
  top: 0%;
  width: 12%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  background: none;
  border: none;
  cursor: pointer;
`;

const Form = styled.form`
  z-index: 999;
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
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

//성공메세지=======================================================================

const PwdSuccess = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  justify-content: center;
  /* border: 1px solid red; */
`;
const PwdSuccessText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Kfont";
  margin-top: 20%;
`;
const CloseBtn = styled.button`
  width: 100%;
  height: 18%;
  margin-bottom: 20%;
  background: #108dee;
  border-style: none;
  padding: 3%;
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
// ============================= 비밀번호 창 =======================================

const TextForm = styled.div`
  display: flex;
  text-align: center;
  top: 3%;

  @media screen and (max-width: 480px) {
    top: 0%;
  }
`;
const Text = styled.div`
  font-family: "Kfont";
  font-size: 1.1rem;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const NewPwd = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;
const CurPwd1 = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
  z-index: 100;
`;
const NewPwd1 = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  z-index: 100;
`;
const NewPwd2 = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  z-index: 100;
`;

const Warning = styled.div`
  width: calc(100%-10px);
  height: 20px;
  font-size: 0.4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: red;
  padding-left: 2%;
`;
const Warning1 = styled.div`
  width: calc(100%-10px);
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.6rem;
  color: red;
  margin-top: 5px;
  padding-left: 2%;
`;

const Btn = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  flex-direction: column;
  justify-content: space-between;
`;

const ConfirmBtn = styled.button`
  z-index: 999;
  width: 100%;
  height: 60%;
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
  @media screen and (max-width: 600px) {
    height: 60%;
    font-size: 1rem;
    padding: 0.2em 0 0.2em;
  }

  @media screen and (max-width: 480px) {
    height: 60%;
    font-size: 0.9rem;
    padding: 0.2em 0 0.2em;
  }
`;
//=======================================================================

function PwdChange1({ handleOff }) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // 비밀번호 저장
  const [currentPwd, setCurrentPwd] = useState({
    cur_pwd: "",
    new_pwd: "",
    verifyPassword: "",
  });

  //상태 변경
  const [password, setPassword] = useState(false);
  //에러메세지
  const [errorMsg, setErrorMsg] = useState("");
  //새로운 비밀번호 = 새로운 비밀번호 확인
  const onChangePasswordChk = () =>
    currentPwd.new_pwd === currentPwd.verifyPassword;

  //유효성
  const checkPassword = (new_pwd) => {
    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; //대문자, 소문자, 숫자로 이루어진 10자 이하
    return regExp.test(new_pwd);
  };
  const checkPassword2 = (new_pwd) => {
    let regExp2 = /[a-zA-Z0-9]/;
    return regExp2.test(new_pwd);
  };
  //------------------------------------------------------------------------------------

  const handleInputValue = (key) => (e) => {
    setCurrentPwd({ ...currentPwd, [key]: e.target.value });
  };
  //------------------------------------------------------------------------------------

  const fixPasswordHandler = () => {
    const accessToken = localStorage.getItem("accessToken");
    const { cur_pwd, new_pwd, verifyPassword } = currentPwd;
    //재확인
    if (!cur_pwd || !new_pwd || !verifyPassword) {
      setErrorMsg("비밀번호를 확인해주세요");
    } else if (!checkPassword(new_pwd) || !onChangePasswordChk()) {
      setErrorMsg("올바른 정보를 입력해주세요");
    } else {
      setErrorMsg("");
      if (!accessToken) {
        return;
      } else {
        axios
          .patch(
            `${process.env.REACT_APP_SERVER_API}/user/password`,
            {
              data: { cur_pwd, new_pwd },
            },
            {
              headers: { authorization: `Bearer ${accessToken}` },
              withCredentials: true,
            }
          )
          .then(() => {
            handleOff();
            alert("비밀번호가 변경되었습니다!");
            navigate("/mypage");
          })
          .catch((err) => {
            setErrorMsg("비밀번호를 확인해주세요.");
            console.log(err);
          });
      }
    }
  };

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            type="button"
            color="#e5e5e5"
            onClick={handleOff}
          />
        </CloseBtnContainer>
        <Form>
          <TextForm>
            <Text>비밀번호 변경</Text>
          </TextForm>

          <NewPwd>
            <CurPwd1
              placeholder="현재 비밀번호"
              type="password"
              onChange={handleInputValue("cur_pwd")}
            />
            <Pwd
              placeholder="비밀번호를 입력해주세요"
              type="password"
              name="user_pwd"
              autoComplete="on"
              onChange={handleInputValue("new_pwd")}
            />
            {checkPassword(currentPwd.new_pwd) || !currentPwd.new_pwd ? (
              <Warning />
            ) : (
              <Warning>비밀번호는 8자이상 영문과 숫자 조합입니다.</Warning>
            )}
            <PwdChk
              placeholder="비밀번호를 확인해주세요"
              type="password"
              name="pwd_chk"
              required
              autoComplete="on"
              onChange={handleInputValue("verifyPassword")}
            />
            {onChangePasswordChk() || !currentPwd.verifyPassword ? (
              <Warning></Warning>
            ) : (
              <Warning>비밀번호가 일치하지 않습니다.</Warning>
            )}
            <Btn>
              <ConfirmBtn type="button" onClick={fixPasswordHandler}>
                확인
              </ConfirmBtn>
              <Warning1>{errorMsg}</Warning1>
            </Btn>
          </NewPwd>
        </Form>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default PwdChange1;
