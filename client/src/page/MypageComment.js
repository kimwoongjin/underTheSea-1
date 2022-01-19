import styled from "styled-components";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  width: 90%;
  display: column;
  margin-bottom: 1px;
  z-index: 100;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

const BoxContainer = styled.div`
  display: flex;
  margin: 0;
  width: 55vw;
  /* border: 1px solid red; */
  box-sizing: border-box;
  align-items: center;
  margin-top: 2%;
  margin-left: 6.5%;
  border-bottom: 1px solid #cccccc;
`;

const Box = styled.div`
  position: relative;
  //   z-index: 1;
  flex: 6;
  width: 28%;
  height: 50%;
  margin: 0;
  align-items: center;
  font-family: "Kfont";
  box-sizing: border-box;
  margin-top: 1%;
  padding-left: 2%;
  padding-bottom: 2.5%;
`;

const Box2 = styled.div`
  flex: 2;
  width: 30%;
  height: 50%;
  /* border: 1px solid black; */
  font-family: "Kfont";
  box-sizing: border-box;
  margin-right: 22.5%;
  padding-bottom: 2.5%;
`;

const Box1 = styled.div`
  flex: 2;
  width: 30%;
  height: 50%;
  font-size: 0.9rem;
  /* border: 1px solid black; */
  font-family: "Kfont";
  box-sizing: border-box;
  margin-right: 5.5%;
  color: #828282;
  padding-bottom: 2.5%;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  width: 55vw;
  height: 5vh;
  font-size: 1.3rem;
  font-family: "Kfont";
  font-weight: bold;
  border-bottom: 1px solid black;
  position: absolute;
  bottom: 10%;
  padding-bottom: 0.5%;

  .title {
    display: flex;
    padding-left: 2%;
    /* border: 1px solid black; */
    margin-right: 35%;
  }
  .comment {
    display: flex;
    margin-right: 32%;
    /* border: 1px solid black; */
  }
  .date {
    display: flex;
    /* border: 1px solid black; */
  }
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 15% 0 0 5%;
`;

const BoxImg = styled.img`
  display: flex;
  margin-bottom: 2%;
`;

const Notice = styled.div`
  display: flex;
  font-size: 1.4rem;
  margin-left: 2%;
`;

function MypageComment() {
  const accessToken = localStorage.getItem("accessToken");
  const [commentInfo, setCommentInfo] = useState([]);

  useEffect(() => {
    commentHandler();
  });
  const commentHandler = () => {
    axios
      .get(`http://localhost:80/user/comments/1`, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((result) => {
        setCommentInfo([...result.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <div className="title">게시글</div>
        <div className="comment">댓글</div>
        <div className="date">날짜</div>
      </Head>
      <Container>
        {commentInfo.length === 0 ? (
          <>
            <Empty>
              <BoxImg
                src="https://iconmage.s3.ap-northeast-2.amazonaws.com/빈박스.png"
                alt=""
              />
              <Notice>현재 등록된 정보가 없습니다.</Notice>
            </Empty>
          </>
        ) : (
          <>
            {commentInfo.map((el) => {
              const date = el.createdAt.split("T")[0];
              // console.log(el, "//////");
              return (
                <>
                  <BoxContainer>
                    <Box key={el.id}>{el.tip_title}</Box>
                    <Box2>{el.content}</Box2>
                    <Box1>{date}</Box1>
                  </BoxContainer>
                </>
              );
            })}
          </>
        )}
      </Container>
    </>
  );
  // });
}
export default MypageComment;
