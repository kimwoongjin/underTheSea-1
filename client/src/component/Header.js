import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  background: #e9faff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 17vw;
  margin-left: 1%;
`;

const Signin = styled.div``;
const Signout = styled.div``;
const Search = styled.div``;
const Guide = styled.div``;
const BtnContainer = styled.div`
  display: flex;
  font-size: 1.1rem;
  /* border: 1px solid red; */
  justify-content: space-around;
  margin-right: 5px;
  width: 300px;
`;

function Header() {
  return (
    <Container>
      <Img src="스몰로고.png" alt="로고임ㅎㅎ" />
      <BtnContainer>
        <Guide>Guide</Guide>
        <Search>Search</Search>
        <Signin>SignIn</Signin>
        <Signout>SignOut</Signout>
      </BtnContainer>
    </Container>
  );
}

export default Header;
