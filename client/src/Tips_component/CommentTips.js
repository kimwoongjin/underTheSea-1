import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

const CommentForm = styled.div`
  position: relative;
  width: 95%;
  height: 100%;
  display: column;
  margin-bottom: 2px;
  font-family: "Kfont";
  /* border: 1px solid red; */
  justify-content: center;

  .comment {
    font-size: 1.35rem;
    margin-bottom: 20px;
    font-weight: bold;
    padding-left: 1%;
  }

  .writer {
    width: 80%;
    display: column;
    /* flex-direction: column; */
    margin-bottom: 15px;
  }
  @media screen and (max-width: 480px) {
    .comment {
      display: none;
    }
    .writer {
      margin-bottom: 0;
    }
  }
`;

const SmallCommentForm = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 20px 0 0 0;
  border-bottom: 1px solid #cccccc;

  .deleteBtn {
    position: relative;
    right: 2%;
    margin-top: 4%;
  }
  @media screen and (max-width: 480px) {
    margin: 2px 0 0 2px;
  }
`;

const Comment = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  padding: 0;
  margin-top: 2px;
`;

const CommentWriter = styled.div`
  font-weight: 900;
  font-size: 1.1rem;
  width: 90%;
  height: 30%;
  font-family: "Kfont";
  display: flex;
  padding-top: 0.5%;
  padding-left: 1%;
  position: relative;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    font-weight: normal;
  }
`;

const CommentContent = styled.div`
  width: 90%;
  height: 20%;
  font-size: 1rem;
  margin-top: 0.5px;
  margin-bottom: 18px;
  padding-left: 1%;
  font-family: "Kfont";
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

const CommnetDate = styled.div`
  width: 90%;
  height: 20%;
  font-size: 0.8rem;
  padding-left: 1%;
  color: #808080;
  margin-top: 0.5px;
  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

const WriterIcon = styled.div`
  width: 10%;
  height: 30%;
  position: relative;
  /* right: 1%; */

  .userImg {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const CommentInputContainer = styled.form`
  position: relative;
  width: 94%;
  height: 95%;
  /* pading: 10px */
  border: 1px solid #a7d9ff;
  border-radius: 4px;
  margin: 4% 5% 4%;
  display: column;
  justify-content: center;
  align-items: center;

  .Greeting {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5% 0 5%;
  }

  .commentGreeting {
  }
`;
const AddCommentForm = styled.div`
  font-weight: 900;
  width: 90%;
  height: 30%;
  margin: 2% 0 1% 8%;
  font-size: 1.1rem;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    font-weight: normal;
  }
`;
const CommentInput = styled.input`
  width: 85%;
  height: 20px;
  margin: 3% 0 1% 7%;
  border: none;
  outline: none;
  border-bottom: 1px solid #a7d9ff;
  font-size: 1.1rem;
  padding: 0 0 1% 1%;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const BtnContainer = styled.div`
  /* position: relative; */
  width: 90%;
  margin: 0% 0 1% 7%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const AddcommentBtn = styled.button`
  width: 80px;
  height: 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 0;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
  @media screen and (max-width: 480px) {
    width: 15%;
    height: 20px;
    font-size: 0.6rem;
  }
`;

function CommentTips({
  comment,
  userName,
  handleUploadComment,
  handleDeleteComment,
}) {
  const [newComment, setNewComment] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const state = useSelector((state) => state.authReducer);
  const { isLogin } = state;

  // 댓글 작성
  const handleInputComment = (e) => {
    setNewComment({
      content: e.target.value,
    });
  };

  // 댓글 수정
  // const editComment = () => {
  //   setIsEdit(true);
  // };

  // 댓글 업로드 버튼
  const Upload = () => {
    handleUploadComment(newComment);
  };

  // 댓글 삭제 버튼
  const Delete = (e) => {
    // console.log(e.target.id);
    handleDeleteComment(e.target.id);
  };

  return (
    <>
      <CommentForm>
        <div className="comment">댓글</div>
        {comment.length === 0 ? (
          <></>
        ) : (
          comment.map((el, idx) => {
            return (
              <SmallCommentForm key={idx}>
                <Comment>
                  <WriterIcon>
                    <img className="userImg" src="/유저2.png" alt=""></img>
                  </WriterIcon>
                  <div className="writer">
                    <CommentWriter>{el.comment_user_name}</CommentWriter>
                    <CommentContent>{el.comment_content}</CommentContent>
                    <CommnetDate>
                      {el.updated_at.split("T")[0]}&nbsp;
                      {el.updated_at.split("T")[1].split(".")[0]}
                    </CommnetDate>
                  </div>
                </Comment>
                {el.isWriter ? (
                  <>
                    {/* <CommentDeleteBtn value={el.comment_id} onClick={Delete}> */}
                    <FontAwesomeIcon
                      className="deleteBtn"
                      id={el.comment_id}
                      onClick={Delete}
                      size="1x"
                      icon={faTimesCircle}
                      style={{ cursor: "pointer", color: "gray" }}
                    />
                    {/* </CommentDeleteBtn> */}
                  </>
                ) : (
                  <></>
                )}
              </SmallCommentForm>
            );
          })
        )}
      </CommentForm>
      <CommentInputContainer>
        {isLogin ? (
          <>
            <AddCommentForm>{userName}</AddCommentForm>
            <CommentInput
              type="text"
              placeholder="입력"
              onChange={handleInputComment}
            ></CommentInput>
            <BtnContainer>
              <AddcommentBtn onClick={Upload}>등록</AddcommentBtn>
            </BtnContainer>
          </>
        ) : (
          <div className="Greeting">
            <div className="commentGreeting">로그인 시 댓글이 가능합니다. </div>
          </div>
        )}
      </CommentInputContainer>
    </>
  );
}
export default memo(CommentTips);
