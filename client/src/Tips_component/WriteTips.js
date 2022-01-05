import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Header2 from "../component/Header2";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Container = styled.div`
  width: 100%;
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
  width: 70%;
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
const FormWrapper = styled.div`
  position: relative;
  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 400px;
  }
  .cke_bottom {
    border: 1px solid #108dee;
  }
`;
const Btn = styled.button`
  position: absolute;
  right: 0px;
  bottom: 20px;
  width: 100px;
  height: 40px;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 28px;
  border-style: none;
  background: #108dee;
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
        </TopCover>
        <InputContainer>
          <FormWrapper>
            <TitleInput placeholder="제목을 입력해 주세요." type="text" />
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
            <Btn>등록</Btn>
          </FormWrapper>
        </InputContainer>
      </Container>
    </>
  );
}
export default WriteTips;
