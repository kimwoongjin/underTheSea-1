import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* top: 15%; */
  width: 25%;
  height: 390px;
  box-shadow: 5px 8px 7px 3px #c6c6c6;
  margin: 1%;
  /* background: #d1f8ff; */
  border-radius: 20px;
  /* border: 1px solid black; */
`;

const Contents = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  /* border: 1px solid green; */
  text-align: left;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  overflow: hidden;
  cursor: pointer;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* border: 1px solid black; */
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  /* opacity: 0.8; */
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 50%;
  padding: 10px;
  box-sizing: border-box;
  /* margin-top: 2%; */
  line-height: 200%;
  margin: auto;
  /* border: 1px solid black; */
`;

const Name = styled.div`
  /* position: absolute; */
  /* left: 5%; */
  border-radius: 5px;
  background: #e5e5e5;
  text-align: center;
  font-family: "Kfont";
  font-weight: bold;
  font-size: 1.3rem;
  /* border: 1px solid red; */
`;

const Size = styled.div`
  /* position: absolute; */
  /* left: 5%; */
  /* top: 33%; */
  font-family: "Kfont";
  line-height: 170%;
  font-weight: 450;
  font-size: 1.25rem;
  /* border: 1px solid red; */
`;

const Theme = styled.div`
  /* position: absolute; */
  /* left: 5%; */
  /* top: 33%; */
  font-family: "Kfont";
  line-height: 170%;
  font-weight: 450;
  font-size: 1.25rem;
  /* border: 1px solid red; */
`;

function ManageInfo({ aquaInfo }) {
  // const [aquaInfo, setAquaInfo] = useState({
  //   container_name: "",
  //   size: "",
  //   theme: "",
  // });
  return (
    <Container>
      <Contents>
        <ImgContainer>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/manage/detailinfo"
          >
            <Img src="http://localhost:80/level/11"></Img>
          </Link>
        </ImgContainer>
        <Content>
          <Name>{aquaInfo.container_name}</Name>
          <Size>사이즈: {aquaInfo.size}200L</Size>
          <Theme>테마: {aquaInfo.theme}</Theme>
        </Content>
      </Contents>
    </Container>
  );
}
export default ManageInfo;
