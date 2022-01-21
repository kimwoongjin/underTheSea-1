import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { signupModalOnAction } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, #a8f2ff, #d2f7ff);
`;

const WomanImg = styled.img`
  position: absolute;
  width: 40%;
  height: 70%;
  left: 10%;
  bottom: 17%;
`;

const Fish = styled.img`
  position: absolute;
  width: 9%;
  height: 15%;
  top: 20%;
  right: 7%;
`;

const TextContainer = styled.div`
  position: absolute;
  right: 10%;
  display: flex;
  flex-direction: column;
  /* border: 2px dashed red; */
`;

const SearchTitle = styled.div`
  display: flex;
  /* z-index: 999; */
  font-size: 1.8rem;
  font-weight: 650;
  color: #092011;
  /* font-family: "Kfont"; */
  font-family: "SCBfont";
  cursor: pointer;
  margin-top: 25px;
`;

const SearchText = styled.div`
  text-align: left;
  z-index: 999;

  color: #092011;
  font-size: 1.5rem;

  line-height: 150%;

  font-family: "Kfont";
`;
const MainText = styled.div`
  font-weight: 750;
  font-size: 2.7rem;
  color: #092011;
  font-family: "SCBfont";
  margin-bottom: 10px;
`;

const IconCover = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

function LandingManage() {
  const state = useSelector((state) => state.authReducer);
  const { isLogin } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    const txtTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".text",
        start: "120px 80%",
        end: "top 10%",
        toggleActions: "play none restart pause",
        // markers: true,
        // markers: { startColor: "red", endColor: "blue", fontSize: "20px" },
      },
    });
    txtTimeline.from(".text", { opacity: 0, y: 50, duration: 1 });
    txtTimeline.from(".text1", { opacity: 0, y: 60, duration: 1 });
    // txtTimeline.to(".txt3", { opacity: 0, y: 50 });
  }, []);

  return (
    <Container>
      <WomanImg
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/메인여자인물3.png"
        alt="메인여자인물3.png"
      />
      <Fish
        className="fish"
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해파리.png"
        alt="해파리.png"
      />
      <TextContainer>
        <MainText className="text">주간 수족관 관리</MainText>
        <SearchText className="text">
          어항 관리가 필요하세요?<br></br>Under the Sea에서 도와드립니다.
        </SearchText>

        <div className="text1">
          {isLogin ? (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/manage"
            >
              <SearchTitle className="text1">
                관리페이지
                <IconCover>
                  <FontAwesomeIcon size="1x" icon={faAngleDoubleRight} />
                </IconCover>
              </SearchTitle>
            </Link>
          ) : (
            <SearchTitle
              className="text1"
              onClick={() => dispatch(signupModalOnAction)}
            >
              관리페이지
              <IconCover>
                <FontAwesomeIcon size="1x" icon={faAngleDoubleRight} />
              </IconCover>
            </SearchTitle>
          )}
        </div>
      </TextContainer>
      {/* <Sqaure /> */}
    </Container>
  );
}

export default LandingManage;
