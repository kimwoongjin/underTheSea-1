import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch } from "react-redux";
// import { modalOff } from "../store/actions";
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
  height: 50%;
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

const NewPwd = styled.form`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;

const NewPwd1 = styled.input`
  margin-top: 30%;
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

function PwdChange({ handleOff }) {
  //   const navigate = useNavigate();

  const [alertMessage, setAlertMessage] = useState(""); //메세지
  const [isOpenAlert, setIsOpenAlert] = useState(false); //메세지alert

  // //메세지 alert 핸들러
  const openAlertHandler = () => {
    setIsOpenAlert(!isOpenAlert);
    setTimeout(() => setIsOpenAlert(false), 4000);
  };

  // //비밀번호 저장
  const [currentPwd, setCurrentPwd] = useState({
    new_pwd: "",
    verifyPassword: "",
  });
  //유효성
  const checkPassword = (new_pwd) => {
    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; //대문자, 소문자, 숫자로 이루어진 10자 이하
    return regExp.test(new_pwd);
  };
  // //유효성
  const [validation, setValidation] = useState({
    password: false,
    verifyPassword: false,
  });

  // //유효성을 위한 메세지
  const [message, setMessage] = useState({
    password: "비밀번호는 10글자 이상, 영문, 숫자 조합이어야 합니다.",
    verifyPassword: "비밀번호를 확인해주세요.",
  });

  // //유효성
  const isValidForPassword = validation.password && validation.verifyPassword;

  //------------------------------------------------------------------------------------

  const handleInputValue = (key) => (e) => {
    setCurrentPwd({ ...currentPwd, [key]: e.target.value });
  };
  //------------------------------------------------------------------------------------

  const fixPasswordHandler = () => {
    const accessToken = localStorage.getItem("accessToken");
    //재확인
    if (!accessToken) {
      return;
    } else {
      axios
        .patch(
          `${process.env.REACT_APP_API_URL}/user/password`,
          { cur_pwd: { data: currentPwd } }, // 재확인
          {
            headers: { authorization: `Bearer ${accessToken}` },
            withCredentials: true,
          }
        )
        .then(() => {
          setAlertMessage("패스워드가 변경되었습니다.");
          openAlertHandler();
        })
        .catch((err) => {
          setAlertMessage("잘못된 요청입니다.");
          // openWarningAlertHandler(); //필요한가???
          console.log(err);
        });
    }
  };
  //------------------------------------------------------------------------------------
  useEffect(() => {
    setMessage({
      ...message,
      password:
        currentPwd.new_pwd.length >= 10
          ? checkPassword(currentPwd.new_pwd)
            ? "사용할 수 있는 비밀번호 입니다."
            : "비밀번호는 영문, 숫자 조합이어야 합니다."
          : "비밀번호는 8글자 이상, 영문, 숫자 조합이어야 합니다.",
      verifyPassword:
        currentPwd.verifyPassword.length >= currentPwd.new_pwd.length &&
        currentPwd.verifyPassword.length >= 10
          ? currentPwd.verifyPassword === currentPwd.new_pwd
            ? "비밀번호가 일치합니다."
            : "비밀번호가 불일치합니다."
          : "비밀번호를 확인해주세요.",
    });
    setValidation({
      ...validation,
      password: checkPassword(currentPwd.new_pwd),
      verifyPassword: currentPwd.new_pwd === currentPwd.verifyPassword,
    });
  }, [currentPwd]);

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            type="button"
            onClick={handleOff}
          />
        </CloseBtnContainer>
        <Form>
          <TextForm>
            <Text>비밀번호 변경</Text>
          </TextForm>
          <NewPwd>
            <NewPwd1
              placeholder="새 비밀번호"
              type="password"
              onChange={handleInputValue("new_pwd")}
            />
            {message.password ===
            "비밀번호는 10글자 이상, 영문, 숫자 조합이어야 합니다." ? (
              <div>{message.password}</div>
            ) : message.password === "사용할 수 있는 비밀번호 입니다." ? (
              <div>{message.password}</div>
            ) : (
              <div>{message.password}</div>
            )}
            <NewPwd2
              placeholder="새 비밀번호 확인"
              type="password"
              onChange={handleInputValue("verifyPassword")}
            />
            {isValidForPassword ? (
              <Btn>
                <ConfirmBtn type="button" onClick={fixPasswordHandler}>
                  확인
                </ConfirmBtn>
              </Btn>
            ) : (
              <Btn>
                <ConfirmBtn disabled={true}>확인</ConfirmBtn>
              </Btn>
            )}
            {message.verifyPassword === "비밀번호를 확인해주세요." ? (
              <div>{message.verifyPassword}</div>
            ) : message.verifyPassword === "비밀번호가 일치합니다." ? (
              <div>{message.verifyPassword}</div>
            ) : (
              <div>{message.verifyPassword}</div>
            )}{" "}
          </NewPwd>
        </Form>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default PwdChange;
