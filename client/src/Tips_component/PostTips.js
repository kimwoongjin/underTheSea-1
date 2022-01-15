import React, { useState, useEffect } from "react";
import axios from "axios";
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
const Starfish = styled.img`
  position: absolute;
  right: -40px;
  bottom: 35px;
  width: 35%;
  height: 35%;
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

const BtnContainer = styled.div`
  width: 70%;
  /* margin-top: 80px; */
  display: flex;
  justify-content: flex-end;
  /* border: 1px dashed darkcyan; */
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 70%;
  height: 100%;
  border: 1px solid #a0d5fd;
  border-radius: 4px;
  margin-bottom: 10px;
`;

function PostTips() {
  const [tipData, setTipData] = useState({});
  const [comment, setComment] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const tip_id = localStorage.getItem("tip_id");

  // 선택한 게시물 댓글 렌더링
  useEffect(() => {
    handlePostTip();
    handleComment();
  }, []);

  // 해당 게시물 조회
  const handlePostTip = () => {
    axios
      .get(`http://localhost:80/tip/${tip_id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.data)
        localStorage.setItem("user_name", res.data.data.user_name);
        setTipData({
          ...res.data.data,
        });
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
        console.log(res.data.data);
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

  return (
    <>
      <Header2></Header2>
      <Container>
        <TopCover>
          <TitleContainer>
            <Title>정보공유 게시판</Title>
            <Starfish src="불가사리.png" />
          </TitleContainer>
          <SubTitle>여러분의 지식을 나눠주세요!</SubTitle>
        </TopCover>
        <PostContainer>
          <ContentTips tipData={tipData}></ContentTips>
          <CommentTips
            comment={comment}
            handleUploadComment={handleUploadComment}
            handleDeleteComment={handleDeleteComment}
          ></CommentTips>
        </PostContainer>
      </Container>
    </>
  );
}
export default PostTips;
