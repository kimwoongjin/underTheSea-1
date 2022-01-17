import React, { useState, memo } from "react";
import styled from "styled-components";

const CommentForm = styled.div`
  position: relative;
  width: 95%;
  height: 100%;
  display: column;
  margin-bottom: 2px;
  /* border: 1px solid red; */
  justify-content: center;
`;

const SmallCommentForm = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 94%;
  margin: 0;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 0;
  border-bottom: 1px solid gray;
`;

const Comment = styled.div`
  width: 100%;
  height: 95%;
  display: column;
  padding: 0;
  margin-top: 2px;
  /* margin-left: 20px; */
  /* border: 1px dashed black; */
`;

const CommentWriter = styled.div`
  font-weight: 900;
  font-size: 1rem;
  width: 90%;
  height: 30%;
  /* border: 1px solid red; */
  margin-top: 0.5px;
`;

const CommentContent = styled.div`
  width: 90%;
  height: 20%;
  font-size: 0.9rem;
  /* border: 1px solid black; */
  margin-top: 0.5px;
  margin-bottom: 10px;
`;

const CommnetDate = styled.div`
  width: 90%;
  height: 10%;
  font-size: 0.8rem;
  color: #808080;
  /* border: 1px solid black; */
  margin-top: 0.5px;
`;

const CommentDeleteBtn = styled.button`
  bottom: 8px;
  right: -20px;
  width: 80px;
  height: 30px;
  color: gray;
  /* font-size: 1.25rem; */
  /* font-weight: bold; */
  border-style: none;
  background: none;
  margin-left: 15px;
  cursor: pointer;
  /* margin-right: 0; */
`;

const CommentInputContainer = styled.form`
  position: relative;
  width: 95%;
  height: 95%;
  /* pading: 10px */
  border: 1px solid #108dee;
  border-radius: 4px;
  margin-top: 15px;
  margin-bottom: 10px;
  display: column;
  justify-content: center;
  align-items: center;
`;
const AddCommentForm = styled.div`
  font-weight: 900;
  width: 90%;
  height: 30%;
  /* border: 1px solid red; */
  margin-top: 10px;
  margin-left: 10px;
`;
const CommentInput = styled.input`
  width: 95%;
  height: 20px;
  margin-left: 9px;
  margin-top: 10px;
  border-style: none;
  border-bottom: 1px solid #108dee;
  /* border: 1px solid red; */
`;

const AddcommentBtn = styled.button`
  position: relative;
  bottom: 8px;
  right: -20px;
  width: 80px;
  height: 30px;
  color: #108dee;
  font-size: 1.2rem;
  border-radius: 4px;
  margin-left: 88%;
  margin-top: 15px;
  border: 1px solid #108dee;
  background-color: white;
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
`;

function CommentTips({
  comment,
  userName,
  handleUploadComment,
  handleDeleteComment,
}) {
  const [newComment, setNewComment] = useState({});

  // 댓글 작성
  const handleInputComment = (e) => {
    setNewComment({
      content: e.target.value,
    });
  };

  // 댓글 업로드 버튼
  const Upload = () => {
    handleUploadComment(newComment);
  };

  // 댓글 삭제 버튼
  const Delete = (e) => {
    handleDeleteComment(e.target.value);
  };

  return (
    <>
      <CommentForm>
        <div
          style={{
            fontSize: "1.35rem",
            marginBottom: "5px",
            fontWeight: "bold",
          }}
        >
          댓글
        </div>
        {comment.length === 0 ? (
          <></>
        ) : (
          comment.map((el, idx) => {
            return (
              <SmallCommentForm key={idx}>
                <Comment>
                  <CommentWriter>{el.comment_user_name}</CommentWriter>
                  <CommentContent>{el.comment_content}</CommentContent>
                  <CommnetDate>
                    {el.updated_at.split("T")[0]}&nbsp;
                    {el.updated_at.split("T")[1].split(".")[0]}
                  </CommnetDate>
                </Comment>
                {el.isWriter ? (
                  <CommentDeleteBtn value={el.comment_id} onClick={Delete}>
                    X
                  </CommentDeleteBtn>
                ) : (
                  <></>
                )}
              </SmallCommentForm>
            );
          })
        )}
      </CommentForm>
      <CommentInputContainer>
        <AddCommentForm>{userName}</AddCommentForm>
        <CommentInput
          type="text"
          placeholder="입력"
          onChange={handleInputComment}
        ></CommentInput>
        <AddcommentBtn onClick={Upload}>등록</AddcommentBtn>
      </CommentInputContainer>
    </>
  );
}
export default memo(CommentTips);
