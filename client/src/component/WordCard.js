import styled from "styled-components";
import { useDispatch } from "react-redux";
import { wordModalOnAction } from "../store/actions";

const Container = styled.div`
  width: 300px;
  height: 420px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0px 0px 20px #adb5bd;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-right: 35px; */
  transition: all 0.3s;
  :hover {
    transform: matrix(1, 0, 0, 1, 0, -10);
    box-shadow: 0px 0px 30px #adb5bd;
    transition: all 0.3s;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 200px;
`;
const Title = styled.div`
  width: 260px;
  height: 40px;
  /* border: 1px solid black; */
  margin: 10px 0px;
  font-family: "Kfont";
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
`;
const Content = styled.div`
  width: 260px;
  height: 140px;
  font-family: "Kfont";
  border-radius: 10px;
  background: #e5e5e5;
  padding: 10px;
  box-sizing: border-box;
`;
function WordCard() {
  const dispatch = useDispatch();

  return (
    // 컨테이너를 클릭하면 모달상태가 변경되야함
    <Container onClick={() => dispatch(wordModalOnAction)}>
      <ImgContainer>
        <Img src="/문코랄.jpeg" />
      </ImgContainer>
      <Title>물생활용어모음</Title>
      <Content>
        처음 접하면 어려울 수 있는 해수어키우기에 사용되는 여러가지 용어들의
        의미를 모았습니다.
      </Content>
    </Container>
  );
}

export default WordCard;
