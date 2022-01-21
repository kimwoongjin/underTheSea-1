import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Link } from "react-router-dom";
import { signupModalOnAction } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, #a8f2ff, #d2f7ff);

  .txt1 {
    z-index: 999;
  }
  .txt2 {
    z-index: 999;
  }
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
  top: 30%;
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
  margin-top: 5px;
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
  /* position: absolute; */
  font-weight: 750;
  font-size: 2.7rem;
  /* right: 25.5%; */
  /* top: 29%; */
  color: #092011;
  font-family: "SCBfont";
  margin-bottom: 10px;
  /* font-family: "Kfont"; */
`;

const IconCover = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

function LandingManage() {
  useEffect(() => {
    const txtTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt3",
        start: "100px 60%",
        end: "top 20%",
        toggleActions: "play none restart pause",
        // markers: true,
        // markers: { startColor: "red", endColor: "blue", fontSize: "20px" },
      },
    });
    txtTimeline.from(".txt3", { opacity: 0, y: 50, duration: 1 });
    txtTimeline.from(".txt4", { opacity: 0, y: 50, duration: 1 });
    // txtTimeline.to(".txt3", { opacity: 0, y: 50 });

    gsap.to(".fish", {
      scrollTrigger: {
        trigger: ".txt3",
        start: "100px 60%",
        end: "top 20%",
        // markers: true,
      },
      y: -100,
      x: 30,
      ease: "none",
      duration: 0.5,
    });
  }, []);

  const state = useSelector((state) => state.authReducer);
  const { isLogin } = state;
  const dispatch = useDispatch();
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
        <MainText className="txt3">주간 수족관 관리</MainText>
        <SearchText className="txt3">
          어항 관리가 필요하세요?<br></br>Under the Sea에서 도와드립니다.
        </SearchText>

        {isLogin ? (
          <Link style={{ textDecoration: "none", color: "black" }} to="/manage">
            <SearchTitle>
              Management
              <IconCover>
                <FontAwesomeIcon size="1x" icon={faAngleDoubleRight} />
              </IconCover>
            </SearchTitle>
          </Link>
        ) : (
          <SearchTitle onClick={() => dispatch(signupModalOnAction)}>
            Management
            <IconCover>
              <FontAwesomeIcon size="1x" icon={faAngleDoubleRight} />
            </IconCover>
          </SearchTitle>
        )}
      </TextContainer>
      {/* <Sqaure /> */}
    </Container>
  );
}

export default LandingManage;
