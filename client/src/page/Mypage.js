import styled from "styled-components";
import React from "react";
import Header from "../component/Header";
import Header2 from "../component/Header2";
import Footer from "../component/Footer";
import { useState, useEffect } from "react";
import SignOut from "../modalComponent/SignOut";
import PwdChange1 from "../modalComponent/PwdChange1";
import axios from "axios";
import { signoutModalAction, pwdModalAction } from "../store/actions";
import MypageContent from "./MypageContent";
import MypageComment from "./MypageComment";
import MypageManage from "./MypageManage";
import MypageMenuBar from "./MypageMenuBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UserInfo = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Kfont";

  .Box {
    width: 100%;
    height: 52vh;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    background: #ace0ff;
  }
  .mypage {
    /* border: 1px solid black; */
    position: relative;
    width: 10vw;
    height: 6vh;
    margin: 1% 0 0 1.5%;
    font-size: 1.3rem;
  }

  .userImg {
    /* border: 1px solid black; */
    position: relative;
    left: 15%;
    width: 28vw;
    height: 35vh;
  }

  .img {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .userGreeting {
    /* border: 1px solid black; */
    position: relative;
    width: 30vw;
    height: 5vh;
    font-size: 1.7rem;
    left: 40%;
    bottom: 30%;
    font-weight: bold;
    padding-left: 1%;
  }
  .userNotice {
    position: relative;
    width: 30vw;
    height: 5vh;
    left: 40%;
    bottom: 28%;
    padding-left: 1%;
  }
`;
const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 25vh;
  /* border: 1px solid black; */
  align-items: center;
  justify-content: center;
`;
const TitleContainer = styled.div`
  position: relative;
  /* border: 1px solid black; */
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: left;
  line-height: 500%;
`;

const Title = styled.div`
  position: relative;
  width: 13vw;
  height: 8vh;
  font-size: 1.7rem;
  font-weight: bold;
  /* border: 1px solid black; */
  justify-content: center;
  top: 63%;
  right: 8%;
`;

const Box1 = styled.div`
  position: relative;
  justify-content: space-evenly;
  display: flex;
  width: 18vw;
  height: 4vh;
  /* border: 1px solid black; */
  left: 22%;
  top: 8%;
`;
const ButtonL = styled.button`
  width: 7vw;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  border: 1px solid #108dee;
  background: #108dee;
`;
const ButtonR = styled.button`
  width: 7vw;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background: #cccccc;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box3 = styled.div`
  /* position: relative; */
  border: 1px solid #ace0ff;
  margin-top: 4%;
  width: 70vw;
  height: 90vh;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Mypage() {
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const [currentPage, setCurrentPage] = useState("manage");
  //========================================================================
  const state = useSelector((state) => state.modalReducer);
  const { isSignoutModal } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    manageHandler();
  }, []);

  const manageHandler = () => {
    axios
      .get(`http://localhost:80/user/manage/1`, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((result) => {
        // console.log(result.data.user_name, "????????");
        setUserName([...result.data.user_name]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOn = () => {
    setOpenModal(true);
  };
  const handleOff = () => {
    setOpenModal(false);
  };

  function pageRender() {
    if (currentPage === "manage") {
      return <MypageManage />;
    } else if (currentPage === "comment") {
      return <MypageComment />;
    } else if (currentPage === "contents") {
      return <MypageContent />;
    }
  }

  return (
    <>
      {/* <Header /> */}
      <Header2 />
      <UserInfo>
        <div className="Box">
          <div className="mypage">마이페이지</div>

          <div className="userImg">
            <img className="img" src="유저1.png"></img>
          </div>
          <div className="userGreeting">{userName}님 환영합니다!</div>
          <div className="userNotice">
            마이페이지에서는 간략한 사용자정보를 조회할 수 있습니다.
          </div>
        </div>
      </UserInfo>
      <Container>
        <TitleContainer>
          <Title>계정정보 조회</Title>
          <Box1>
            <ButtonL onClick={handleOn}>비밀번호 변경</ButtonL>
            {openModal && <PwdChange1 handleOff={handleOff} />}
            <ButtonR
              onClick={() => {
                dispatch(signoutModalAction);
              }}
            >
              회원탈퇴
            </ButtonR>
          </Box1>
        </TitleContainer>
      </Container>

      {/* ============================================================================================= */}
      <ContentContainer>
        <MypageMenuBar setCurrentPage={setCurrentPage}></MypageMenuBar>
        <Box3>{pageRender(currentPage)}</Box3>

        {/* <BoxImg src="/빈박스.png" alt="" /> */}
        {/* <Notice>현재 등록된 정보가 없습니다. </Notice> */}
        {isSignoutModal && <SignOut />}
      </ContentContainer>
      <Footer />
    </>
  );
}
export default Mypage;
