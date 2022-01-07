import React, { useState } from "react";
import styled from "styled-components";
import Header2 from "../component/Header2";
import ManageDetCard from "./ManageDetCard";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import AquaInfo from "../modalComponent/AquaInfo";

//경로 "/manage/detailinfo"의 전체 페이지
//물고기 수, 레벨, 어항 이미지, 버튼, 횟수 넘버 기재
//manage 페이지 카드정보 import 순서 manageDetail > manageDetCard > manageInfo

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40vh;
  /* text-align: left; */
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  line-height: 180%;
  color: #008eff;
`;
const TextContainer = styled.div`
  position: absolute;
  position: relative;
  top: 65%;
  width: 23%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid #108dee; */
  /* border-bottom-left-radius: 25px; */
`;

const Text = styled.div`
  width: 60%;
  font-weight: bold;
  font-size: 1.6rem;
  text-align: center;
  line-height: 180%;
  z-index: 999;
  /* border: 1px solid #108dee; */
`;

const OuterContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Level = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 30px;
  font-weight: bold;
  font-size: 1.5rem;
`;
const LevelCover = styled.div`
  display: flex;
  width: 8%;
`;
const LevelText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  color: #008eff;
  /* border: 1px solid red; */
  font-weight: bold;
  font-family: "Kfont";
`;

const Logo = styled.img`
  width: 20%;
`;

const Levelinfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 1.2rem;
  /* color: #008eff; */
  /* border: 1px solid red; */
  /* font-weight: bold; */
  font-family: "Kfont";
`;
const ImgContainer = styled.div`
  /* margin: 2%; */
  width: 50%;
  height: 40%;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

//--------------------------------------------

//--------------------------------------------
// const MidContainer = styled.div`
//   width: 100%;
//   /* border: 1px solid red; */
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-top: 1%;
//   align-items: center;
//   /* background: #bdc3c7; */
//   /* background-color: rgba(0, 0, 0, 0.1); */
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
// `;

const MidContainer = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 1%;
  align-items: center;
  /* background: #00d2ff; */
  /* background-color: rgba(0, 0, 0, 0.1); */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

// const ProgressBar = styled.div`
//   position: absolute;
//   left: 0;
//   width: ${(props) => (props.bar ? props.bar : "50%")};
//   height: 100%;
//   border-top-left-radius: 10px;
//   border-bottom-left-radius: 10px;
//   box-shadow: -5px 0 0 0 #bbdd3e inset;
//   background-color: #a2c523;
// `;

const ProgressBar = styled.div`
  padding: 2px;
  box-sizing: border-box;
  display: flex;
  border-radius: 5px;
  width: 50%;
  height: 4vh;
  background: white;
  border: 2px solid #108dee;
`;
const Progress = styled.div`
  width: 15%;
  height: 3vh;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: linear-gradient(#00d2ff, #3a7bd5);
`;
//--------------------------------------------
const BtnContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 6vh;

  .info {
    background: white;
    color: #108dee;
  }
`;

const Button = styled.button`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
  font-family: "Kfont";

  background: #108dee;
  border: 2px solid #108dee;
  color: white;
  font-size: 1rem;
  position: relative;
  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.07);
  }
`;

//--------------------------------------------
const Counter = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 50px;
  /* height: 12%; */
  margin-top: 2%;
  display: flex;
`;

//------------------- 캘린더 --------------------
const CalendarContainer = styled.div`
  width: 50%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid darkgrey; */
`;

const Control = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const CalendarBtn = styled.button`
  background: white;
  width: 40px;
  height: 30px;
  border-style: none;
`;

const Span = styled.span`
  font-size: 1.5rem;
`;

const Table = styled.table`
  /* border: 1px solid gray; */
`;

const Tbody = styled.tbody`
  /* border: 1px dashed blue; */
`;

const Tr = styled.tr`
  display: flex;
  flex-direction: row;
`;
const Number = styled.span`
  display: flex;
  width: 100%;
  height: 20px;
  /* border-bottom: 1px solid black; */
`;

const Td = styled.td`
  display: flex;
  border: 1px solid gray;
  /* border-radius: 4px; */
  font-size: 1rem;
  width: 6.8vw;
  height: 13vh;
  /* margin: 1px; */
`;
const WeekContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  /* border: 1px solid red; */
  .sun {
    color: red;
  }
  .sat {
    color: blue;
  }
`;
const Day = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  width: 7vw;
  height: 3vh;
  /* margin: 1px; */
  /* border: 1px solid black; */
`;
// 지금 해야되는거는 피딩기록하는 버튼을 누르면 버튼을 누른 숫자만큼 클릭한 날에 달력에 정보가 보여야해

function ManageDetail() {
  let feedingNum = 0;
  let today1 = Date();
  const [infoModal, setInfoModal] = useState(false);
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment; // today == moment()   입니다.
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const feedingCounter = () => {
    feedingNum++;
    // console.log(feedingNum);
    console.log(today1);
  };
  const InfoModalOn = () => {
    setInfoModal(true);
  };
  const InfoModalOff = () => {
    setInfoModal(false);
  };

  // ------ 달력날짜 랜더링 ------ //

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <Tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <Td key={index}>
                    <Number style={{ color: "#108dee" }}>
                      {days.format("D")}
                    </Number>
                  </Td>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <Td
                    key={index}
                    style={{
                      color: "#e5e5e5",
                    }}
                  >
                    <Number>{days.format("D")}</Number>
                  </Td>
                );
              } else {
                return (
                  <Td key={index}>
                    <Number>{days.format("D")}</Number>
                  </Td>
                );
              }
            })}
        </Tr>
      );
    }
    return result;
  };

  return (
    <>
      <Header2 />
      <Container>
        <Title>My Aquarium</Title>
        <TextContainer>
          {/* <Lv>3</Lv> */}
          {/* <Lv2></Lv2> */}
          {/* <Lv3></Lv3> */}
          <Text>구피와 구구 어항</Text>
          {/* <Icon></Icon> */}
        </TextContainer>

        {/* <Img src="/물방울L.png" alt="" /> */}
      </Container>
      {/* ----------------------------------------- */}
      <OuterContainer>
        <ImgContainer>
          <MainImg src="/관리어항.png" alt="" />
        </ImgContainer>
        {/* ----------------------------------------- */}

        {/* ----------------------- */}

        <MidContainer>
          {/* ----------------------------------------- */}
          <Level>
            <LevelCover>
              <LevelText>Lv.</LevelText>
              <Levelinfo>6</Levelinfo>
            </LevelCover>
            <Logo src="/로고.png" />
          </Level>
          <ProgressBar>
            <Progress></Progress>
          </ProgressBar>
          <BtnContainer>
            <Button onClick={feedingCounter}>피딩기록</Button>
            <Button onClick={InfoModalOn} className="info">
              수조정보
            </Button>
            <Button>환수기록</Button>
          </BtnContainer>
        </MidContainer>

        {/* -------------------- 달력 ------------------- */}
        <CalendarContainer>
          <Control>
            <CalendarBtn
              onClick={() => {
                setMoment(getMoment.clone().subtract(1, "month"));
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="2x" color="#108dee" />
            </CalendarBtn>
            <Span>{today.format("YYYY 년 MM 월")}</Span>
            <CalendarBtn
              onClick={() => {
                setMoment(getMoment.clone().add(1, "month"));
              }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                size="2x"
                color="#108dee"
              />
            </CalendarBtn>
          </Control>
          <WeekContainer>
            <Day className="sun">일</Day>
            <Day>월</Day>
            <Day>화</Day>
            <Day>수</Day>
            <Day>목</Day>
            <Day>금</Day>
            <Day className="sat">토</Day>
          </WeekContainer>
          <Table>
            <Tbody>{calendarArr()}</Tbody>
          </Table>
        </CalendarContainer>

        {/* ----------------------------------------- */}

        <ManageDetCard />
      </OuterContainer>
      {infoModal ? (
        <AquaInfo onCancel={InfoModalOff} visible={infoModal} />
      ) : (
        ""
      )}
    </>
  );
}
export default ManageDetail;