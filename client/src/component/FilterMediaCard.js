import styled from "styled-components";
import { useDispatch } from "react-redux";
import { filterMediaModalOnAction } from "../store/actions";

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
  font-family: "Kfont";
  margin: 10px 0px;
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
  border-radius: 10px;
  font-family: "Kfont";
  background: #e5e5e5;
  padding: 10px;
  box-sizing: border-box;
`;
function FilterMediaCard() {
  const dispatch = useDispatch();

  return (
    // 컨테이너를 클릭하면 모달상태가 변경되야함
    <Container onClick={() => dispatch(filterMediaModalOnAction)}>
      <ImgContainer>
        <Img src="https://iconmage.s3.ap-northeast-2.amazonaws.com/여과재모음.jpeg" />
      </ImgContainer>
      <Title>여과재는 무엇일까요?</Title>
      <Content>
        이걸 넣으면 물이 맑아지는 건가? 어떻게 여과한다는거지? 라는 의문을
        풀어드립니다.
      </Content>
    </Container>
  );
}

export default FilterMediaCard;
