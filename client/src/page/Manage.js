import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Header2 from "../component/Header2";
import ManageCard from "./ManageCard";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import AddContainer from "../modalComponent/AddContainer";

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 40vh;
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  line-height: 180%;
  color: #008eff;
`;

const Text = styled.div`
  position: absolute;
  top: 65%;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
  line-height: 180%;
`;

const Img = styled.img`
  position: absolute;
  top: 33%;
  right: 34%;
  width: 7%;
  height: 43%;
`;

const OuterContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 170%;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
//주간 피딩 14번 , 주간 환수 1번
function Manage({ getAllConInfo, getConInfo }) {
  const [containerList, setContainerList] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const state = useSelector((state) => state.modalReducer);
  const { isAddContainerModal } = state;

  useEffect(() => {
    axios
      .get(`http://localhost:80/container/all`, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setContainerList([...res.data.data]);
      });
  }, []);
  return (
    <>
      <Header2 />
      <TitleContainer>
        <Title>My Aquarium</Title>
        <Text>당신의 어항을 관리해보세요!</Text>
        <Img src="작은해초.png" alt="" />
      </TitleContainer>
      {/* <ManageCard /> */}
      {/* <ManageCard containerList={con_list.data.data} /> */}
      {/* <ManageCard containerList={con_list.data.data} getConInfo={getConInfo} /> */}
      <ManageCard
        containerList={containerList}
        getConInfo={getConInfo}
        isAddContainerModal={isAddContainerModal}
      />
      {/* {isAddContainerModal && <AddContainer />} */}
    </>
  );
}
export default Manage;
