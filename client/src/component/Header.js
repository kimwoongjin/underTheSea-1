import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 99vw;
  height: 10vh;
  background: #d2f7ff;
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
  margin-right: 2%;
  width: 300px;
`;

function Header({ handleLogin }) {
  return (
    <Container>
      <Img src="/로고.png" alt="" />
      <BtnContainer>
        <Guide>가이드</Guide>
        <Link style={{ textDecoration: "none", color: "black" }} to="/search">
          <Search>검색</Search>
        </Link>
        <Signin onClick={handleLogin}>로그인</Signin>
        <Signout>회원가입</Signout>
      </BtnContainer>
    </Container>
  );
}

export default Header;
