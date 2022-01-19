import styled from "styled-components";
import React from "react";
import Header from "../component/Header";
import Header2 from "../component/Header2";
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

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
`;
const TitleContainer = styled.div`
  margin-top: 10%;
  margin-right: 40%;
  position: relative;
  width: 40%;
  height: 100%;
  /* border: 1px solid black; */
  text-align: left;
  line-height: 500%;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Box1 = styled.div`
  width: 24vw;
  height: 6vh;
  margin-top: 7%;
  margin-left: 63%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-evenly;
`;
const ButtonL = styled.button`
  width: 9vw;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  border: 1px solid #108dee;
  background: #108dee;
`;
const ButtonR = styled.button`
  width: 9vw;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  border: 1px solid #108dee;
  background: #108dee;
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
  border: 1px solid #108dee;
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
  const [currentPage, setCurrentPage] = useState("manage");
  //========================================================================
  const state = useSelector((state) => state.modalReducer);
  const { isSignoutModal } = state;
  const dispatch = useDispatch();

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
      <Container>
        <TitleContainer>
          <Title>000님 환영합니다!</Title>
        </TitleContainer>
      </Container>
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
      {/* ============================================================================================= */}
      <ContentContainer>
        <MypageMenuBar setCurrentPage={setCurrentPage}></MypageMenuBar>
        <Box3>{pageRender(currentPage)}</Box3>

        {/* <BoxImg src="/빈박스.png" alt="" /> */}
        {/* <Notice>현재 등록된 정보가 없습니다. </Notice> */}
        {isSignoutModal && <SignOut />}
      </ContentContainer>
    </>
  );
}
export default Mypage;
