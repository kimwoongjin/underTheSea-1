import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ManageInfo from "./ManageInfo";
import ManageAdd from "./ManageAdd";
import axios from "axios";
import AddContainer from "../modalComponent/AddContainer";
import { useSelector, useDispatch } from "react-redux";
import { addcontainerModalOnAction } from "../store/actions";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CardContainer = styled.div`
  /* border: 1px solid black; */
  width: 60%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-between; */
  margin-bottom: 10%;
`;
const TitleCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  line-height: 180%;
  color: #008eff;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
  line-height: 180%;
`;

const BtnCover = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 100%;
  height: 150px;
  /* border: 1px solid red; */
`;

const Btn = styled.button`
  width: 120px;
  height: 50px;
  background: #108dee;
  border-style: none;
  color: white;
  font-size: 1.25rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  :hover::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
  }
`;

// 이 페이지가 딱 켜지면 수조 정보 조회 요청을 딱 보내야함
// data: {id: 3, user_id: 1, container_name: '예쁜수족관', size: '20', theme: 'FO', …}
// message: "Container is successfully added"
function ManageCard({ containerList, getConInfo, isAddContainerModal }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <BtnCover>
        <Btn onClick={() => dispatch(addcontainerModalOnAction)}>수조추가</Btn>
      </BtnCover>

      <CardContainer>
        {/* <Btn></Btn> */}
        {containerList.map((container, idx) => {
          return (
            <ManageInfo
              id={container.id}
              key={idx}
              name={container.container_name}
              size={container.size}
              theme={container.theme}
              level={container.level}
              getConInfo={getConInfo}
            ></ManageInfo>
          );
        })}
        {/* <ManageAdd /> */}
        {/* <ManageAdd /> */}
        {/* <ManageAdd /> */}
        {/* <ManageAdd /> */}
      </CardContainer>
      {isAddContainerModal && <AddContainer />}
    </Container>
  );
}
export default ManageCard;
