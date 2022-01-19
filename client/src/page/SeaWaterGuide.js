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
import { useSelector } from "react-redux";
import Footer from "../component/Footer";
import FilterMediaCard from "../component/FilterMediaCard";
import FilterMediaInfo from "../modalComponent/FilterMediaInfo";
import ActivationCard from "../component/ActivationCard";
import ActivationInfo from "../modalComponent/ActivationInfo";
import RecommendCard from "../component/RecommendCard";
import RecommendInfo from "../modalComponent/RecommendInfo";
import WSDCard from "../component/WSDCard";
import WSDInfo from "../modalComponent/WSDInfo";

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
  font-family: "Kfont";
  /* margin-bottom: 140px; */
  /* border: 1px solid red; */
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  background-image: url("https://iconmage.s3.ap-northeast-2.amazonaws.com/투명바다1.png");
  /* background-image: url("투명바다2.png"); */
  /* background-image: url("투명바다3.png"); */
  .sub {
    margin-top: 5px;
    font-size: 1.25rem;
    font-weight: normal;
    font-family: "Kfont";
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 70%;
  height: 20vh;
  /* border: 1px solid blue; */
`;

const Select = styled.select`
  width: 160px;
  height: 40px;
  position: absolute;
  border-radius: 4px;
  left: 0;
  bottom: 15%;
  border: 2px solid #108dee;

  /* -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
`;
const Option = styled.option`
  background: black;
  /* color: red; */
  /* border: 2px solid #108dee; */
`;

const InfoContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;
  /* border: 2px dashed red; */
`;

function SeaWaterGuide() {
  const state = useSelector((state) => state.modalReducer);
  const {
    isSkimmerModal,
    isSeaBasicInfoModal,
    isFilterMediaModal,
    isActivationModal,
    isRecommendModal,
    isWSDInfoModal,
  } = state;

  const [cardTag, setCardTag] = useState({
    tag: "all",
  });

  const handleInputValue = (e) => {
    setCardTag({
      ...cardTag,
      tag: e.target.value,
    });
  };

  return (
    <>
      <Container>
        <Header2 />
        <Title>
          Saltwater Fish Guide
          <div className="sub">해수어는 어떻게 시작할까?</div>
        </Title>
        <SearchContainer>
          <Select name="카테고리" onChange={handleInputValue}>
            <Option value="all">전체보기</Option>
            <Option value="basic">기본정보</Option>
            <Option value="equipment">용품정보</Option>
            <Option value="disease">질병정보</Option>
          </Select>
        </SearchContainer>
        <InfoContainer>
          {cardTag.tag === "all" && <SuppliesCard />}
          {cardTag.tag === "all" && <ActivationCard />}
          {cardTag.tag === "all" && <RecommendCard />}
          {cardTag.tag === "all" && <SkimmerCard />}
          {cardTag.tag === "all" && <FilterMediaCard />}
          {cardTag.tag === "all" && <WSDCard />}
          {cardTag.tag === "basic" && <SuppliesCard />}
          {cardTag.tag === "basic" && <ActivationCard />}
          {cardTag.tag === "basic" && <RecommendCard />}
          {cardTag.tag === "equipment" && <SkimmerCard />}
          {cardTag.tag === "equipment" && <FilterMediaCard />}
          {cardTag.tag === "disease" && <WSDCard />}
        </InfoContainer>
        {isSkimmerModal && <SkimmerInfo />}
        {isSeaBasicInfoModal && <SuppliesInfo />}
        {isFilterMediaModal && <FilterMediaInfo />}
        {isActivationModal && <ActivationInfo />}
        {isRecommendModal && <RecommendInfo />}
        {isWSDInfoModal && <WSDInfo />}
      </Container>
      <Footer />
    </>
  );
}
export default SeaWaterGuide;
