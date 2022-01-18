import styled from "styled-components";
import React from "react";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Mypage from "./Mypage";

const Container = styled.div`
  position: relative;
  width: 95%;
  display: flex;
  margin-bottom: 1px;
  z-index: 100;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  position: relative;
  z-index: 1;
  flex: 6;
  width: 90%;
  height: 30%;
  /* border: 1px solid red; */
  margin-top: 8px;
  margin-bottom: 5px;
`;

const Box1 = styled.div`
  flex: 2;
  width: 90%;
  height: 10%;
  font-size: 0.8rem;
  color: #808080;
  /* border: 1px solid black; */
  margin-top: 8px;
  margin-bottom: 5px;
  text-align: center;
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
    margin-right: 70%;
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

function MypageContent({ test }) {
  // console.log(test, ";;;;;;;;;");
  // return test.map((el) => {
  //   const date = el.created_at.split("T")[0];

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
              <BoxImg src="/빈박스.png" alt="" />
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
                  <Box key={el.id}>{el.title}</Box>
                  <Box1>{date}</Box1>
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
export default MypageContent;
