import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginModalOnAction,
  logoutAction,
  signupModalOnAction,
  logoutModalOnAction,
} from "../store/actions";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  background: white;
  background: #d2f7ff;
  box-shadow: 0px 0px 5px #adb5bd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    /* height: 12vh; */
  }
`;

const Img = styled.img`
  width: 13vw;
  margin-left: 1%;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 17vw;
    margin-top: 1%;
  }
`;

const Login = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;

const Manage = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;

const Mypage = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;

const Signup = styled.div`
  /* border: 1px solid red; */
  border-radius: 8px;
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  background: #008eff;
  color: white;
  position: relative;
  :hover::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Signout = styled.div`
  /* border: 1px solid red; */
  border-radius: 5px;
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  font-family: "Kfont";
  cursor: pointer;
  background: #008eff;
  color: white;
  position: relative;
  :hover::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 2%;
    box-sizing: border-box;
  }
`;

const Search = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
  @media screen and (max-width: 768px) {
    ${(props) =>
      props.toggle &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        /* width: 90%; */
      `}
  }
`;
const Guide = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;
const Bars = styled.div`
  position: absolute;
  display: none;
  font-size: 20px;
  /* border: 1px solid red; */
  top: 20px;
  right: 32px;
  cursor: pointer;
  color: #e5e5e5;
  z-index: 999;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  font-size: 1.1rem;
  justify-content: space-around;
  margin-right: 2%;
  width: 370px;
  font-family: "Kfont";

  @media screen and (max-width: 768px) {
    display: none;
    ${(props) =>
      props.toggle &&
      css`
        /* border: 1px solid red; */
        /* background: black; */
        margin-top: 3vh;
        margin-right: 0;
        display: flex;
        width: 100%;
        background: white;
        align-items: center;
        flex-direction: column;
        height: 350px;
        margin-bottom: 2%;
        z-index: 99;
      `}
  }
`;

function Header() {
  const [status, setStatus] = useState(false);
  const [toggle, setToggle] = useState(false);
  const onClickHandler = (e) => {
    setStatus((prevStatus) => (prevStatus ? false : true));
  };
  //========================================================================
  const showToggle = () => {
    setToggle(!toggle);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.authReducer);
  const { isLogin } = state;
  const accessToken = localStorage.getItem("accessToken");
  // 로고 클릭시 메인으로

  const goToHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    axios
      .post(
        `http://localhost:80/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.setItem("accessToken", "");
        navigate("/");
        dispatch(logoutAction);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const play = () => {
    console.log("Play damm it!!");
    var audio = document.getElementById("audio_play");
    console.log("Play damm it!!");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <Container toggle={toggle}>
      <audio
        id="audio_play"
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/waterdrop.mp3"
      ></audio>
      <Img
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/로고.png"
        alt=""
        onClick={goToHome}
      />
      <BtnContainer className="menu" onclick={play} toggle={toggle}>
        <Link style={{ textDecoration: "none", color: "black" }} to="/guide">
          <Guide onclick={play} toggle={toggle}>
            가이드
          </Guide>
          <audio id="audio_play" src="waterdrop.mp3"></audio>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/search">
          <Search toggle={toggle}>검색</Search>
        </Link>
        {isLogin ? (
          <>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/manage"
            >
              <Manage onclick={play} toggle={toggle}>
                관리
              </Manage>
              <audio id="audio_play" src="waterdrop.mp3"></audio>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/mypage"
            >
              <Mypage toggle={toggle}>마이페이지</Mypage>
            </Link>
            {/* <Signout onClick={handleLogout}>로그아웃</Signout> */}
          </>
        ) : (
          <>
            <Login onClick={() => dispatch(loginModalOnAction)}>로그인</Login>
            <Signup onClick={() => dispatch(signupModalOnAction)}>
              회원가입
            </Signup>
          </>
        )}
        {!isLogin ? (
          <></>
        ) : (
          <>
            <Signout onClick={handleLogout}>로그아웃</Signout>
          </>
        )}
        {/* <Signup onClick={() => dispatch(signupModalOnAction)}>회원가입</Signup> */}
      </BtnContainer>
      <Bars toggle={toggle} onClick={showToggle}>
        <FontAwesomeIcon className="toogleBtn" icon={faBars}></FontAwesomeIcon>
      </Bars>
    </Container>
  );
}

export default Header;
