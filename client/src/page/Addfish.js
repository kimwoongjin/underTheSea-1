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
  const Navigate = useNavigate();
  const [skimmerModal, setSkimmerModal] = useState(false);
  const [suppliesModal, setSuppliesModal] = useState(false);
  const handleSkimmerModal = () => {
    setSkimmerModal(true);
  };
  const handleSuppliesModal = () => {
    setSuppliesModal(true);
  };
  const skimmerCancel = () => {
    setSkimmerModal(false);
  };
  const suppliesCancel = () => {
    setSuppliesModal(false);
  };
  return (
    <>
      <Container>hello</Container>
    </>
  );
}
export default SeaWaterGuide;