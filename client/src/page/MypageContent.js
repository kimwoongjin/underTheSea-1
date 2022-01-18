import styled from "styled-components";
import React from "react";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Mypage from "./Mypage";

const Container = styled.div`
  border: 1px solid red;
  width: 55vw;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
`;

const Box = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Box1 = styled.div`
  border: 1px solid black;
  align-items: center;
  display: flex;
  width: 20%;
  height: 100%;
`;

function MypageContent({ el }) {
  const date = el.created_at.split("T")[0];
  return (
    <>
      <Container>
        <Box>{el.title}</Box>
        <Box1>{date}</Box1>
      </Container>
    </>
  );
}
export default MypageContent;
