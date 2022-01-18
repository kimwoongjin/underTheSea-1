import styled from "styled-components";
import React from "react";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Mypage from "./Mypage";

const Container = styled.div`
  border: 1px solid black;
  width: 65vw;
  height: 65vh;
`;

function MypageManage() {
  return (
    <>
      <Container></Container>
    </>
  );
}
export default MypageManage;
