import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ManageInfo from "./ManageInfo";
import ManageAdd from "./ManageAdd";
import axios from "axios";

const Container = styled.div`
  border: 1px solid black;
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
function ManageCard({ aquaInfo, containerList }) {
  //   data:
  // data: Array(11)
  // 0: {id: 1, user_id: 1, container_name: 'WOW', size: 100, theme: 'N/A', …}
  // 1: {id: 2, user_id: 1, container_name: '등록!', size: 216, theme: '산호수조', …}
  // 2: {id: 3, user_id: 1, container_name: '예쁜수족관', size: 0, theme: 'FO', …}
  // 3: {id: 4, user_id: 1, container_name: '400', size: 91, theme: 'FO', …}
  // 4: {id: 5, user_id: 1, container_name: '김수조', size: 0, theme: '고정구피항', …}
  // 5: {id: 6, user_id: 1, container_name: '최수정', size: 0, theme: '태조왕건', …}
  // 6: {id: 7, user_id: 1, container_name: '물속마을', size: 0, theme: 'LPS산호어항', …}
  // 7: {id: 8, user_id: 1, container_name: '푸른색수족관', size: 0, theme: '신라', …}
  // 8: {id: 9, user_id: 1, container_name: '몇번째냐', size: 0, theme: '백제', …}

  return (
    <Container>
      <CardContainer>
        {containerList.map((container, idx) => {
          return (
            <ManageInfo
              id={container.id}
              key={idx}
              name={container.container_name}
              size={container.size}
              theme={container.theme}
            ></ManageInfo>
          );
        })}
        <ManageAdd />
        {/* <ManageAdd /> */}
        {/* <ManageAdd /> */}
        {/* <ManageAdd /> */}
      </CardContainer>
    </Container>
  );
}
export default ManageCard;
