import styled from "styled-components";
import React from "react";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import SignOut from "../modalComponent/SignOut";

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
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  flex-direction: column;
`;
const Box2 = styled.div`
  /* border: 1px solid #108dee; */
  margin-top: 2%;
  width: 70vw;
  height: 8vh;
  display: flex;
  align-items: center;
  background: #108dee;
  font-size: 2rem;
  font-weight: bold;
`;
const Manage = styled.div`
  /* border: 1px solid #108dee; */
  width: 24%;
  margin-left: 10%;
  border-right: 3px solid black;
  cursor: pointer;
`;
const Contents = styled.div`
  /* border: 1px solid #108dee; */
  width: 24%;
  margin-left: 10%;
  border-right: 3px solid black;
  cursor: pointer;
`;
const Comment = styled.div`
  /* border: 1px solid #108dee; */
  width: 24%;
  margin-left: 10%;
  cursor: pointer;
`;
const Box3 = styled.div`
  border: 1px solid #108dee;
  margin-top: 4%;
  width: 70vw;
  height: 80vh;
  display: flex;
  margin-bottom: 10%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxImg = styled.img`
  position: absolute;
  top: 15%;
  width: 20%;
`;

// 내용이 없을 시 박스와 함께 manage, contents, comment 문구가 나타나야 한다.

const ManageText = styled.div`
  z-index: 99;
  position: absolute;
  top: 56%;
  font-size: 1.5rem;
`;
// const ContentsText = styled.div`
//   position: absolute;
//   top: 56%;
//   font-size: 1.5rem;
// `;
// const CommentText = styled.div`
//   position: absolute;
//   top: 56%;
//   font-size: 1.5rem;
// `;

function Mypage() {
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const GetClick = (e) => {
    setCurrentClick(e.target.id);
  };

  useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.color = "white";
      }
      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.color = "black";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <Title>000님 환영합니다!</Title>
        </TitleContainer>
      </Container>
      <Box1>
        <ButtonL>비밀번호 변경</ButtonL>
        <ButtonR onClick={openModal}>회원탈퇴</ButtonR>
        {showModal ? (
          <SignOut showModal={showModal} closeModal={closeModal} />
        ) : (
          ""
        )}
      </Box1>
      <ContentContainer>
        <Box2>
          <Manage id="manage" onClick={GetClick}>
            manage
          </Manage>
          <Contents id="contents" onClick={GetClick}>
            contents
          </Contents>
          <Comment id="comment" onClick={GetClick}>
            comment
          </Comment>
        </Box2>
        <Box3>
          <BoxImg src="/빈박스.png" alt="" />
          <ManageText>현재 등록된 수조가 없습니다. </ManageText>
          {/* <ContentsText>현재 등록된 게시글이 없습니다. </ContentsText> */}
          {/* <CommentText>현재 등록된 댓글이 없습니다.</CommentText> */}
        </Box3>
      </ContentContainer>
    </>
  );
}
export default Mypage;
