import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header2 from "../component/Header2";
import ManageDetCard from "./ManageDetCard";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FeedingInput from "../modalComponent/FeedingInput";
import AquaInfo from "../modalComponent/AquaInfo";
import ExChangeWaterInput from "../modalComponent/ExChangeWaterInput";
import AddFish from "../modalComponent/Addfish";
import Deadfish from "../modalComponent/Deadfish";
import { useSelector, useDispatch } from "react-redux";
import { modalOff } from "../store/actions";
import {
  myAquariumInfoModalOnAction,
  feedingInputModalOnAction,
  exchangeWaterModalOnAction,
  addfishModalOnAction,
  deadfishModalOnAction,
} from "../store/actions";
import axios from "axios";
import { useParams } from "react-router-dom";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40vh;
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
`;

const Text = styled.div`
  width: 60%;
  font-weight: bold;
  font-size: 1.6rem;
  text-align: center;
  line-height: 180%;
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
  height: 40px;
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
  font-family: "Kfont";
`;
const ImgContainer = styled.div`
  width: 50%;
  height: 40%;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

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
  /* background-color: rgba(102, 178, 255, 0.2); */
  background-color: rgba(51, 153, 255, 0.1);
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 4vh;
  margin-top: 1%;
  /* border: 1px solid red; */
`;
const AddfishBtn = styled.div`
  display: flex;
  /* text-align: right; */
  justify-content: flex-end;
  align-items: center;
  color: #108dee;
  font-weight: bold;
  width: 11%;
  font-family: "Kfont";
  /* border: 1px solid blue; */
  cursor: pointer;
`;
const DeadfishBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  align-items: center;
  color: #108dee;
  width: 11%;
  font-family: "Kfont";
  font-weight: bold;
  /* border: 1px solid blue; */
  cursor: pointer;
`;

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
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 6vh;
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
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
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

const FoodIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  /* border: 2px solid royalblue; */
`;

const FoodInnerContainer = styled.div`
  display: flex;
  /* border: 1px dashed red; */
`;

const ExWaterRecord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  width: 90%;
  height: 30px;
  border: 1px solid gray;
  border-radius: 4px;
  margin-top: 2px;
`;

const FoodTypeAndNum = styled.div`
  display: flex;
`;

const FeedingNum = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

const FoodIcon = styled.img`
  width: 40%;
  /* border: 1px solid blue; */
`;

function ManageDetail() {
  let params = useParams();

  let container_id = params.container_id;

  const month = new Date().getMonth() + 1;

  const [feedingInfo, setFeedingInfo] = useState({
    container_id,
    type: "",
  });
  const accessToken = localStorage.getItem("accessToken");
  // console.log("엑세스토큰--> ", accessToken);
  const [exwaterInfo, setExwaterInfo] = useState({
    container_id,
    amount: "",
  });

  const handleExwaterValue = (e) => {
    setExwaterInfo({
      ...exwaterInfo,
      amount: e.target.value,
    });
  };

  // --------- 환수데이터 가공 ---------
  // let exAmount = 0;

  // let thisYear = new Date().getFullYear();
  // let thisMonth = new Date().getMonth() + 1;
  // let thisDay = new Date().getDate();
  // if (thisMonth < 10) {
  //   thisMonth = "0" + String(thisMonth);
  // } else {
  //   thisMonth = String(thisMonth);
  // }
  // thisYear = String(thisYear);
  // thisDay = String(thisDay);
  // const thisToday = thisYear + thisMonth + thisDay;
  // // thisToday

  // let todayEx = conInfo.ex_water_list.filter(
  //   (el) => el.createdAt === thisToday
  // );

  // for (let i = 0; i < todayEx.length; i++) {
  //   exAmount += todayEx[i].amount;
  // }

  // -------------------------------

  const exwaterAddRequest = () => {
    axios
      .post(
        `http://localhost:80/container/${container_id}/ex_water`,
        {
          data: exwaterInfo,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("환수기록추가응답 --> ", res.data.data.ex_water_list);

        // let water = getExAmount();
        // console.log("환수총량", exAmount);
        // setExWaterAmount(water);
        levelup();
        dispatch(modalOff);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // console.log("유즈이펙트는 실행되니?", container_id);
    axios
      .get(
        `http://localhost:80/container/${container_id}/${month}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("response:", res.data.data);
        localStorage.setItem("conInfo", JSON.stringify(res.data.data));
      })
      .catch((err) => console.log(err));
  }, []);

  // container_id: 1
  // container_name: "WOW"
  // ex_water_list: Array(4)
  // 0:
  // amount: 13
  // createdAt: "2022-01-20T13:46:46.000Z"
  // [[Prototype]]: Object
  // 1: {createdAt: '2022-01-14T08:44:39.000Z', amount: 1}
  // 2: {createdAt: '2022-01-13T13:46:46.000Z', amount: 22}
  // 3: {createdAt: '2022-01-11T13:46:46.000Z', amount: 20}
  // length: 4

  const conInfo = JSON.parse(localStorage.getItem("conInfo"));
  console.log("conInfo", conInfo);

  // ----- 해당수조 총 물고기수 ------
  let total = 0;
  for (let i = 0; i < conInfo.fish_list.length; i++) {
    total += conInfo.fish_list[i].fish_num;
  }
  console.log("토탈", total);
  // ----------------------------

  let exWater = {};
  let exAmount = 0;
  let thisYear = new Date().getFullYear();
  let thisMonth = new Date().getMonth() + 1;
  let thisDay = new Date().getDate();
  if (thisMonth < 10) {
    thisMonth = "0" + String(thisMonth);
  } else {
    thisMonth = String(thisMonth);
  }
  thisYear = String(thisYear);
  thisDay = String(thisDay);
  let thisToday = thisYear + thisMonth + thisDay;
  thisToday = thisToday.slice(2);
  let todayEx = conInfo.ex_water_list.filter(
    (el) => el.createdAt === thisToday
  );

  for (let i = 0; i < todayEx.length; i++) {
    exAmount += todayEx[i].amount;
  }

  const imgSrcUrl = "http://localhost:80/level/" + conInfo.level;
  // const conExInfo = JSON.parse(localStorage.getItem("conExInfo"));
  // 환수데이터가공

  let exWaterObj = {};
  conInfo.ex_water_list.forEach((el) => {
    if (!exWaterObj[el.createdAt]) {
      exWaterObj[el.createdAt] = el.amount;
    } else {
      exWaterObj[el.createdAt] += el.amount;
    }

    // console.log(oneDayList)
  });
  console.log("환수객체", exWaterObj);

  // --------- 피딩데이터 가공 ---------

  let final_list = {};
  conInfo.feed_list.forEach((el1) => {
    let one_day_list = conInfo.feed_list.filter(
      (el2) => el1.createdAt === el2.createdAt
    );
    let array = [0, 0, 0, 0];
    one_day_list.forEach((el) => (array[el.type - 1] = el.count));
    final_list[el1.createdAt] = array;
  });

  // --------------------------------

  console.log("파이널 리스트 ", conInfo.feed_list);

  const levelup = async () => {
    function getWeekDates() {
      let now = new Date();
      let dayOfWeek = now.getDay(); //0-6
      let numDay = now.getDate();

      let start = new Date(now); //copy
      start.setDate(numDay - dayOfWeek);
      start.setHours(0, 0, 0, 0);

      let end = new Date(now); //copy
      end.setDate(numDay + (7 - dayOfWeek));
      end.setHours(0, 0, 0, 0);
      start = moment(start).format(`YYMMDD`);
      end = moment(end).format(`YYMMDD`);
      return [start, end];
    }

    let [start, end] = getWeekDates();

    let filterd_feed_list = conInfo.feed_list.filter((el) => {
      let day = el.createdAt;
      return day >= start && day <= end;
    });
    let filter_water_list = conInfo.ex_water_list.filter((el) => {
      console.log("WHAT WHAT", el);
      let day = el.createdAt;
      return day >= start && day <= end;
    });
    console.log(
      `feed count:${filterd_feed_list.length}, water count: ${filter_water_list.length}`
    );
    if (filterd_feed_list.length >= 13 && filter_water_list.length === 1) {
      axios.get("http://localhost:80/container/level");
    }
  };

  // const feed_data = JSON.parse(localStorage.getItem("feed_list"));
  // console.log(feed_data);

  const state = useSelector((state) => state.modalReducer);
  const {
    isMyAquariumInfoModal,
    isFeedingModal,
    isAddfishModal,
    isDeadfishModal,
    isExchangeModal,
  } = state;
  const dispatch = useDispatch();
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment; // today == moment()   입니다.
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const calendarArr = () => {
    // console.log("From Cal", final_list);
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
              if (
                // final_list[days.format("YYMMDD")] &&
                moment().format("YYYYMMDD") === days.format("YYYYMMDD")
              ) {
                //오늘이고 기록도 있을때
                return (
                  <Td key={index}>
                    <Number style={{ color: "#108dee" }}>
                      {days.format("D")}
                    </Number>
                    <FoodIconContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="/펠렛.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")] === undefined
                              ? 0
                              : final_list[days.format("YYMMDD")][0]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="/플레이크.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")] === undefined
                              ? 0
                              : final_list[days.format("YYMMDD")][1]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="/냉동.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")] === undefined
                              ? 0
                              : final_list[days.format("YYMMDD")][2]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="/생먹이.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")] === undefined
                              ? 0
                              : final_list[days.format("YYMMDD")][3]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                    </FoodIconContainer>
                    <ExWaterRecord>
                      {exWaterObj[days.format("YYMMDD")]}L
                    </ExWaterRecord>
                  </Td>
                );
              } else if (final_list[days.format("YYMMDD")]) {
                //오늘은 아니지만 기록이 있을 때
                return (
                  <Td key={index}>
                    <Number>{days.format("D")}</Number>
                    <FoodIconContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="/펠렛.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")][0]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="/플레이크.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")][1]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="/냉동.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")][2]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="/생먹이.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")][3]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer></FoodInnerContainer>
                      {/* 여기서 exAmount 이거로 랜더링 하면됨 */}
                      <ExWaterRecord>
                        {exWaterObj[days.format("YYMMDD")] === undefined
                          ? 0
                          : exWaterObj[days.format("YYMMDD")]}
                        L
                      </ExWaterRecord>
                    </FoodIconContainer>
                  </Td>
                );
              } else if (
                moment().format("YYYYMMDD") === days.format("YYYYMMDD")
              ) {
                //오늘
                return (
                  <Td key={index}>
                    <Number style={{ color: "#108dee" }}>
                      {days.format("D")}
                    </Number>
                  </Td>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  //지난 달
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
                  //모든 경우를 제외한 평범한 날
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

  const handleFoodtype = (e) => {
    setFeedingInfo({
      ...feedingInfo,
      type: e.target.name,
    });
  };

  const addFeedingNum = () => {
    axios
      .post(
        `http://localhost:80/container/${container_id}/feed`,
        {
          data: feedingInfo,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        levelup();
        dispatch(modalOff);
      });

    // console.log("feedingInfo", feedingInfo);
    // console.log("NEW!!!!!!!! response:", response.data.data);
  };

  return (
    <>
      <Header2 />

      <Container>
        <Title>My Aquarium</Title>
        <TextContainer>
          {/* <Text>Hello</Text> */}
          <Text>{conInfo.container_name}</Text>
          {/* <Text>수조</Text> */}
        </TextContainer>
      </Container>
      {/* ----------------------------------------- */}
      <OuterContainer>
        <ImgContainer>
          <MainImg src={imgSrcUrl} alt="" />
          {/* <MainImg src="/관리어항.png" alt="" /> */}
        </ImgContainer>
        {/* ----------------------------------------- */}

        {/* ----------------------- */}

        <MidContainer>
          {/* ----------------------------------------- */}
          <Level>
            <LevelCover>
              <LevelText>Lv.</LevelText>
              <Levelinfo></Levelinfo>
            </LevelCover>
            <Logo src="/로고.png" />
          </Level>
          <ProgressBar>
            <Progress></Progress>
          </ProgressBar>
          <BtnContainer>
            <Button onClick={() => dispatch(feedingInputModalOnAction)}>
              피딩기록
            </Button>
            <Button
              onClick={() => dispatch(myAquariumInfoModalOnAction)}
              className="info"
            >
              수조정보
            </Button>
            <Button onClick={() => dispatch(exchangeWaterModalOnAction)}>
              환수기록
            </Button>
          </BtnContainer>
        </MidContainer>
        <BottomContainer>
          <AddfishBtn onClick={() => dispatch(addfishModalOnAction)}>
            물고기추가
          </AddfishBtn>
          <DeadfishBtn onClick={() => dispatch(deadfishModalOnAction)}>
            용궁기록
          </DeadfishBtn>
        </BottomContainer>
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

        <ManageDetCard conInfo={conInfo} />
      </OuterContainer>
      {isMyAquariumInfoModal && (
        <AquaInfo
          conInfo={conInfo}
          total={total}
          container_id={container_id}
          month={month}
        />
      )}
      {isFeedingModal && (
        <FeedingInput
          addFeedingNum={addFeedingNum}
          handleFoodtype={handleFoodtype}
          feedingInfo={feedingInfo}
        />
      )}
      {isExchangeModal && (
        <ExChangeWaterInput
          handleExwaterValue={handleExwaterValue}
          exwaterAddRequest={exwaterAddRequest}
        />
      )}
      {isAddfishModal && <AddFish container_id={container_id} />}
      {isDeadfishModal && <Deadfish container_id={container_id} />}
    </>
  );
}
export default ManageDetail;
