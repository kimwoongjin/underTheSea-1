import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { faAngleDoubleRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100vw;
  height: 107vh;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, #e2fdfa, #a8f2ff);
`;

const WomanImgL = styled.img`
  position: absolute;
  width: 32%;
  height: 47%;
  right: 24%;
  bottom: 20%;
`;
const WomanImgR = styled.img`
  position: absolute;
  width: 25%;
  height: 54%;
  right: 5%;
  bottom: 40%;
`;
const TextContainer = styled.div`
  position: absolute;
  left: 10%;
  bottom: 50%;
  display: flex;
  flex-direction: column;
  /* border: 2px dashed red; */
`;
const MainText = styled.div`
  text-align: left;
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 900;
  color: #092011;
`;

const SearchText = styled.div`
  text-align: left;
  color: #092011;
  margin-bottom: 10%;
  font-size: 1.4rem;
  line-height: 150%;
  font-family: "Kfont";
`;

const SearchTitle = styled.div`
  display: flex;
  color: #092011;
  font-size: 1.7rem;
  font-weight: 650;
  margin-top: 5px;
`;

const IconCover = styled.div`
  margin-left: 10px;
`;

function LandingGuide() {
  useEffect(() => {
    const txtTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt5",
        start: "100px 80%",
        end: "top 20%",
        toggleActions: "play none restart pause",
        // markers: true,
      },
    });
    txtTimeline.from(".txt5", { opacity: 0, y: 50, duration: 1 });
    txtTimeline.from(".txt6", { opacity: 0, y: 50, duration: 1 });

    const TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt5",
        start: "100px 80%",
        end: "top 20%",
        toggleActions: "play none restart pause",
      },
    });
    TL.from(".woman-img", { opacity: 0, x: -100, duration: 1 });
    // TL.from(".woman-img1", { opacity: 0, x: -100, duration: 1 });
  }, []);

  const play = () => {
    var audio = document.getElementById("audio_play");
    console.log("Music is my life");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };
  return (
    <Container onclick={play}>
      <audio id="audio_play" src="waterdrop.mp3"></audio>
      <WomanImgL
        className="woman-img"
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/메인여자인물1.png"
        alt="메인여자인물1.png"
      />
      <WomanImgR
        className="woman-img"
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/메인여자인물2.png"
        alt="메인여자인물2.png"
      />
      <TextContainer>
        <MainText className="txt5">해수어와 담수어 사육정보</MainText>
        <SearchText className="txt5">
          사육정보를 확인하고 <br></br> 자신만의 노하우를 공유해주세요!
        </SearchText>
        <Link style={{ textDecoration: "none", color: "black" }} to="/guide">
          <SearchTitle className="txt6">
            가이드페이지
            <IconCover>
              <FontAwesomeIcon size="1x" icon={faAngleDoubleRight} />
            </IconCover>
          </SearchTitle>
        </Link>
      </TextContainer>
    </Container>
  );
}

export default LandingGuide;
