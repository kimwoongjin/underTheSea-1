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
            <br /> 사용자는 눈으로 모인양을 확인하고 제거해줄 수 있습니다.
          </p>
          <h2>스키머의 작동원리</h2>
          <img src="스키머그림.png" />
          <p>ㅇㅇㅇㅇ</p>
        </ContentContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default SkimmerInfo;
