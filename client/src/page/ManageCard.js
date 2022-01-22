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
  padding-top: 10%;
`;

const CardText = styled.div`
  border: 1px solid black;
`;
const CardContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10%;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const EmptyBox = styled.div`
  width: 100%;
  height: 40vh;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img``;

const Text = styled.div`
  font-family: "Kfont";
  font-weight: bold;
  font-size: 1.25rem;
`;

const BtnCover = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 100%;
  height: 150px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
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
function ManageCard({ containerList, isAddContainerModal, handleCondata }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <CardText></CardText>
      <BtnCover>
        <Btn onClick={() => dispatch(addcontainerModalOnAction)}>수조추가</Btn>
      </BtnCover>

      <CardContainer>
        {/* <Btn></Btn> */}
        {containerList.length !== 0 ? (
          containerList.map((container, idx) => {
            return (
              <ManageInfo
                id={container.id}
                key={idx}
                name={container.container_name}
                size={container.size}
                theme={container.theme}
                level={container.level}
                handleCondata={handleCondata}
              ></ManageInfo>
            );
          })
        ) : (
          <EmptyBox>
            <Img src="https://iconmage.s3.ap-northeast-2.amazonaws.com/빈박스.png" />
            <Text>수조를 등록해주세요!</Text>
          </EmptyBox>
        )}
      </CardContainer>
      {isAddContainerModal && <AddContainer />}
    </Container>
  );
}
export default ManageCard;
