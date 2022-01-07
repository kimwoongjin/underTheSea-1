import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 10vh;
  background: #d2f7ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 13vw;
  margin-left: 1%;
`;

const Login = styled.div``;
const Signup = styled.div``;
const Search = styled.div``;
const Guide = styled.div``;
const BtnContainer = styled.div`
  display: flex;
  font-size: 1.1rem;
  /* border: 1px solid red; */
  justify-content: space-around;
  margin-right: 2%;
  width: 300px;
  font-family: "Kfont";
`;

function Header({ handleLogin, handleSignup }) {
  return (
    <Container>
      <Img src="/로고.png" alt="" />
      <BtnContainer>
        <Guide>가이드</Guide>
        <Link style={{ textDecoration: "none", color: "black" }} to="/search">
          <Search>검색</Search>
        </Link>
        <Login onClick={handleLogin}>로그인</Login>
        <Signup onClick={handleSignup}>회원가입</Signup>
      </BtnContainer>
    </Container>
  );
}

export default Header;
