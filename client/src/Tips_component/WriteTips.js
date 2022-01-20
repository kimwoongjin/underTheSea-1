import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header2 from "../component/Header2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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
  margin-top: 5%;
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
  font-family: "Kfont";
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
  font-family: "Kfont";
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
  font-family: "Kfont";
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
//
const ImageInputForm = styled.label`
  display: flex;
  top: 60%;
  width: 40%;
  height: 25vh;
  position: absolute;
  bottom: 10%;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  border: 1px dashed #108dee;
  box-sizing: border-box;
  justify-content: center;
`;
//
const ImageInput = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const TipInput = styled.textarea`
  position: absolute;
  top: 25%;
  width: 90%;
  height: 30%;
  padding: 10px;
  border: none;
  font-family: "Kfont";
  font-size: 1rem;
  /* margin-bottom: 10px; */
  padding: 0 0 1% 3%;
  border-bottom: 1px solid #108dee;
`;

const ButtonForm = styled.div`
  width: 70%;
  /* margin-top: 80px; */
  display: flex;
  justify-content: flex-end;
  /* border: 1px dashed darkcyan; */
`;

const Btn = styled.button`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  align-items: center;
  margin: 0 5px;
  color: white;
  font-family: "Kfont";
  font-size: 1.25rem;
  font-weight: bold;
  border-style: none;
  border-radius: 4px;
  margin-right: 0;
  background: #108dee;
  text-align: center;
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
`;
const BtnR = styled.button`
  width: 15%;
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
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
`;

// ================================================================================

function WriteTips() {
  const accessToken = localStorage.getItem("accessToken");
  const edit_tip = localStorage.getItem("edit_tip");
  const tip_id = localStorage.getItem("tip_id");
  const navigate = useNavigate();
  const [tip, setTip] = useState({
    title: "",
    content: "",
    img: "",
  });
  const [image, setImage] = useState("");
  const [isEdit, setIsEdit] = useState(edit_tip);

  // 수정버튼을 누르고 들어왔을 때
  useEffect(() => {
    getTipData();
  }, []);

  const getTipData = () => {
    if (isEdit === "true") {
      axios
        .get(`http://localhost:80/tip/${tip_id}`, {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log("res데이타", res.data);
          const { data: tip_data } = res.data;
          console.log("팁데이타", tip_data);
          setTip({
            ...tip_data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  // 이미지 파일 선택
  const selectFIle = async (e) => {
    const file = e.target.files[0];
    const result = await postImage(file);
    console.log(result.data.imagePath);
    setTip({
      ...tip,
      img: result.data.imagePath,
    });
  };

  // 이미지 파일 저장
  const postImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const result = await axios.post("http://localhost:80/images", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return result;
  };

  // 게시물 등록
  const handleAddTip = async () => {
    if (!accessToken) {
      console.log("null");
      return;
    }
    if (!tip.title) {
      console.log("invalid title");
      alert("제목을 입력해주세요");
      return;
    }
    const result = await axios.post(
      "http://localhost:80/tip",
      { data: tip },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const tip_id = result.data.data.id;
    navigate(`/posttips/${tip_id}`);
  };

  // 게시물 등록 취소
  const handleCancle = () => {
    setTip({
      ...tip,
      title: "",
      content: "",
      img: "",
    });
    console.log("팁초기화됨?", tip);
    setImage("");
    localStorage.setItem("edit_tip", false);
    navigate(-1);
  };

  // 텍스트 입력
  const handleInputValue = (e) => {
    setTip({
      ...tip,
      [e.target.name]: e.target.value,
    });
  };

  // 게시물 수정
  const handleEditTip = () => {
    axios
      .patch(
        `http://localhost:80/tip/${tip_id}`,
        { data: tip },
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.setItem("edit_tip", false);
        navigate(`/posttips/${tip_id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header2></Header2>
      <Container>
        <TopCover>
          <TitleContainer>
            <Title>Write tip</Title>
            {/* <Starfish src="불가사리.png" /> */}
          </TitleContainer>
          <SubTitle>나누고 싶은 경험을 적어주세요!</SubTitle>
        </TopCover>
        {/* ========================================================== */}
        <ButtonForm>
          {isEdit === "true" ? (
            <Btn onClick={handleEditTip}>수정</Btn>
          ) : (
            <Btn onClick={handleAddTip}>등록</Btn>
          )}
          <BtnR onClick={handleCancle}>취소</BtnR>
        </ButtonForm>
        <InputContainer>
          <FormWrapper>
            {isEdit === "true" ? (
              <>
                <TitleInput
                  placeholder="제목을 입력해 주세요."
                  type="text"
                  name="title"
                  onChange={handleInputValue}
                  value={tip.title}
                />
                <TipInput
                  placeholder="내용을 입력하세요"
                  type="text"
                  name="content"
                  onChange={handleInputValue}
                  value={tip.content}
                />
              </>
            ) : (
              <>
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
              </>
            )}
            {tip.img ? (
              <>
                <ImageInputForm
                  for="input-image"
                  style={{ borderStyle: "none" }}
                >
                  {/* {tip.img ? ( */}
                  <img
                    id="select-img"
                    src={`http://localhost:80${tip.img}`}
                    style={{
                      objectFit: "cover",
                      // width: "100%",
                      // height: "100%",
                    }}
                  ></img>
                  {/* ) : (
                <></>
              )} */}
                </ImageInputForm>
              </>
            ) : (
              <>
                <ImageInputForm for="input-image">
                  {/* {tip.img ? (
                <img
                  id="select-img"
                  src={`http://localhost:80${tip.img}`}
                  style={{
                    objectFit: "cover",
                    // width: "100%",
                    // height: "100%",
                  }}
                ></img>
              ) : ( */}
                  <></>
                  {/* )} */}
                </ImageInputForm>
              </>
            )}
            <ImageInput id="input-image" onChange={selectFIle} type="file" />
          </FormWrapper>
        </InputContainer>
      </Container>
    </>
  );
}
export default WriteTips;
