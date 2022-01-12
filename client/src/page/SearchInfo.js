import styled from "styled-components";
import React from "react";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 15%;
  width: 300px;
  height: 420px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px #adb5bd;
  margin-bottom: 7%;
  background: #d1f8ff;
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
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: 1s;
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  transform: rotateY(180deg);
  position: absolute;
  backface-visibility: hidden;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 20px;
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
  /* box-sizing: border-box; */
  /* border: 1px solid black; */
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
const Ename = styled.div`
  font-size: 1.5rem;
  color: #828282;
`;
const Contents = styled.div`
  position: relative;
  width: 100%;
  height: 93%;
  border: 1px solid black;
  margin-top: 7%;
  text-align: left;
`;
const NameB = styled.div`
  position: absolute;
  left: 5%;
  font-weight: bold;
  font-size: 1.5rem;
`;

const NamesB = styled.div`
  position: absolute;
  top: 8%;
  left: 5%;
  font-size: 0.7rem;
  color: #828282;
`;
const Text = styled.div`
  position: absolute;
  left: 5%;
  top: 20%;
  line-height: 170%;
  font-weight: bold;
`;
const Habitat = styled.div`
  border: 1px solid red;
`;
const Temp = styled.div`
  border: 1px solid red;
`;
const Size = styled.div`
  border: 1px solid red;
`;

const Desc = styled.div`
  border: 1px solid red;
`;
function SearchInfo() {
  return (
    // <OuterContainer>
    <Container>
      <Box id="box">
        <Front>
          <ImgContainer>
            <Img src="placeholder-300x300.jpg"></Img>
          </ImgContainer>
          <Content>
            <Name>라스보라 헤테로몰파</Name>
            <Ename>Rasbora heteromorpha</Ename>
          </Content>
        </Front>
        <Back>
          <Contents>
            <NameB>라스보라 헤테로몰파</NameB>
            <NamesB>Rasbora heteromorpha</NamesB>
            <Text>
              <Habitat>서식지</Habitat>
              <Size>크기</Size>
              <Temp>수온</Temp>
              <Desc>
                주요특징:
                <br />
                원산지는 중남미이며 수명은 1-2년으로 최대 7.5센티까지 자란다.
                화려한 색상과 작은 크기로 인기가 많은 물고기이다. 여러물고기와
                군영을 이루는 습성이 있으며 성격이 온순하여
              </Desc>
            </Text>
          </Contents>
        </Back>
      </Box>
    </Container>
    // </OuterContainer>
  );
}
export default SearchInfo;
