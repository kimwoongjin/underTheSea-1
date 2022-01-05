import styled from "styled-components";
import Header from "../component/Header";
import Header2 from "../component/Header2";
import TipCard from "../component/TipCard";

const Container = styled.div`
  width: 100%;
  height: 100%;
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
  width: 15%;
  display: flex;
  /* border: 1px solid green; */
  position: relative;
`;
const Starfish = styled.img`
  position: absolute;
  right: -30px;
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

const BtnContainer = styled.div`
  width: 70%;
  /* margin-top: 80px; */
  display: flex;
  justify-content: flex-end;
  /* border: 1px dashed darkcyan; */
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 70%;
  height: 100%;
  border: 1px solid #108dee;
  border-radius: 4px;
  margin-bottom: 10px;
`;
const PostTitle = styled.div`
  width: 95%;
  font-size: 1.25rem;
  margin-top: 10px;
  /* border: 1px solid red; */
  font-weight: bold;
`;

const WriterCover = styled.div`
  width: 95%;
  margin-top: 10px;
  display: flex;
  /* border: 1px solid red; */
`;

const Writer = styled.div`
  width: 10%;
  /* border: 1px solid red; */
`;

const Date = styled.div`
  width: 10%;
  /* border: 1px solid red; */
`;
const Content = styled.div`
  width: 95%;
  height: 600px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-top: 1px solid #108dee;
  border-bottom: 1px solid #108dee;
`;

const Comment = styled.div`
  width: 95%;
  height: 100px;
  margin-bottom: 10px;
`;

const CommentInputContainer = styled.form`
  position: relative;
  width: 95%;
  height: 140px;
  border: 1px solid #108dee;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CommentWriter = styled.div`
  width: 98%;
  height: 30px;
  /* border: 1px solid red; */
  margin-bottom: 10px;
`;
const CommentInput = styled.div`
  width: 98%;
  height: 80px;
  /* border: 1px solid red; */
`;

const Btn = styled.button`
  position: absolute;
  bottom: 8px;
  right: -20px;
  width: 80px;
  height: 30px;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 28px;
  border-style: none;
  background: #108dee;
`;

function PostTips() {
  return (
    <>
      <Header2></Header2>
      <Container>
        <TopCover>
          <TitleContainer>
            <Title>정보공유 게시판</Title>
            <Starfish src="불가사리.png" />
          </TitleContainer>
          <SubTitle>여러분의 지식을 나눠주세요!</SubTitle>
        </TopCover>
        <PostContainer>
          <WriterCover>
            <Writer>김코딩</Writer>
            <Date>2021-12-25</Date>
          </WriterCover>
          <PostTitle>매주 해야하는 환수 이렇게 해보세요!</PostTitle>
          <Content></Content>
          <Comment>댓글창</Comment>
          <CommentInputContainer>
            <CommentWriter>박해커</CommentWriter>
            <CommentInput></CommentInput>
            <Btn>등록</Btn>
          </CommentInputContainer>
        </PostContainer>
      </Container>
    </>
  );
}
export default PostTips;
