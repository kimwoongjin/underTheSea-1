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
  width: 30%;
  height: 50%;
  margin: 0;
  align-items: center;
  font-family: "Kfont";
  box-sizing: border-box;
  margin-top: 1%;
  padding-left: 2%;
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
  margin-left: 29%;
  font-size: 0.9rem;
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
    margin-right: 65.5%;
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
`;

function MypageContent() {
  const accessToken = localStorage.getItem("accessToken");
  const [test, setTest] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [contentLength, setContentLength] = useState([]);

  useEffect(() => {
    content(pageNum);
  }, [pageNum]);
  const content = (page_num) => {
    axios
      .get(`http://localhost:80/user/tips/${page_num}`, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((result) => {
        setTest([...result.data.data]);
        const page_length = Math.floor(result.data.length / 7);
        if (result.data.length % 7 !== 0) {
          const page = new Array(page_length + 1).fill(0);
          setContentLength([...page]);
        } else {
          const page = Array(page_length).fill(0);
          setContentLength([...page]);
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
    if (pageNum === contentLength.length) {
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
      <Head>
        <div className="title">작성한 글 제목</div>
        <div className="date">날짜</div>
      </Head>
      <Container>
        {test.length === 0 ? (
          <>
            <Empty>
              <BoxImg
                src="https://iconmage.s3.ap-northeast-2.amazonaws.com/빈박스.png"
                alt=""
              />
              <Notice>현재 등록된 정보가 없습니다. </Notice>
            </Empty>
          </>
        ) : (
          <>
            {test.map((el) => {
              const date = el.created_at.split("T")[0];
              // console.log(el, "//////");
              return (
                <>
                  <BoxContainer>
                    <Box key={el.id}>{el.title}</Box>
                    <Box1>{date}</Box1>
                  </BoxContainer>
                </>
              );
            })}
          </>
        )}
      </Container>
      <PageBtnForm>
        <PageBtn onClick={goToPre}>이전</PageBtn>
        {contentLength.map((el, idx) => {
          return (
            <PageBtn key={idx} id={idx + 1} onClick={selectPageNum}>
              {idx + 1}
            </PageBtn>
          );
        })}
        <PageBtn onClick={goToNext}>다음</PageBtn>
      </PageBtnForm>
    </>
  );
  // });
}
export default MypageContent;