import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header2 from "../component/Header2";
import CommentTips from "./CommentTips";
import ContentTips from "./ContentTips";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopCover = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* border-bottom: 2px solid #808080; */
  flex-direction: column;
  /* background-image: url("투명바다1.png"); */
`;

const TitleContainer = styled.div`
  width: 15%;
  display: flex;
  /* border: 1px solid green; */
  position: relative;
`;

const Title = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 40px;
  padding-bottom: 5px;
  box-sizing: border-box;
  border-bottom: 5px solid #108dee;
  text-align: center;
`;
const SubTitle = styled.div`
  margin-top: 15px;
  color: #808080;
  font-size: 1.25rem;
  margin-bottom: 50px;
  /* border: 1px solid red; */
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  width: 70%;
  height: 100%;
  border: 1px solid #a0d5fd;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const BtnContainer = styled.div`
  width: 70%;
  /* margin-top: 80px; */
  display: flex;
  justify-content: flex-end;
  /* border: 1px dashed darkcyan; */
`;

const BtnL = styled.button`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  align-items: center;
  margin: 0 5px;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  border-style: none;
  border-radius: 4px;
  margin-right: 0;
  background: #108dee;
  text-align: center;
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
`;

const Btn = styled.button`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  align-items: center;
  margin: 0 5px;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  border-style: none;
  border-radius: 4px;
  margin-right: 0;
  background: #108dee;
  text-align: center;
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
`;

const BtnR = styled.button`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  align-items: center;
  margin: 0 5px;
  color: black;
  font-size: 1.25rem;
  font-weight: bold;
  border-style: none;
  border-radius: 4px;
  margin-right: 0;
  text-align: center;
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
`;

function PostTips() {
  const [tipData, setTipData] = useState({});
  const [comment, setComment] = useState([]);
  const [isWriter, setIsWriter] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const tip_id = params.tip_id;
  const state = useSelector((state) => state.authReducer);
  const { isLogin } = state;
  const accessToken = localStorage.getItem("accessToken");
  // const tip_id = localStorage.getItem("tip_id");

  // 선택한 게시물 댓글 렌더링
  useEffect(() => {
    handlePostTip(tip_id);
    handleComment();
  }, []);

  // 해당 게시물 조회
  const handlePostTip = (tip_id) => {
    axios
      .get(`http://localhost:80/tip/${tip_id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("user_name", res.data.data.user_name);
        setTipData({
          ...res.data.data,
        });
        setIsWriter(res.data.data.isWriter);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 해당 댓글 정보 불러오기
  const handleComment = () => {
    axios
      .get(`http://localhost:80/comment/${tip_id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setUserName(res.data.user_name);
        setComment([...res.data.data]);
      });
  };

  // 댓글 추가
  const handleUploadComment = (data) => {
    axios
      .post(
        `http://localhost:80/comment/${tip_id}`,
        { data: data },
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        const { data: result } = res.data;
        setComment([...comment, result]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 댓글 삭제
  const handleDeleteComment = (comment_id) => {
    axios
      .delete(`http://localhost:80/comment/${comment_id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        handleComment();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 목록으로 이동
  const goToList = () => {
    localStorage.setItem("tip_id", null);
    navigate("/honeytips");
  };

  // 게시글 삭제
  const deleteTip = () => {
    axios
      .delete(`http://localhost:80/tip/${tip_id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((result) => {
        navigate("/honeytips");
      })
      .catch((err) => console.log(err));
  };

  // 게시글 수정
  const editTip = () => {
    localStorage.setItem("edit_tip", true);
    localStorage.setItem("tip_id", tipData.id);
    navigate("/writetips");
  };

  return (
    <>
      <Header2></Header2>
      <Container>
        <TopCover>
          <TitleContainer>
            <Title>정보공유 게시판</Title>
          </TitleContainer>
          <SubTitle>여러분의 지식을 나눠주세요!</SubTitle>
        </TopCover>
        <BtnContainer>
          <BtnL onClick={goToList}>목록</BtnL>
          {isWriter && isLogin ? (
            <>
              <Btn onClick={editTip}>수정</Btn>
              <BtnR onClick={deleteTip}>삭제</BtnR>
            </>
          ) : (
            <></>
          )}
        </BtnContainer>
        <PostContainer>
          <ContentTips tipData={tipData}></ContentTips>
          <CommentTips
            comment={comment}
            userName={userName}
            handleUploadComment={handleUploadComment}
            handleDeleteComment={handleDeleteComment}
          ></CommentTips>
        </PostContainer>
      </Container>
    </>
  );
}
export default PostTips;
