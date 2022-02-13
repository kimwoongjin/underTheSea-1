import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  max-width: 2000px;
  margin: auto;
  height: 27vh;
  border-bottom: 1px solid black;
  background: #464646;
  position: relative;
  @media screen and (max-width: 480px) {
    height: 55vh;
  }
`;

const LogoTag = styled.img`
  position: absolute;
  top: 20%;
  left: 8%;
  width: 13vw;
  @media screen and (max-width: 480px) {
    width: 30vw;
    font-size: 0.9rem;
    top: 10%;
    left: 35%;
  }
`;
const AboutTag = styled.div`
  position: absolute;
  display: block;
  top: 25%;
  left: 35%;
  line-height: 170%;
  text-align: left;
  color: white;
  font-size: 1rem;

  #repo {
    color: white;
    text-decoration: none;
  }
  #repo:hover {
    color: #9ce6ff;
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) {
    top: 40%;
    left: 8%;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 480px) {
    width: 20vw;
    font-size: 0.8rem;
    top: 25%;
    left: 7%;
    #repo {
      width: 20vw;
      font-size: 0.8rem;
    }
  }
`;
// const NameTag = styled.div`
//   position: absolute;
//   right: 26%;
//   top: 25%;
//   color: white;
//   line-height: 170%;
//   font-size: 1rem;

//   @media screen and (max-width: 480px) {
//     font-size: 0.9rem;
//     top: 40%;
//     left: 3%;
//     line-height: 300%;
//   }
// `;
const LinkTag = styled.div`
  display: flex;
  line-height: 170%;
  font-size: 1rem;
  flex-wrap: wrap;

  #link1 {
    position: absolute;
    top: 25%;
    right: 24%;
    color: white;
    text-decoration: none;
  }
  #link1:hover {
    color: #9ce6ff;
    text-decoration: underline;
  }
  #link2 {
    position: absolute;
    top: 25%;
    right: 11%;
    color: white;

    text-decoration: none;
  }
  #link2:hover {
    color: #9ce6ff;
    text-decoration: underline;
  }
  /* ----------------------------------- */
  #link3 {
    position: absolute;
    top: 60%;
    right: 24%;
    color: white;
    text-decoration: none;
  }
  #link3:hover {
    color: #9ce6ff;
    text-decoration: underline;
  }
  /* ----------------------------------- */
  #link4 {
    position: absolute;
    top: 60%;
    right: 11%;
    color: white;
    text-decoration: none;
  }
  #link4:hover {
    color: #9ce6ff;
    text-decoration: underline;
  }

  .icon1 {
    position: absolute;
    top: 24%;
    right: 23%;
  }
  .icon2 {
    position: absolute;
    top: 24%;
    right: 10%;
  }
  .icon3 {
    position: absolute;
    top: 59%;
    right: 23%;
  }
  .icon4 {
    position: absolute;
    top: 59%;
    right: 10%;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    #link1 {
      right: 29%;
    }

    #link3 {
      right: 29%;
    }

    .icon1 {
      right: 28%;
    }

    .icon3 {
      right: 28%;
    }
  }
  @media screen and (max-width: 480px) {
    #link1 {
      top: 50%;
      right: 60%;
    }

    #link2 {
      top: 50%;
      right: 20%;
    }

    #link3 {
      top: 70%;
      right: 60%;
    }

    #link4 {
      top: 70%;
      right: 20%;
    }
    .icon1 {
      top: 50%;
      right: 60%;
    }
    .icon2 {
      top: 50%;
      right: 20%;
    }
    .icon3 {
      top: 70%;
      right: 60%;
    }
    .icon4 {
      top: 70%;
      right: 20%;
    }
  }
`;
const Copy = styled.div`
  position: absolute;
  bottom: 5%;
  left: 8%;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-top: 10%;
    bottom: 5%;
    left: 7%;
  }
`;

const IconCover = styled.div`
  color: white;
  padding-right: 4em;
`;

function Footer() {
  return (
    <Container>
      <LogoTag
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/Footer.png"
        alt=""
      />
      <AboutTag>
        About us<br></br>
        <a id="repo" href="https://github.com/codestates/underTheSea">
          https://github.com/codestates/underTheSea
        </a>
      </AboutTag>
      {/* <NameTag>
        김웅진<br></br>박기정<br></br>송다영<br></br>정성우
      </NameTag> */}

      <LinkTag>
        <IconCover className="icon1">
          <FontAwesomeIcon size="2x" icon={faGithub} />
        </IconCover>
        <a id="link1" href="https://github.com/kimwoongjin">
          김웅진
        </a>
        <IconCover className="icon2">
          <FontAwesomeIcon size="2x" icon={faGithub} />
        </IconCover>
        <a id="link2" href="https://github.com/pgj0116">
          박기정
        </a>
        <IconCover className="icon3">
          <FontAwesomeIcon size="2x" icon={faGithub} />
        </IconCover>
        <a id="link3" href="https://github.com/songdayoung1">
          송다영
        </a>
        <IconCover className="icon4">
          <FontAwesomeIcon size="2x" icon={faGithub} />
        </IconCover>
        <a id="link4" href="https://github.com/JeongSeongWu">
          정성우
        </a>
      </LinkTag>
      <Copy>Copyright © 2022 Under The Sea All rights reserved.</Copy>
    </Container>
  );
}

export default Footer;
