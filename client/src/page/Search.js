import styled from "styled-components";
import React from "react";
import Header from "../component/Header";
import SearchCard from "./SearchCard";

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 40vh;
`;
const Input = styled.input`
  border: none;
  background: none;
  border-bottom: 5px solid #108dee;
  position: absolute;
  top: 50%;
  left: 32%;
  width: 30vw;
  height: 5vh;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
`;
const Button = styled.button`
  position: absolute;
  top: 52%;
  right: 26%;
  width: 8vw;
  height: 5vh;
  font-size: 1.5rem;
  color: white;
  background: #108dee;
  border-radius: 5px;
  border: 2px solid #108dee;
  cursor: pointer;
`;

const Text = styled.div`
  position: absolute;
  top: 90%;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
  line-height: 180%;
`;

const OuterContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 170%;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function showText(e) {
  console.log(e.target.value);
}

function Search() {
  return (
    <>
      <Header />
      <InputContainer>
        <Input
          type="text"
          placeholder="어종명으로 검색해주세요."
          onChange={showText}
        />
        <Button>search</Button>
        <Text>
          많은 사람들이 검색한 물고기입니다.
          <br></br>카드를 클릭하면 세부 정부를 확인할 수 있습니다.
        </Text>
      </InputContainer>
      <OuterContainer></OuterContainer>
      <SearchCard />
    </>
  );
}
export default Search;
