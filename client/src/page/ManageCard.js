import styled from "styled-components";
import React from "react";
import ManageInfo from "./ManageInfo";
import AddContainer from "../modalComponent/AddContainer";
import { useDispatch } from "react-redux";
import { addcontainerModalOnAction } from "../store/actions";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5%;
  font-family: "Kfont";
`;

const CardText = styled.div`
  display: flex;
  font-family: "Kfont";
  position: relative;
  margin: 5% 0 5%;
  font-size: 1.3rem;
`;
const CardContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
const EmptyBox = styled.div`
  width: 90%;
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
  justify-content: flex-end;
  align-items: center;
  width: 63%;
  height: 80%;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Btn = styled.button`
  width: 80px;
  height: 40px;
  background: #108dee;
  border-style: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
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
      <CardText>
        수조 추가를 클릭하여 자신만의 관리 수조를 만들어보세요.
      </CardText>
      <BtnCover>
        <Btn onClick={() => dispatch(addcontainerModalOnAction)}>수조추가</Btn>
      </BtnCover>

      <CardContainer>
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
