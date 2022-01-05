import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 15%;
  width: 300px;
  height: 390px;
  box-shadow: 5px 8px 7px 3px #c6c6c6;
  margin-bottom: 9%;
  background: #d1f8ff;
  /* border: 1px solid black; */
`;

const Contents = styled.div`
  position: relative;
  width: 100%;
  height: 93%;
  /* border: 1px solid black; */
  text-align: left;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  cursor: pointer;
  /* border: 1px solid black; */
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;
const Content = styled.div`
  position: relative;
  width: 260px;
  height: 140px;
  text-align: left;
  line-height: 200%;
  margin: 5% 0 0 5%;
  /* border: 1px solid black; */
`;

const Name = styled.div`
  position: absolute;
  left: 5%;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Text = styled.div`
  position: absolute;
  left: 5%;
  top: 33%;
  line-height: 170%;
  font-weight: 450;
`;
function ManageInfo() {
  return (
    <Container>
      <Contents>
        <ImgContainer>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/manage/detailinfo"
          >
            <Img src="관리어항.png"></Img>
          </Link>
        </ImgContainer>
        <Content>
          <Name>누구누구의 어항</Name>
          <Text>
            물고기 수 :<br></br> 사이즈 <br></br> 테마
          </Text>
        </Content>
      </Contents>
    </Container>
  );
}
export default ManageInfo;
