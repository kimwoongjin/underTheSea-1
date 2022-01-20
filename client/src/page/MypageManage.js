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
  margin-top: 9%;

  /* border: 1px solid black; */
`;

const BoxContainer = styled.div`
  display: flex;
  margin: 0;
  width: 55vw;
  /* border: 1px solid red; */
  box-sizing: border-box;
  align-items: center;
  margin-top: 0%;
  margin-left: 6.5%;
  border-bottom: 1px solid #cccccc;
`;

const Box = styled.div`
  position: relative;
  flex: 6;
  width: 30%;
  height: 50%;
  margin: 0;
  align-items: center;
  font-family: "Kfont";
  box-sizing: border-box;
  margin-top: 0%;
  padding-left: 2%;
  padding-bottom: 2.5%;
`;

const Box2 = styled.div`
  flex: 2;
  width: 30%;
  height: 50%;
  font-size: 0.9rem;
  /* border: 1px solid black; */
  font-family: "Kfont";
  box-sizing: border-box;
  margin-left: 31%;
  padding-bottom: 2.5%;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  width: 78%;
  height: 5%;
  font-size: 1.3rem;
  font-family: "Kfont";
  font-weight: bold;
  border-bottom: 1px solid black;
  position: relative;
  top: 10%;
  padding-bottom: 0.5%;
  box-sizing: border-box;

  .title {
    display: flex;
    padding-left: 2%;
    /* border: 1px solid black; */
    /* margin-right: 70%; */
    flex: 6;
    box-sizing: border-box;
    position: relative;
  }
  .comment {
    flex: 2;
    display: flex;
    box-sizing: border-box;
    position: relative;

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

function MypageManage() {
  const [manageInfo, setManageInfo] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [manageLength, setManageLength] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    manageHandler(pageNum);
  }, [pageNum]);

  const manageHandler = (page_num) => {
    axios
      .get(`http://localhost:80/user/manage/${page_num}`, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((result) => {
        setManageInfo([...result.data.data]);
        const page_length = Math.floor(result.data.length / 7);
        if (result.data.length % 7 !== 0) {
          const page = new Array(page_length + 1).fill(0);
          setManageLength([...page]);
        } else {
          const page = Array(page_length).fill(0);
          setManageLength([...page]);
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
    const page = pageNum;
    setPageNum(page - 1);
  };

  // 다음페이지
  const goToNext = () => {
    if (pageNum === manageLength.length) {
      return;
    }
    setPageNum(pageNum + 1);
  };

  // 페이지 선택
  const selectPageNum = (e) => {
    setPageNum(e.target.id);
  };

  return (
    <>
      <Head>
        <div className="title">어항 이름</div>
        <div className="comment">수조크기</div>
      </Head>
      <Container>
        {manageInfo.length === 0 ? (
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
            {manageInfo.map((el, idx) => {
              // console.log(el, "?????????");
              return (
                <>
                  <BoxContainer>
                    <Box key={idx}>{el.container_name}</Box>
                    <Box2>{el.size}</Box2>
                  </BoxContainer>
                </>
              );
            })}
          </>
        )}
      </Container>
      <PageBtnForm>
        <PageBtn onClick={goToPre}>이전</PageBtn>
        {manageLength.map((el, idx) => {
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
}
export default MypageManage;