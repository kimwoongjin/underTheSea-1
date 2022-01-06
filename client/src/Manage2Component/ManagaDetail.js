import React, { useState } from "react";
import styled from "styled-components";
import Header2 from "../component/Header2";
import ManageDetCard from "./ManageDetCard";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";

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
  border-bottom: 2px solid #108dee;
  border-bottom-left-radius: 25px;
`;
const Lv = styled.div`
  width: 20%;
  background: #108dee;
  height: 100%;
  border-bottom: 1px solid #108dee;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

const Lv2 = styled.div`
  position: absolute;
  top: 0px;
  left: 20%;
  width: 20%;
  background: white;
  height: 100%;
  border-bottom: 1px solid #108dee;
  /* border-top-right-radius: 30px; */
  /* border-top-left-radius: 30px; */
  border-bottom-left-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  z-index: 99;
`;
const Lv3 = styled.div`
  position: absolute;
  top: 0px;
  left: 20%;
  width: 20%;
  background: #108dee;
  height: 100%;
  border-bottom: 1px solid #108dee;
  /* border-top-right-radius: 25px; */
  /* border-top-left-radius: 25px; */
  /* border-bottom-left-radius: 25px; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
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
const Icon = styled.div`
  width: 20%;
  height: 100%;
`;
const Img = styled.img`
  width: 10%;
  height: 15%;
  /* margin: 10% 0 0 28%; */
`;

const OuterContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  flex-direction: column;
`;

const Detail = styled.div`
  margin-right: 15%;
`;
const Level = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
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

const Bar = styled.div`
  padding: 2px;
  box-sizing: border-box;
  display: flex;
  /* border-radius: 5px; */
  width: 50%;
  height: 5px;
  background: #108dee;
  margin-bottom: 15px;
  /* border: 2px solid #108dee; */
`;
//--------------------------------------------
const ProgressBar = styled.div`
  padding: 2px;
  box-sizing: border-box;
  display: flex;
  border-radius: 5px;
  width: 50%;
  height: 4vh;
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
const ContainerB = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 4vh;
  margin-top: 1%;
  /* border: 1px solid red; */
`;
const BtnCover = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: flex-end;
  width: 30%;
`;
const ButtonL = styled.button`
  width: 45%;
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
  margin-right: 5%;
  background: #108dee;
  border: 2px solid #108dee;
  color: white;
  font-size: 1rem;
`;
const ButtonR = styled.button`
  width: 45%;
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
  background: #108dee;
  border: 2px solid #108dee;
  color: white;
  font-size: 1rem;
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
//--------------------------------------------
const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  width: 50%;
  height: 30px;
  border-radius: 5px;
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
`;
const InfoCover = styled.div`
  width: 30%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #108dee;
  font-size: 1rem;
  font-weight: bold;
  width: 50%;
  height: 100%;
  /* background: #108dee; */
`;

const InfoShow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border: 2px solid #108dee;
  border-radius: 5px;
`;

//--------------------------------------------

// const Feeding = styled.div`
//   border: 1px solid black;
//   width: 46.5%;
//   height: 17vh;
//   margin-right: 7%;
//   border-radius: 30px;
//   background: #108dee;
//   border: 2px solid #108dee;
// `;
// const Changing = styled.div`
//   border: 1px solid black;
//   width: 46.5%;
//   height: 17vh;
//   border-radius: 30px;
//   background: #108dee;
//   border: 2px solid #108dee;
// `;
// const TextN = styled.div`
//   color: white;
//   text-align: center;
//   font-size: 2rem;
//   margin-top: 8%;
// `;
// const Input = styled.input`
//   background: white;
//   border: none;
//   width: 60%;
//   height: 22%;
//   border-radius: 10px;
//   margin: 6% 0 0 20%;
// `;

//------------------- 캘린더 --------------------
const CalendarContainer = styled.div`
  width: 50%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Table = styled.table``;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  display: flex;
  flex-direction: row;
`;
const Number = styled.span`
  display: flex;
  width: 100%;
  height: 20px;
  border-bottom: 1px solid black;
`;

const Td = styled.td`
  display: flex;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 1rem;
  width: 6vw;
  height: 11vh;
  margin: 1px;
`;
const WeekContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
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
  width: 6.15vw;
  height: 3vh;
  margin: 1px;
`;
function showText(e) {
  console.log(e.target.value);
}

function ManageDetail() {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment; // today == moment()   입니다.
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

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
          <Lv>3</Lv>
          <Lv2></Lv2>
          <Lv3></Lv3>
          <Text>구피와 구구 어항</Text>
          <Icon></Icon>
        </TextContainer>

        {/* <Img src="/물방울L.png" alt="" /> */}
      </Container>
      {/* ----------------------------------------- */}
      <OuterContainer>
        <ImgContainer>
          <MainImg src="/관리어항.png" alt="" />
        </ImgContainer>
        {/* ----------------------------------------- */}
        <InfoBar>
          <InfoCover>
            <Info>
              <FontAwesomeIcon icon={faFish} color="#108dee" size="2x" />
            </Info>
            <InfoShow>14마리</InfoShow>
          </InfoCover>

          <InfoCover>
            <Info>주간 피딩횟수</Info>
            <InfoShow>8회</InfoShow>
          </InfoCover>

          <InfoCover>
            <Info>주간 환수횟수</Info>
            <InfoShow>2회</InfoShow>
          </InfoCover>
        </InfoBar>
        {/* <Bar></Bar> */}
        <ProgressBar>
          <Progress></Progress>
        </ProgressBar>
        {/* ----------------------------------------- */}
        <ContainerB>
          <Level></Level>
          <BtnCover>
            <ButtonL>피딩기록</ButtonL>
            <ButtonR>환수기록</ButtonR>
          </BtnCover>
        </ContainerB>

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
    </>
  );
}
export default ManageDetail;
