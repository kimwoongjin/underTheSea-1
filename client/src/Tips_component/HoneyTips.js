import styled from "styled-components";
import Header from "../component/Header";
import Header2 from "../component/Header2";
import TipCard from "../component/TipCard";
import { useNavigate } from "react-router-dom";

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
const Swarm = styled.img`
  position: absolute;
  top: 80px;
  left: 80px;
  bottom: 0px;
  width: 14%;
`;
const TitleContainer = styled.div`
  width: 5.7%;
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
const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 70%;
  /* border: 1px dashed darkcyan; */
`;
function HoneyTips() {
  const navigate = useNavigate();
  const goToNewTip = () => {
    navigate("/writetips");
  };
  return (
    <>
      <Header2></Header2>
      <Container>
        <TopCover>
          <TitleContainer>
            <Title>Board</Title>
            <Starfish src="불가사리.png" />
          </TitleContainer>
          <SubTitle>여러분의 지식을 나눠주세요!</SubTitle>
          {/* <Swarm src="무리.png" /> */}
        </TopCover>
        <BtnContainer>
          <Btn onClick={goToNewTip}>새글쓰기</Btn>
        </BtnContainer>
        <CardContainer>
          <TipCard></TipCard>
          <TipCard></TipCard>
          <TipCard></TipCard>
          <TipCard></TipCard>
        </CardContainer>
      </Container>
    </>
  );
}
export default HoneyTips;
