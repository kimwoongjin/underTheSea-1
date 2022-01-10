import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
// 배경흰색헤더
import Header2 from "../component/Header2";
import GuideinfoCard from "../component/GuideinfoCard";
import SkimmerCard from "../component/SkimmerCard";
import SkimmerInfo from "../modalComponent/SkimmerInfo";
import SuppliesCard from "../component/SuppliesCard";
import SuppliesInfo from "../modalComponent/SuppliesInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  skimmerInfoModalOnAction,
  seaBasicInfoModalOnAction,
} from "../store/actions";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 140px;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  background-image: url("투명바다1.png");
  /* background-image: url("투명바다2.png"); */
  /* background-image: url("투명바다3.png"); */
  .sub {
    margin-top: 5px;
    font-size: 1.25rem;
    font-weight: normal;
  }
`;

const InfoContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* border: 2px dashed red; */
`;

function SeaWaterGuide() {
  // isSkimmerModal: false,
  // isSeaBasicInfoModal: false,
  const state = useSelector((state) => state.modalReducer);
  const { isSkimmerModal, isSeaBasicInfoModal } = state;
  // const dispatch = useDispatch();

  useEffect(() => {
    console.log("스키머 모달", isSkimmerModal);
  }, []);
  return (
    <>
      <Container>
        <Header2 />
        <Title>
          Saltwater Fish Guide
          <div className="sub">해수어는 어떻게 시작할까?</div>
        </Title>
        <InfoContainer>
          {/* 여따가 디스패치 걸어서 리덕스로 모듈 띄워야함 */}
          <SkimmerCard />
          <SuppliesCard></SuppliesCard>
          <GuideinfoCard></GuideinfoCard>
          <GuideinfoCard></GuideinfoCard>
          <GuideinfoCard></GuideinfoCard>
          <GuideinfoCard></GuideinfoCard>
        </InfoContainer>
        {isSkimmerModal && <SkimmerInfo />}
        {isSeaBasicInfoModal && <SuppliesInfo />}
      </Container>
    </>
  );
}
export default SeaWaterGuide;
