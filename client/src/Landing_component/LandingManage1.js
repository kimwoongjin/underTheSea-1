import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  max-width: 2000px;
  height: 125vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, #a1f1ff, #e2fdfa);

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 90vh;
  }
`;

const FishContainerL = styled.img`
  position: absolute;
  display: flex;
  width: 20%;
  height: 24%;
  left: 16%;
  z-index: 15;
  top: 48%;

  @media screen and (max-width: 480px) {
    display: flex;
    width: 40%;
    height: 23%;
    top: 25%;
    left: 10%;
  }
`;

const FishContainerR = styled.img`
  display: flex;
  position: absolute;
  width: 30%;
  height: 33%;
  left: 30%;
  top: 30%;
  z-index: 10;

  @media screen and (max-width: 480px) {
    display: flex;
    width: 55%;
    height: 30%;
    top: 12%;
    left: 34%;
  }
`;

const LevelText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  top: 33%;
  left: 6%;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    top: 18%;
    left: 6%;
  }
`;

const Fish = styled.img`
  position: absolute;
  width: 9%;
  height: 14%;
  top: 30%;
  right: 7%;

  @media screen and (max-width: 480px) {
    width: 18%;
    height: 13%;
    top: 50%;
    right: 12%;
  }
`;

const TextContainer = styled.div`
  position: relative;
  left: 30%;
  top: 3%;
  display: flex;
  flex-direction: column;
  font-size: max(1vw, 0.7rem);

  @media screen and (max-width: 1024px) {
    left: 27%;

    .text {
      font-size: max(2vw, 0.6rem);
    }
    .text1 {
      font-size: max(2vw, 1.5rem);
    }
  }
  @media screen and (max-width: 480px) {
    left: 0%;
    top: 18%;
  }

  /* border: 2px dashed red; */
`;

const SearchText = styled.div`
  text-align: left;
  margin-bottom: 10%;
  z-index: 999;
  font-size: 1.4rem;
  line-height: 150%;
  font-family: "Kfont";

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const IconCover = styled.div`
  position: absolute;
  font-size: 3.5rem;
  top: 37%;
  left: 23%;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    top: 12%;
    left: 18%;
  }
`;

function LandingManage1() {
  useEffect(() => {
    const txtTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".text8",
        start: "30px 100%",
        end: "top 20%",
        toggleActions: "play none restart pause",
        // markers: true,
      },
    });
    txtTimeline.from(".text8", { opacity: 0, y: 50, duration: 1 });
    txtTimeline.from(".level", { opacity: 0, x: -100, duration: 0.7 });

    const time = gsap.timeline({
      scrollTrigger: {
        trigger: ".text8",
        start: "30px 100%",
        end: "top 20%",
        toggleActions: "play none restart pause",
        // markers: true,
      },
    });
    time.from(".container", { opacity: 0, x: -100, duration: 1 });

    const txt = gsap.timeline({
      scrollTrigger: {
        trigger: ".text8",
        start: "30px 90%",
        end: "top 20%",
        toggleActions: "play none restart pause",
        // markers: true,
      },
    });
    txt.from(".jelly", { opacity: 0, y: -130, duration: 1 });
  }, []);

  return (
    <Container>
      <FishContainerL
        className="container"
        src="/일단계.png"
        alt="어항이미지.png"
      />
      <FishContainerR
        className="container"
        src="/육단계.png"
        alt="어항이미지.png"
      />
      <LevelText className="level">Level up!</LevelText>
      <Fish
        className="jelly"
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해파리.png"
        alt="해파리.png"
      />
      <IconCover className="level">
        <FontAwesomeIcon icon={faShare} />
      </IconCover>
      <TextContainer>
        <SearchText className="text8">
          주기적인 관리를 통해<br></br>
          변화하는 수족관 이미지를 체험해보세요.
        </SearchText>
      </TextContainer>
      {/* <Sqaure /> */}
    </Container>
  );
}

export default LandingManage1;
