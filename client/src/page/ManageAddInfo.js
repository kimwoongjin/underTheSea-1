import styled from "styled-components";
import React from "react";
import Header from "../component/Header";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
`;
const TitleContainer = styled.div`
  margin-top: 13%;
  position: relative;
  width: 60%;
  height: 100%;
  /* border: 1px solid black; */
  text-align: center;
  border-bottom: 3px solid #108dee;
  line-height: 500%;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const Button = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5% 2% 0.5% 2%;
  color: white;
  border-radius: 20px;
  border: 1px solid #108dee;
  background: #108dee;
  margin: 1.5% 0 0 53%;
`;

const Input1 = styled.input`
  margin-top: 2%;
  width: 59%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.5% 0 0.5% 1%;
  border-radius: 10px;

  border: 3px solid #108dee;
`;
const Contents = styled.div`
  position: relative;
  margin: 4% 0 15%;
  width: 60%;
  height: 100%;
  /* border: 1px solid black; */
  text-align: left;
  justify-content: center;
`;
const Text1 = styled.div`
  font-weight: bold;
  font-size: 1.7rem;
  padding-left: 1%;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input2 = styled.input`
  margin-top: 2%;
  width: 29%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.7% 0 0.7% 1%;
  border-radius: 10px;
  border: 3px solid #108dee;
`;
const Input3 = styled.input`
  margin-top: 2%;
  width: 29%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.7% 0 0.7% 1%;
  border-radius: 10px;
  border: 3px solid #108dee;
`;
const Input4 = styled.input`
  margin-top: 2%;
  width: 29%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.7% 0 0.7% 1%;
  border-radius: 10px;
  border: 3px solid #108dee;
`;

const Text2 = styled.div`
  position: absolute;
  margin: 4% 0 0 1%;
  font-weight: bold;
  font-size: 1.7rem;
`;
const Input5 = styled.input`
  margin-top: 10%;
  width: 27%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.7% 0 0.7% 1%;
  border-radius: 10px;
  border: 3px solid #108dee;
`;

const Box2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7%;
  /* border: 1px solid black; */
`;

const Input6 = styled.input`
  width: 46%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.7% 0 0.7% 1%;
  border-radius: 10px;
  border: 3px solid #108dee;
`;
const Input7 = styled.input`
  width: 46%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.7% 0 0.7% 1%;
  border-radius: 10px;
  border: 3px solid #108dee;
`;
function showText(e) {
  console.log(e.target.value);
}

function ManageAddInfo() {
  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <Title>어항 정보 추가</Title>
        </TitleContainer>
        <Button>추가</Button>
        <Input1 type="text" placeholder="수조명" onChange={showText}></Input1>
        <Contents>
          <Text1>직사각형 수조</Text1>
          <Box1>
            <Input2 type="text" placeholder="가로" onChange={showText}></Input2>
            <Input3 type="text" placeholder="세로" onChange={showText}></Input3>
            <Input4 type="text" placeholder="수위" onChange={showText}></Input4>
          </Box1>
          <Text2>볼형 수조</Text2>
          <Input5 type="text" placeholder="물량" onChange={showText}></Input5>
          <Box2>
            <Input6 type="text" placeholder="테마" onChange={showText}></Input6>
            <Input7
              type="text"
              placeholder="물고기 수"
              onChange={showText}
            ></Input7>
          </Box2>
        </Contents>
      </Container>
    </>
  );
}
export default ManageAddInfo;
