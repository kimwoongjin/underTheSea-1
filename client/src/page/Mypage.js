import styled from "styled-components";
import React from "react";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import SignOut from "../modalComponent/SignOut";
import PwdChange1 from "../modalComponent/PwdChange1";
import axios from "axios";
import { useSelector } from "react-redux";
import { signoutModalAction, pwdModalAction } from "../store/actions";
import { useDispatch } from "react-redux";
import MypageContent from "./MypageContent";

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
  justify-content: center;
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
const Head = styled.div`
  display: flex;
  align-items: center;
  width: 55vw;
  height: 5vh;
  font-size: 1.5rem;
  font-family: "Kfont";
  font-weight: bold;
  /* border: 1px solid black; */
  border-bottom: 1px solid black;
  padding: 3% 0 3%;

  .box {
    border-right: 2px solid black;
    height: 3vh;
    margin-left: 56.5%;
  }
  .title {
    display: flex;
    margin-left: 2%;
  }
  .date {
    display: flex;
    margin-left: 2%;
  }
`;

const Box3 = styled.div`
  border: 1px solid #108dee;
  margin-top: 4%;
  width: 70vw;
  height: 80vh;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//==========잠시 주석=================
// const BoxImg = styled.img`
//   position: absolute;
//   top: 15%;
//   width: 20%;
// `;
//==========잠시 주석=================

// 내용이 없을 시 박스와 함께 manage, contents, comment 문구가 나타나야 한다.

//==========잠시 주석=================
// const ManageText = styled.div`
//   z-index: 99;
//   position: absolute;
//   top: 56%;
//   font-size: 1.5rem;
// `;
//==========잠시 주석=================
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
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("manage");
  const accessToken = localStorage.getItem("accessToken");
  //========================================================================

  const [manageInfo, setManageInfo] = useState([]);
  const [commentInfo, setCommentInfo] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:80/user/manage`, {
  //       headers: { authorization: `Bearer ${accessToken}` },
  //       withCredentials: true,
  //     })
  //     .then((result) => {
  //       setManageInfo([...result.data.data]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // console.log(manageInfo, "%%%%%%%");

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:80/user/comments/1`, {
  //       headers: { authorization: `Bearer ${accessToken}` },
  //       withCredentials: true,
  //     })
  //     .then((result) => {
  //       // console.log(result.data.data, "1111111");

  //       setCommentInfo([...result.data.data]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const [test, setTest] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:80/user/tips`, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((result) => {
        setTest([...result.data.data]);
        // console.log(result.data.data, ";;;;;;");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOn = () => {
    setOpenModal(true);
  };
  const handleOff = () => {
    setOpenModal(false);
  };
  const state = useSelector((state) => state.modalReducer);
  const { isSignoutModal, isPwdModal } = state;
  const dispatch = useDispatch();

  const GetClick = (e) => {
    setCurrentClick(e.target.id);
  };

  // useEffect(
  //   (e) => {
  //     if (currentClick !== null) {
  //       let current = document.getElementById(currentClick);
  //       current.style.color = "white";
  //     }
  //     if (prevClick !== null) {
  //       let prev = document.getElementById(prevClick);
  //       prev.style.color = "black";
  //     }
  //     setPrevClick(currentClick);
  //   },
  //   [currentClick]
  // );

  return (
    <>
      <Header />
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
          <Head>
            <div className="title">작성한 글 제목</div>
            <div className="box"></div>
            <div className="date">날짜</div>
          </Head>

          {test.map((el) => (
            <MypageContent el={el} key={el.id} />
          ))}

          {/* <BoxImg src="/빈박스.png" alt="" /> */}
          {/* <ManageText>현재 등록된 수조가 없습니다. </ManageText> */}
          {/* <ContentsText>현재 등록된 게시글이 없습니다. </ContentsText> */}
          {/* <CommentText>현재 등록된 댓글이 없습니다.</CommentText> */}
          {/* input 태그 3개 
            상태 : "" update만 하기 
          */}
        </Box3>
        {/* {isPwdModal && <PwdChange1 />} */}
        {isSignoutModal && <SignOut />}
      </ContentContainer>
    </>
  );
}
export default Mypage;
