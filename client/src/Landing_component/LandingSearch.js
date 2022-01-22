import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Landingpage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, #d2f7ff, #70d6ff);
  .txt1 {
    z-index: 999;
  }
  .txt2 {
    z-index: 999;
  }
  .txt3 {
    z-index: 999;
  }
`;

const ManImg = styled.img`
  position: absolute;
  width: 33%;
  height: 63%;
  right: 10%;
  bottom: 18%;
`;
const CoralL = styled.img`
  position: absolute;
  width: 12%;
  height: 24%;
  bottom: 3%;
  left: 2%;
`;
const CoralS = styled.img`
  position: absolute;
  width: 8%;
  height: 16%;
  bottom: 3%;
  left: 14%;
`;

// const Fish = styled.img`
//   position: absolute;
//   width: 13%;
//   height: 15%;
//   top: 7%;
//   right: 4%;
// `;

const TextContainer = styled.div`
  position: absolute;
  left: 15%;
  display: flex;
  flex-direction: column;
  /* border: 2px dashed red; */
`;
const MainText = styled.div`
  position: relative;
  bottom: 50%;
  font-weight: 900;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #092011;
`;

const SearchText = styled.div`
  position: relative;
  margin-bottom: 10%;
  text-align: left;
  z-index: 900;
  color: #092011;
  font-size: 1.4rem;
  line-height: 150%;
  font-family: "Kfont";
`;
const SearchTitle = styled.div`
  /* border: 1px solid blue; */
  /* position: absolute; */
  z-index: 900;
  font-weight: 900;
  font-size: 1.7rem;
  display: flex;
  position: relative;
  margin-bottom: 30%;
`;

const IconCover = styled.div`
  margin-left: 10px;
`;

function LandingSearch() {
  useEffect(() => {
    const txtTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt1",
        start: "100px 75%",
        end: "top 20%",
        // markers: true,
        toggleActions: "play none restart pause",
      },
    });
    txtTimeline.from(".txt1", { opacity: 0, y: 50, duration: 1 });
    txtTimeline.from(".txt2", { opacity: 0, y: 50, duration: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt1",
        start: "100px 80%",
        end: "top 20%",
        // markers: true,
        toggleActions: "play none restart pause",
      },
    });
    tl.from(".manImg", { opacity: 0, x: -100, duration: 1 });
  }, []);

  return (
    <Container>
      <ManImg
        className="manImg"
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/메인남자인물.png"
        alt="메인남자인물.png"
      />
      <CoralL
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해초.png"
        alt="해초.png"
      />
      <CoralS
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해초.png"
        alt="해초.png"
      />
      {/* <Fish
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/무리.png"
        alt="무리.png"
      /> */}
      <TextContainer>
        <MainText className="txt1">물고기 정보 검색</MainText>
        <SearchText>
          <div className="txt1">
            다양한 물고기의 종류를 알고 싶으시다면<br></br>
            어종명으로 검색해보세요.<br></br>자세한 정보를 알려드립니다.
          </div>
        </SearchText>
        <Link style={{ textDecoration: "none", color: "black" }} to="/search">
          <SearchTitle className="txt2">
            검색페이지
            <IconCover>
              <FontAwesomeIcon size="1x" icon={faAngleDoubleRight} />
            </IconCover>
          </SearchTitle>
        </Link>
      </TextContainer>
      {/* <Sqaure /> */}
    </Container>
  );
}

export default LandingSearch;
