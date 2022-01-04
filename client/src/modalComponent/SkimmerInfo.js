import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;
const slideUp = keyframes`
    form {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;
const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;

const DarkBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: blue; */
  background: rgba(0, 0, 0, 0.5);

  animation-duration: 0.25s;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const ModalContainer = styled.div`
  width: 70%;
  height: 80%;
  background: white;
  border-radius: 20px;
  flex-direction: column;
  position: relative;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  .btn {
    width: 25px;
    height: 30px;
    position: fixed;
    display: flex;

    :hover {
      cursor: pointer;
    }
  }

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `};
`;
const ContentContainer = styled.div`
  width: 95%;
  height: 90%;
  overflow: auto;
  /* border: 1px solid red; */
  .structure {
    margin-top: 50px;
  }
  h2 {
    border-bottom: 2px solid #e5e5e5;
  }
  p {
    font-size: 18px;
  }
`;
const IconContainer = styled.div`
  width: 95%;
  height: 5%;
  /* margin-top: 5px; */
  display: flex;
  justify-content: flex-end;
  /* border: 1px solid red; */
`;

const ImgContainer = styled.div`
  display: flex;
  p {
    margin-left: 20px;
    div {
      font-weight: bold;
      margin-top: 7px;
      margin-bottom: 5px;
    }
  }
`;
const ImgContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-left: 20px;
    div {
      font-weight: bold;
      margin-top: 7px;
      margin-bottom: 5px;
    }
  }
`;
const Skimmer = styled.img`
  width: 30%;
`;
const DryContainer = styled.div`
  display: flex;
`;
const Dry = styled.img`
  /* margin-left: 20px; */
  /* margin-right: 20px; */
  width: 20%;
`;
const WetContainer = styled.div`
  display: flex;
`;
const Wet = styled.img`
  width: 20%;
`;
function SkimmerInfo({ onCancel, visible }) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible -> false
    if (localVisible && !visible) {
      setAnimate(true);
      // 0.25초의 시간동안 애니메이션을 보여주겠다는 의미
      setTimeout(() => setAnimate(false), 250);
    }
    // visible 값이 바뀔 때마다 로컬 visible 값을 동기화 시켜준다.
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;

  return (
    <DarkBackGround disappear={!visible}>
      <ModalContainer disappear={!visible}>
        <IconContainer>
          <div className="btn" onClick={onCancel}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
        </IconContainer>
        <ContentContainer>
          <h2>스키머란 무엇인가?</h2>
          <p>
            스키머는 미세버블을 이용하여 여과를 수행하는 장비입니다.
            <br /> 미세버블을 발생시키고 발생한 미세버블의 사이사이로 유기물을
            흡착하여 상단의 콜렉션 컵으로 모아줍니다.
            <br /> 스키머는 유기물의 분해단계 이전에 물리적으로 제거할 수 있는
            유일한 장치이며 생물학적 여과 장치의 로드를
            <br /> 줄여주며 잠재적으로 해수의 산화환원도를 개선합니다. 또한
            사용자는 눈으로 모인 양을 확인하고 <br />
            제거해줄 수 있어 관리가 쉽습니다.
          </p>
          <h2 className="structure">스키머의 구조</h2>
          <ImgContainer>
            <Skimmer src="스키머그림.png" />
            <p>
              <div className="sub-title">1. 공기조절벨브</div>
              스키머로 들어가는 공기유입량과 배출되는 물의 양을 조절하여 <br />
              버블의 양과 수위를 조절하는 기능을 합니다.
              <div className="sub-title">2. 콜렉션컵</div>
              스키머의 가장 상단에 위치하며 걸러낸 유기물을 포집합니다. <br />
              본체와 분리가 가능하여 주기적인 확인을 통해 세척해주어야 합니다.
              <div className="sub-title">3. 출수구</div>
              상단의 벨브를 이용하여 원하는 만큼의 물을 배출합니다.
              <div className="sub-title">4. 입수구</div>
              물과 공기를 스키머의 내부로 주입힙니다.
            </p>
          </ImgContainer>
          <h2 className="structure">스키머 사용의 방식</h2>
          <ImgContainer2>
            <DryContainer>
              <Dry src="드라이스키밍.png" />
              <p>
                <div className="sub-title">드라이 스키밍</div>
                미세버블의 수위를 낮게 조절하여 오물을 진하게 모으는 방법입니다.
                <br />
                효율은 웻스키밍보다 다소 떨어지지만 콜렉션컵이 늦게 차기 때문에
                <br />
                청소주기가 길어집니다.
              </p>
            </DryContainer>
            <WetContainer>
              <Wet src="웻스키밍.png" />
              <p>
                <div className="sub-title">웻 스키밍</div>
                미세버블의 수위를 높게 조절하여 효율이 좋지만 컵이 빠르게
                <br />
                가득차기 때문에 청소주기가 짧아집니다. 자주 비워 주어야하는
                <br /> 만큼 염도가 변할 수 있으므로 염도유지에 신경써주면
                좋습니다.
              </p>
            </WetContainer>
          </ImgContainer2>
        </ContentContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default SkimmerInfo;
