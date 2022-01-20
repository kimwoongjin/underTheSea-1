import styled from "styled-components";
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
  /* box-shadow: 0px 0px 10px #adb5bd; */
  /* background: white; */
  width: 100%;
  background: #d2f7ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  position: relative;

  .toogleBtn {
    position: absolute;
    right: 70px;
    font-size: 22px;
    color: black;
    z-index: 999;
    display: none;
  }

  /* @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;

    .toogleBtn {
      display: block;
    }
  } */
`;

const Img = styled.img`
  width: 13vw;
  margin-left: 1%;
  cursor: pointer;
`;

const Login = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  font-family: "Kfont";
  z-index: 999;
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
  z-index: 999;
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

  z-index: 999;
  border-radius: 5px;
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

const Search = styled.div`
  /* border: 1px solid red; */
  position: relative;
  z-index: 999;
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
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

const BtnContainer = styled.div`
  display: flex;
  font-size: 1.1rem;
  /* border: 1px solid red; */
  justify-content: space-around;
  margin-left: 55%;
  width: 390px;
  font-family: "Kfont";
  /* border: 1px solid red; */
  /* 
  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    display: none;
  } */
`;

function Header() {
  const [status, setStatus] = useState(false);

  const onClickHandler = (e) => {
    setStatus((prevStatus) => (prevStatus ? false : true));
  };
  //========================================================================

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
    <Container>
      <audio
        id="audio_play"
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/waterdrop.mp3"
      ></audio>
      <Img
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/로고.png"
        alt=""
        onClick={goToHome}
      />
      <BtnContainer className="menu" onclick={play}>
        <Link style={{ textDecoration: "none", color: "black" }} to="/guide">
          <Guide onclick={play}>가이드</Guide>{" "}
          <audio id="audio_play" src="waterdrop.mp3"></audio>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/search">
          <Search>검색</Search>
        </Link>
        {isLogin ? (
          <>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/manage"
            >
              <Manage onclick={play}>관리</Manage>
              <audio id="audio_play" src="waterdrop.mp3"></audio>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/mypage"
            >
              <Mypage>마이페이지</Mypage>
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
      )<FontAwesomeIcon className="toogleBtn" icon={faBars}></FontAwesomeIcon>
    </Container>
  );
}

export default Header;
