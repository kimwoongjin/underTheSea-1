import styled from "styled-components";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Head = styled.div`
  display: flex;
  align-items: center;
  width: 55.5vw;
  height: 20%;
  font-size: 1.3rem;
  font-family: "Kfont";
  font-weight: bold;
  border-bottom: 1px solid black;
  /* border: 1px solid black; */
  position: relative;
  left: 6%;
  bottom: 3%;
  box-sizing: border-box;

  .comment {
    flex: 6;
    display: flex;
    box-sizing: border-box;
    position: relative;
    padding: 0 0 2% 3%;
  }
  .date {
    flex: 2;
    display: flex;
    box-sizing: border-box;
    position: relative;
    padding-bottom: 2%;
  }

  @media screen and (max-width: 1024px) {
    .comment {
      font-size: 1rem;
    }
    .date {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .comment {
      font-size: 0.9rem;
    }
    .date {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    left: 0%;
    height: 10%;
    margin-top: 3%;
    padding-bottom: 2%;

    .comment {
      flex: 4;
      font-size: 0.6rem;
    }
    .date {
      flex: 1.6;
      left: 0%;
      font-size: 0.6rem;
    }
  }
`;
const Container = styled.div`
  position: relative;
  display: column;
  width: 90%;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 1px; */
  z-index: 100;
  margin-top: 8%;
  /* border: 1px solid black; */
`;

const BoxContainer = styled.div`
  display: flex;
  margin: 0;
  width: 55.5vw;
  /* border: 1px solid red; */
  box-sizing: border-box;
  align-items: center;
  position: relative;
  bottom: 3%;
  margin-left: 6%;
  border-bottom: 1px solid #cccccc;
  @media screen and (max-width: 480px) {
    width: 100%;
    left: -6%;
  }
`;

const Box2 = styled.div`
  flex: 6;
  width: 30%;
  height: 50%;
  /* border: 1px solid black; */
  font-family: "Kfont";
  box-sizing: border-box;
  padding: 2.5% 0 2.6% 3%;

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

const Box1 = styled.div`
  flex: 2;
  width: 30%;
  height: 50%;
  color: gray;
  font-size: 0.9rem;
  /* border: 1px solid black; */
  font-family: "Kfont";
  box-sizing: border-box;
  padding: 2.8% 0 2.7%;

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
    padding-left: 5%;
    flex: 2.5;
  }
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 9% 0 0 5%;
`;

const BoxImg = styled.img`
  display: flex;
  margin-bottom: 2%;

  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;

const Notice = styled.div`
  display: flex;
  font-size: 1.4rem;
  margin-left: 2%;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const PageBtnForm = styled.form`
  display: flex;
  width: 95%;
  justify-content: center;
  padding-top: 15px;
  margin-bottom: 15px;
`;

const PageBtn = styled.div`
  align-items: center;
  border-style: none;
  background-color: #ffffff;
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

function MypageComment() {
  const accessToken = localStorage.getItem("accessToken");
  const [commentInfo, setCommentInfo] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [commentLength, setCommentLength] = useState([]);

  useEffect(() => {
    commentHandler(pageNum);
  }, [pageNum]);
  const commentHandler = (page_num) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/user/comments/${page_num}`, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((result) => {
        setCommentInfo([...result.data.data]);
        const page_length = Math.floor(result.data.length / 7);
        if (result.data.length % 7 !== 0) {
          const page = new Array(page_length + 1).fill(0);
          setCommentLength([...page]);
        } else {
          const page = Array(page_length).fill(0);
          setCommentLength([...page]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 이전페이지
  const goToPre = () => {
    if (pageNum === 1) {
      return;
    }
    const page = Number(pageNum);
    setPageNum(page - 1);
    console.log(pageNum);
  };

  // 다음페이지
  const goToNext = () => {
    if (pageNum === commentLength.length) {
      return;
    }
    const page = Number(pageNum);
    setPageNum(pageNum + 1);
    console.log(pageNum);
  };

  // 페이지 선택
  const selectPageNum = (e) => {
    const page = Number(e.target.id);
    setPageNum(page);
    console.log(pageNum);
  };

  return (
    <>
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
            <Head>
              <div className="comment">댓글</div>
              <div className="date">날짜</div>
            </Head>
            {commentInfo.map((el) => {
              const date = el.createdAt.split("T")[0];
              // console.log(el, "//////");
              return (
                <>
                  <BoxContainer>
                    {/* <Box key={el.id}>{el.tip_title}</Box> */}
                    <Box2>{el.content}</Box2>
                    <Box1>{date}</Box1>
                  </BoxContainer>
                </>
              );
            })}
            <PageBtnForm>
              <PageBtn onClick={goToPre}>이전</PageBtn>
              {commentLength.map((el, idx) => {
                return (
                  <PageBtn key={idx} id={idx + 1} onClick={selectPageNum}>
                    {idx + 1}
                  </PageBtn>
                );
              })}
              <PageBtn onClick={goToNext}>다음</PageBtn>
            </PageBtnForm>
          </>
        )}
      </Container>
    </>
  );
  // });
}
export default MypageComment;
