import styled from "styled-components";
import React, { useEffect } from "react";
import ManageInfo from "./ManageInfo";
import ManageAdd from "./ManageAdd";
import axios from "axios";

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
  margin-top: 8%;
`;
// 이 페이지가 딱 켜지면 수조 정보 조회 요청을 딱 보내야함
// data: {id: 3, user_id: 1, container_name: '예쁜수족관', size: '20', theme: 'FO', …}
// message: "Container is successfully added"
function ManageCard({ aquaInfo }) {
  useEffect(() => {
    // 여기서 수조정보 조회
    console.log("정보떳냐", aquaInfo);
    axios.get(`http://localhost:80/container/all`).then();
  }, []);
  return (
    <Container>
      <CardContainer>
        <ManageInfo aquaInfo={aquaInfo} />
        <ManageAdd />
        <ManageAdd />
        <ManageAdd />
        <ManageAdd />
      </CardContainer>
    </Container>
  );
}
export default ManageCard;
