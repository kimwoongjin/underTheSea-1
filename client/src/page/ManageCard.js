import styled from "styled-components";
import React from "react";
import ManageInfo from "./ManageInfo";

const Container = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CardContainer = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 12%;
`;

function ManageCard() {
  return (
    <Container>
      <CardContainer>
        <ManageInfo />
        <ManageInfo />
        <ManageInfo />
        <ManageInfo />
        <ManageInfo />
        <ManageInfo />
      </CardContainer>
    </Container>
  );
}
export default ManageCard;
