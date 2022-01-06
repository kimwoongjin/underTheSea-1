import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 420px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0px 0px 20px #adb5bd;
  /* background: #108dee; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  display: flex;
  align-items: center;
  font-weight: bold;
`;
const Content = styled.div`
  width: 260px;
  height: 20px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
`;
const Writer = styled.div``;
const Date = styled.div``;
const Coral = styled.img`
  width: 30%;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
function TipCard() {
  return (
    <Container>
      <ImgContainer>
        <Img src="placeholder-300x300.jpg" />
      </ImgContainer>
      <Title>환수할 때 이렇게 해보세요!</Title>
      <Content>
        <Writer>김사랑</Writer>
        <Date>2021.12.25</Date>
      </Content>
      <Coral src="해초.png" />
    </Container>
  );
}

export default TipCard;
