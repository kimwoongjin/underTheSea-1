import styled from "styled-components";
import Header from "../component/Header";
import Header2 from "../component/Header2";
import TipCard from "../component/TipCard";

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

const BtnContainer = styled.div`
  width: 70%;
  /* margin-top: 80px; */
  display: flex;
  justify-content: flex-end;
  /* border: 1px dashed darkcyan; */
`;
const Btn = styled.button`
  width: 120px;
  height: 40px;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 28px;
  border-style: none;
  background: #108dee;
`;
const InputContainer = styled.div`
  width: 70%;
`;
const Form = styled.form`
  width: 100%;
  height: 500px;
  border: 1px dashed darkred;
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
          <Form></Form>
        </InputContainer>
      </Container>
    </>
  );
}
export default WriteTips;
