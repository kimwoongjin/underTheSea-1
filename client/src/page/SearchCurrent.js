import styled from "styled-components";
import React from "react";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 15%;
  width: 300px;
  height: 420px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px #adb5bd;
  margin-bottom: 7%;
  /* background: #d1f8ff; */
  perspective: 1000px;
  #box:hover {
    transform: rotateY(-180deg);
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: 1s;
  /* border: 1px solid black; */
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  width: 260px;
  height: 140px;
  text-align: left;
  line-height: 200%;
  margin: 10% 0 0 5%;
  font-family: "Kfont";
  /* box-sizing: border-box; */
  /* border: 1px solid black; */
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
const Ename = styled.div`
  font-size: 1.2rem;
  color: #828282;
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  transform: rotateY(180deg);
  position: absolute;
  backface-visibility: hidden;
  font-family: "Kfont";
  box-sizing: border-box;
  border-radius: 20px;
`;

const Contents = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  height: 93%;
  border: 1px solid black;
  margin-top: 7%;
  text-align: left;
  flex-direction: column;
`;
const NameB = styled.div`
  position: absolute;
  display: flex;
  top: 0%;
  font-weight: bold;
  font-size: 1.5rem;
`;

const NamesB = styled.div`
  top: 8%;
  position: absolute;
  font-size: 0.7rem;
  color: #828282;
`;
const Text = styled.div`
  position: absolute;
  /* left: 5%; */
  top: 20%;
  line-height: 170%;
  font-weight: bold;
`;
const Habitat = styled.div`
  /* border: 1px solid red; */
`;
const Temp = styled.div`
  /* border: 1px solid red; */
`;
const Size = styled.div`
  /* border: 1px solid red; */
`;

const Desc = styled.div`
  margin-top: 8%;
  /* border: 1px solid red; */
`;
const DescBottom = styled.div`
  margin-top: 3%;
  /* border: 1px solid red; */
  line-height: 180%;
  font-size: 0.9rem;
  text-align: justify;
`;
function SearchCurrent({ item }) {
  return (
    // <OuterContainer>
    <Container>
      <Box id="box">
        <Front>
          <ImgContainer>
            <Img src={"http://localhost:80" + item.fish_img} alt=""></Img>
          </ImgContainer>
          <Content>
            <Name>{item.fish_name}</Name>
            <Ename>{item.sci_name}</Ename>
          </Content>
        </Front>
        <Back>
          <Contents>
            <NameB>{item.fish_name}</NameB>
            <NamesB>{item.sci_name}</NamesB>
            <Text>
              <Habitat>서식지: {item.habitat}</Habitat>
              <Size>크기: {item.size}cm</Size>
              <Temp>수온: {item.temp}도</Temp>
              <Desc>
                주요특징:
                <DescBottom>{item.desc}</DescBottom>
              </Desc>
            </Text>
          </Contents>
        </Back>
      </Box>
    </Container>
    // </OuterContainer>
  );
}
export default SearchCurrent;
