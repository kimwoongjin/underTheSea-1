import styled from "styled-components";
import React from "react";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 5%;
  width: 300px;
  height: 420px;
  margin-bottom: 7%;
  perspective: 1000px;

  #box:hover {
    transform: rotateY(-180deg);
  }
  @media screen and (max-width: 480px) {
    width: 180px;
    height: 240px;
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
  box-shadow: 0px 0px 20px #adb5bd;
  border-radius: 20px;
  transform: rotateY(0deg);
  transition: 1.5s;
  /* border: 1px solid black; */

  @media screen and (max-width: 480px) {
    border-radius: 10px;
  }
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

  @media screen and (max-width: 480px) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 180px;
  }
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

  @media screen and (max-width: 480px) {
    padding-left: 5%;
    margin: 3% 0 0 3%;
    width: 160px;
    height: 50px;
  }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    width: 90%;
    height: 50%;
    /* border: 1px solid black; */
  }
`;

const Ename = styled.div`
  font-size: 1.2rem;
  color: #828282;
  font-style: italic;
  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
    width: 100%;
    position: relative;
    bottom: 15%;
  }
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
  padding: 10px;

  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`;

const Contents = styled.div`
  width: 90%;
  height: 93%;
  /* border: 1px solid black; */
  text-align: left;
  flex-direction: column;
  display: flex;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 5%;

  @media screen and (max-width: 480px) {
    overflow: hidden visible;
  }
`;

const NameB = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  /* margin-bottom: 130%; */
  font-weight: bold;
  font-size: 1.5rem;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const NamesB = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 12%;
  font-size: 0.8rem;
  color: #828282;
  text-align: center;
  font-style: italic;

  @media screen and (max-width: 480px) {
    margin-top: 10%;
    font-size: 0.6rem;
    width: 100%;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 20%;
  line-height: 170%;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-weight: 500;
    top: 20%;
    line-height: 90%;
  }
`;
const Habitat = styled.div`
  /* border: 1px solid red; */

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;
const Temp = styled.div`
  /* border: 1px solid red; */

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;
const Size = styled.div`
  /* border: 1px solid red; */

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

const Desc = styled.div`
  margin-top: 8%;
  /* border: 1px solid red; */

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;
const DescBottom = styled.div`
  margin-top: 3%;
  /* border: 1px solid red; */
  line-height: 180%;
  font-size: 0.9rem;
  text-align: justify;

  @media screen and (max-width: 480px) {
    line-height: 150%;
    font-size: 0.5rem;
  }
`;
function SearchInfo({ filteredFish }) {
  // console.log(filteredFish, "ㅅㅓ치입니다");

  return (
    <Container key={filteredFish.id}>
      <Box id="box">
        <Front>
          <ImgContainer>
            <Img
              src={
                `${process.env.REACT_APP_SERVER_API}` + filteredFish.fish_img
              }
            ></Img>
          </ImgContainer>
          <Content>
            <Name>{filteredFish.fish_name}</Name>
            <Ename>{filteredFish.sci_name}</Ename>
          </Content>
        </Front>
        <Back>
          <Contents>
            <NameB>{filteredFish.fish_name}</NameB>
            <NamesB>{filteredFish.sci_name}</NamesB>
            <Text>
              <Habitat>서식지: {filteredFish.habitat} </Habitat>
              <Size>크기:{filteredFish.size} </Size>
              <Temp>수온:{filteredFish.temp} </Temp>
              <Desc>
                주요특징:
                <br />
                <DescBottom>{filteredFish.desc}</DescBottom>
              </Desc>
            </Text>
          </Contents>
        </Back>
      </Box>
    </Container>
  );
}

export default SearchInfo;
