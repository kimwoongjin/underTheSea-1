import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
  border-radius: 20px;
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
  height: 40%;
  /* border: 1px dashed black; */
  display: flex;
  flex-direction: column;
`;
const Email = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const Pwd = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const LoginBtn = styled.button`
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
const GoogleBtn = styled.button`
  width: 100%;
  height: 50px;
  background: white;
  border: 2px solid #108dee;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-style: none; */
  border-radius: 4px;
  color: white;
  padding: 5px;
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
const GoogleIcon = styled.img`
  width: 30%;
`;
function Login({ onCancel, visible }) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

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
        <Title>로그인</Title>
        <Form>
          <Email
            placeholder="이메일을 입력해주세요"
            type="email"
            name="email"
          />

          <Pwd
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="user_pwd"
          />

          <LoginBtn type="button">로그인</LoginBtn>
          <GoogleBtn type="button">
            {/* <FontAwesomeIcon icon={faGoogle} /> */}
            <GoogleIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/544px-Google_2015_logo.svg.png" />
          </GoogleBtn>
        </Form>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default Login;
