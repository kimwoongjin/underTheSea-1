import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
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
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const ModalContainer = styled.div`
  width: 25%;
  height: 60%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  z-index: 999;
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
  /* border: 1px solid red; */
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;
const Title = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
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
  /* border: 1px dashed black; */
  display: flex;
  flex-direction: column;
`;
const Username = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  /* margin-bottom: 20px; */
`;
const Email = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  /* margin-bottom: 20px; */
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

function SignUp({ onCancel, visible }) {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  //모달 창 애니멘이션 관련
  //밑에 부분이 회원가입관련
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
  const checkUsername = (user_name) => {
    let regExp = /^([a-zA-Z가-힣]){0,10}$/;
    return regExp.test(user_name);
  };

  const checkEmail = (email) => {
    let regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };

  const checkpassword = (user_pwd) => {
    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; //대문자, 소문자, 숫자로 이루어진 10자 이하
    return regExp.test(user_pwd);
  };
  // ==================================================================================

  const onChangePasswordChk = () => userData.user_pwd === userData.pwd_chk;
  // 비밀번호 확인

  const handleSignup = () => {
    const { email, user_name, user_pwd, pwd_chk } = userData;
    if (!email || !user_name || !user_pwd || !pwd_chk) {
      setErrorMsg("필수 정보를 모두 입력해주세요");
    } else if (
      !checkEmail(email) ||
      !checkUsername(user_name) ||
      !checkpassword(user_pwd) ||
      !onChangePasswordChk()
    ) {
      setErrorMsg("올바른 정보를 입력해주세요");
    } else {
      setErrorMsg("");
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, {
          data: {
            email,
            user_name,
            user_pwd,
          },
        })
        .then((res) => {
          if (res.data.message === "Email is already in use") {
            setErrorMsg("이미 사용중인 이메일입니다");
          } else if (
            res.data.message === "User account is successfully created"
          ) {
            navigate("/");
            //경로 메인으로 들어가서 로그인하면 됨
          }
        });
    }
  };

  //-----------------------
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
          <FontAwesomeIcon icon={faTimes} size="2x" onClick={onCancel} />
        </CloseBtnContainer>
        <Title>회원가입</Title>
        <Form>
          <Username
            placeholder="이름을 입력해주세요"
            type="text"
            name="user_name"
            required
            value={userData.user_name}
            onChange={handleInputValue}
            autoComplete="on"
          />
          {checkUsername(userData.user_name) || !userData.user_name ? (
            <Warning></Warning>
          ) : (
            <Warning>영문 또는 한글 숫자만 사용 가능합니다.</Warning>
          )}
          <Email
            placeholder="이메일을 입력해주세요"
            type="email"
            name="email"
            required
            value={userData.email}
            onChange={handleInputValue}
            autoComplete="on"
          />
          {checkEmail(userData.email) || !userData.email ? (
            <Warning></Warning>
          ) : (
            <Warning>알맞은 이메일 형식이 아닙니다.</Warning>
          )}
          <Pwd
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="user_pwd"
            value={userData.user_pwd}
            required
            onChange={handleInputValue}
            autoComplete="on"
          />
          {checkpassword(userData.user_pwd) || !userData.user_pwd ? (
            <Warning />
          ) : (
            <Warning>비밀번호는 8자이상 영문과 숫자 조합입니다.</Warning>
          )}
          <PwdChk
            placeholder="비밀번호를 확인해주세요"
            type="password"
            name="pwd_chk"
            required
            // value={userData.pwd_chk}
            onChange={handleInputValue}
            autoComplete="on"
          />
          {onChangePasswordChk() || !userData.pwd_chk ? (
            <Warning></Warning>
          ) : (
            <Warning>비밀번호가 일치하지 않습니다.</Warning>
          )}
          <SignupBtn type="button" onClick={handleSignup}>
            회원가입
          </SignupBtn>
          <Warning>{errorMsg}</Warning>
        </Form>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default SignUp;
