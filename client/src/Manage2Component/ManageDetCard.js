import React from "react";
import styled from "styled-components";
import ManageDetInfo from "./ManageDetInfo";

//manage 페이지의 전체 컨테이너 MangeDetCard > ManageInfo
//후에 컴포넌트 이동

const Container = styled.div`
  /* border: 1px solid black; */
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10%;
`;
const CardTitle = styled.div`
  border: 1px solid black;
  text-align: center;
  /* z-index: 999; */
  width: 30vw;
  height: 7vh;
  font-size: 2rem;
`;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* margin-top: 4%; */
`;
function ManageDetCard({ conInfo }) {
  return (
    <Container>
      <CardContainer>
        <ManageDetInfo conInfo={conInfo} />
      </CardContainer>
    </Container>
  );
}
export default ManageDetCard;
