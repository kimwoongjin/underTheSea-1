import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../component/Header";
import Header2 from "../component/Header2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
  margin-top: 60px;
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

const InputContainer = styled.div`
  width: 90%;
  height: 100%;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 10%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #108dee;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ImageInputForm = styled.label`
  width: 50%;
  height: 50%;
  padding: 10px;
  border: 1px dashed #108dee;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const ImageInput = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const TipInput = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #108dee;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 10px;
`;

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  /* border: 1px solid red; */
`;

const ButtonForm = styled.div`
  display: flex;
  justify-content: flex-end;
  /* border: 1px solid black; */
`;

const Btn = styled.button`
  width: 5%;
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
`;

function WriteTips() {
  const navigate = useNavigate();
  const [tip, setTip] = useState({
    title: "",
    content: "",
    img: "",
  });
  const [image, setImage] = useState("");

  const selectFIle = async (e) => {
    const file = e.target.files[0];
    const result = await postImage(file);
    console.log(result.data.imagePath);
    setImage("http://localhost:8080" + result.data.imagePath);
    setTip({
      ...tip,
      img: image,
    });
  };

  const postImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const result = await axios.post("http://localhost:8080/images", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return result;
  };

  const handleAddTip = async () => {
    const result = await axios.post(
      "http://localhost:8080/tip",
      { data: tip }
      // {
      //   headers: { Authorization: `Bearer ${accessToken}` },
      // }
    );
    const tip_id = result.data.id;
    navigate(`/tip/${tip_id}`);
  };

  const handleCancle = () => {
    setTip({});
    setImage("");
  };

  const handleInputValue = (e) => {
    setTip({
      ...tip,
      [e.target.name]: e.target.value,
    });
  };

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
        </TopCover>
        <InputContainer>
          <FormWrapper>
            <ButtonForm>
              <Btn onClick={handleAddTip}>등록</Btn>
              <Btn>취소</Btn>
            </ButtonForm>
            <TitleInput
              placeholder="제목을 입력해 주세요."
              type="text"
              name="title"
              onChange={handleInputValue}
            />
            <TipInput
              placeholder="내용을 입력하세요"
              type="text"
              name="content"
              onChange={handleInputValue}
            />
            <ImageInputForm for="input-image">
              <img id="select-img" src={image} style={{ width: "20%" }}></img>
            </ImageInputForm>
            <ImageInput id="input-image" onChange={selectFIle} type="file" />
          </FormWrapper>
        </InputContainer>
      </Container>
    </>
  );
}
export default WriteTips;
