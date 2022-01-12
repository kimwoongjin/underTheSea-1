import React from "react";
import styled from "styled-components";

import Header2 from "../component/Header2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TopCover = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* border-bottom: 2px solid #808080; */
  flex-direction: column;
  /* background-image: url("투명바다1.png"); */
`;

const TitleContainer = styled.div`
  width: 8%;
  display: flex;
  /* border: 1px solid green; */
  position: relative;
`;
const Starfish = styled.img`
  position: absolute;
  right: -40px;
  bottom: 20px;
  width: 50%;
  height: 50%;
`;
const Title = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 40px;
  padding-bottom: 5px;
  box-sizing: border-box;
  border-bottom: 5px solid #108dee;
`;
const SubTitle = styled.div`
  margin-top: 15px;
  color: #808080;
  font-size: 1.25rem;
  margin-bottom: 50px;
  /* border: 1px solid red; */
`;
// ------------------------------------------------------

const InputContainer = styled.div`
  width: 90%;
  height: 120vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
  top: 0%;
`;

const FormWrapper = styled.div`
  /* top: 6%; */
  position: relative;
  display: flex;
  height: 100%;
  width: 90%;
  flex-direction: column;
  /* border: 1px solid red; */
  align-items: center;
`;

const TitleInput = styled.input`
  top: 10%;
  width: 90%;
  height: 10%;
  padding: 0 0 1% 3%;
  border: none;
  align-items: center;
  position: absolute;
  border-bottom: 1px solid #108dee;
  display: inline-block;
  /* box-sizing: border-box; */
  /* border: 1px solid #108dee; */
  /* border-radius: 4px; */
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
const TipInput = styled.textarea`
  position: absolute;
  top: 25%;
  width: 90%;
  height: 30%;
  padding: 10px;
  border: none;
  font-size: 1rem;
  /* margin-bottom: 10px; */
  padding: 0 0 1% 3%;
  border-bottom: 1px solid #108dee;
`;

const ImgContainer = styled.label`
  top: 60%;
  width: 93%;
  height: 25vh;
  position: absolute;
  border: 1px solid black;
  bottom: 10%;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  border: 1px dashed #108dee;
  .input {
    padding: 6px 25px;
    background-color: #ff6600;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
`;

const ImageInput = styled.input``;

const ButtonForm = styled.div`
  width: 15%;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  /* border: 1px solid black; */
  position: absolute;
  right: 13%;
  top: 120%;
`;

const Btn = styled.button`
  width: 40%;
  height: 30px;
  box-sizing: border-box;
  align-items: center;
  margin: 0 5px;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  border-style: none;
  border-radius: 4px;
  margin-right: 0;
  background: #108dee;
  text-align: center;
`;
const BtnR = styled.button`
  width: 40%;
  height: 30px;
  box-sizing: border-box;
  align-items: center;
  margin: 0 5px;
  color: black;
  font-size: 1.25rem;
  font-weight: bold;
  border-style: none;
  border-radius: 4px;
  margin-right: 0;
  text-align: center;
`;
function WriteTips() {
  return (
    <>
      <Header2></Header2>
      <Container>
        <TopCover>
          <TitleContainer>
            <Title>Write tip</Title>
            <Starfish src="불가사리.png" />
          </TitleContainer>
          <SubTitle>나누고 싶은 경험을 적어주세요!</SubTitle>
          {/* <Swarm src="무리.png" /> */}
          <ButtonForm>
            <Btn>등록</Btn>
            <BtnR>취소</BtnR>
          </ButtonForm>
        </TopCover>
        {/* ========================================================== */}
        <InputContainer>
          <FormWrapper>
            <TitleInput placeholder="제목을 입력해 주세요." type="text" />
            <TipInput placeholder="내용을 입력하세요" type="text" />
            <ImgContainer className="input" for="input-file">
              <ImageInput type="file" style={{ display: "none" }} />
              {/* <FontAwesomeIcon size="4x" icon={faPlus} /> */}
            </ImgContainer>
          </FormWrapper>
        </InputContainer>
      </Container>
    </>
  );
}
export default WriteTips;
