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

// const Sqaure = styled.div`
//   position: absolute;
//   left: 0%;
//   top: 0%;
//   width: 25vw;
//   text-decoration: none;
//   font-weight: bold;
//   display: block;
//   border-right: 350px solid transparent;
//   border-bottom: 790px solid #caf8ff;
//   line-height: 50px;
// `;
const ManImg = styled.img`
  position: absolute;
  width: 33%;
  height: 63%;
  right: 10%;
  bottom: 18%;
`;
const CoralL = styled.img`
  position: absolute;
  width: 15%;
  height: 27%;
  bottom: 3%;
  left: 2%;
`;
const CoralS = styled.img`
  position: absolute;
  width: 10%;
  height: 18%;
  bottom: 3%;
  left: 17%;
`;

const Fish = styled.img`
  position: absolute;
  width: 13%;
  height: 15%;
  top: 7%;
  right: 4%;
`;

const TextContainer = styled.div`
  position: absolute;
  left: 10%;
  display: flex;
  flex-direction: column;
  /* border: 2px dashed red; */
`;

const SearchTitle = styled.div`
  /* border: 1px solid blue; */
  /* position: absolute; */
  z-index: 900;
  color: black;
  font-size: 2rem;
  display: flex;
  margin-top: 5px;
  font-family: "SCBfont";
`;

const SearchText = styled.div`
  text-align: left;
  z-index: 900;
  color: #092011;
  font-size: 1.4rem;
  line-height: 150%;
  font-family: "Kfont";
`;
const MainText = styled.div`
  font-weight: 900;
  font-size: 2.7rem;
  margin-bottom: 10px;
  color: #092011;
  font-family: "SCBfont";
`;
const IconCover = styled.div`
  margin-left: 10px;
`;

function LandingSearch() {
  useEffect(() => {
    const txtTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt1",
        start: "100px 90%",
        end: "top 20%",
        // markers: true,
        // markers: {startColor: "red", endColor: "blue", fontSize: "20px"},
        toggleActions: "play none restart pause",
      },
    });
    txtTimeline.from(".txt1", { opacity: 0, y: 50, duration: 1 });
    txtTimeline.from(".txt2", { opacity: 0, y: 50, duration: 1 });
    // txtTimeline.to(".txt3", { opacity: 0, y: 50 });
  }, []);

  return (
    <Container>
      <ManImg
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
      <Fish
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/무리.png"
        alt="무리.png"
      />
      <TextContainer>
        <MainText className="txt1">물고기 검색</MainText>
        <SearchText>
          <div className="txt1">
            다양한 물고기의 종류를 알고 싶으시다면<br></br>
            어종명으로 검색해보세요.<br></br>자세한 정보를 알려드립니다.
          </div>
        </SearchText>
        <Link style={{ textDecoration: "none", color: "black" }} to="/search">
          <SearchTitle className="txt2">
            Search
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
