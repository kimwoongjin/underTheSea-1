import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";

const TipContainer = styled.div`
  position: relative;
  width: 95%;
  height: 60px;
  display: flex;
  margin-bottom: 1px;
  border-bottom: 1px solid #cccccc;
  cursor: pointer;
  align-items: center;
  &:hover {
    background-color: #f7f7f4;
    color: black;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    .fish {
      display: none;
    }
  }
`;

const TipTitle = styled.div`
  position: relative;
  flex: 6;
  width: 90%;
  height: 50%;
  margin-top: 5px;
  align-items: center;
  font-family: "Kfont";
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    margin-top: 8px;
    flex: 4;
    font-size: 0.8rem;
    line-height: 120%;
    box-sizing: content-box;
  }
`;

const WriterDateCover = styled.div`
  display: flex;
  flex: 4;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    /* border: 1px solid red; */
    width: 90%;
  }
`;

const TipWriter = styled.div`
  flex: 5;
  /* width: 90%; */
  height: 50%;
  margin-top: 5px;
  font-size: 0.9rem;
  font-family: "Kfont";
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    flex: 2;
    font-size: 0.6rem;
    color: #cccccc;
    height: 100%;
    margin-top: 0px;
    /* border: 1px solid red; */
  }
`;

const TipDate = styled.div`
  flex: 5;
  width: 90%;
  height: 50%;
  margin-top: 7px;
  font-size: 0.8rem;
  color: #808080;
  font-family: "Kfont";
  text-align: center;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    flex: 4;
    font-size: 0.6rem;
    text-align: left;
    color: #cccccc;
    height: 100%;
    margin-top: 0px;
    /* border: 1px solid red; */
  }
`;

function TipList({ tip_id, tip }) {
  const navigate = useNavigate();
  const date = tip.created_at.split("T")[0];

  // 게시물 선택&조회
  const handleSelectTip = (e) => {
    navigate(`/posttips/${tip_id}`);
  };

  return (
    <>
      <TipContainer>
        <div style={{ flex: "0.5", alignItems: "center" }} className="fish">
          <FontAwesomeIcon
            size="1x"
            icon={faFish}
            color="#828282"
          ></FontAwesomeIcon>
        </div>
        {/* <TitleCover> */}
        <TipTitle id={tip_id} onClick={handleSelectTip}>
          {tip.title}
        </TipTitle>
        {/* </TitleCover> */}
        <WriterDateCover>
          <TipWriter>{tip.user_name}</TipWriter>
          <TipDate>{date}</TipDate>
        </WriterDateCover>
      </TipContainer>
    </>
  );
}

export default TipList;
