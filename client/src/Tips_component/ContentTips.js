import React, { memo } from "react";
import styled from "styled-components";

const PostTitle = styled.div`
  width: 95%;
  font-size: 2rem;
  margin-top: 20px;
  /* border: 1px solid red; */
  font-weight: bold;
`;

const WriterCover = styled.div`
  width: 95%;
  margin-top: 10px;
  display: flex;
  border-bottom: 4px solid #108dee;
  /* border: 1px solid red; */
`;

const WriterIcon = styled.div`
  width: 3.5%;
  border-radius: 50px;
  border: 1px solid gray;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const WriterInfo = styled.div`
  width: 90%;
  /* border: 1px solid red; */
  display: column;
  margin-bottom: 10px;
  margin-left: 5px;
`;
const Writer = styled.div`
  width: 100%;
  color: #808080;
  font-size: 1rem;
  /* border: 1px solid red; */
`;

const Date = styled.div`
  width: 100%;
  color: #808080;
  font-size: 0.8rem;
  /* border: 1px solid red; */
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 300px;
  padding-bottom: 20px;
  margin-top: 20px;
  border-bottom: 4px solid #108dee;
  white-space: normal;
  align-items: center;
`;

const ContentBox = styled.div`
  width: 90%;
  box-sizing: border-box;
`;

function ContentTips({ tipData }) {
  // console.log(typeof tipData.createdAt);
  let date, time;
  if (tipData.createdAt) {
    date = tipData.createdAt.split("T")[0];
    time = tipData.createdAt.split("T")[1].split(".")[0];
  }
  // const
  // const date = tip.created_at.split("T")[0];
  return (
    <>
      <PostTitle>{tipData.title}</PostTitle>
      <WriterCover>
        <WriterIcon>:)</WriterIcon>
        <WriterInfo>
          <Writer>{tipData.user_name}</Writer>
          <Date>
            {date}&nbsp;
            {time}
          </Date>
        </WriterInfo>
      </WriterCover>
      <Content>
        {tipData.img ? (
          <img
            src={`http://localhost:80${tipData.img}`}
            style={{ width: "300px", height: "250px" }}
          ></img>
        ) : (
          <></>
        )}
        <ContentBox>{tipData.content}</ContentBox>
      </Content>
    </>
  );
}
export default memo(ContentTips);
