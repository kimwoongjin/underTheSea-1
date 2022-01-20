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
import HelpInfo from "../modalComponent/HelpInfo";
import Footer from "../component/Footer";
import { useSelector, useDispatch } from "react-redux";
import { modalOff } from "../store/actions";
import {
  myAquariumInfoModalOnAction,
  feedingInputModalOnAction,
  exchangeWaterModalOnAction,
  addfishModalOnAction,
  deadfishModalOnAction,
  helpInfoModalOnAction,
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
  margin-bottom: 15%;
`;

const FishCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10%;
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
  margin-left: 10px;
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
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 1%;
  align-items: center;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 4vh;
  margin-top: 1%;
`;

const HelpBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #108dee;
  font-weight: bold;
  font-family: "Kfont";
  cursor: pointer;
`;

const AddfishBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #108dee;
  font-weight: bold;
  margin: 0px 20px;
  font-family: "Kfont";
  cursor: pointer;
`;
const DeadfishBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  align-items: center;
  color: #108dee;
  font-family: "Kfont";
  font-weight: bold;
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
  width: ${(props) => props.EXP};
  height: 3vh;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: linear-gradient(#00d2ff, #3a7bd5);
`;

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
  cursor: pointer;
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
  background-color: rgba(51, 153, 255, 0);
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
  box-sizing: border-box;
  padding-left: 5px;
  display: flex;
  width: 100%;
  height: 20px;
`;

const Td = styled.td`
  display: flex;
  border: 1px solid black;
  background: white;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  width: 6.8vw;
  height: 13vh;
`;
const WeekContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  width: 7vw;
  height: 3vh;
`;

const FoodIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
`;

const FoodInnerContainer = styled.div`
  display: flex;
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
`;

const FoodIcon = styled.img`
  width: 40%;
`;

// -----------------------------------------------

const ContainerS = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px #adb5bd;
  border-radius: 10px;
  width: 50%;
  height: 20vh;
  margin-bottom: 7%;
`;

const DetailImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 25%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
`;

const ImgD = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 75%;
  height: 20vh;
`;

const LeftInfo = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px 0px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100%;
`;

const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;

const FishDesc = styled.div`
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 10px;
  width: 100%;
  height: 90%;
  font-size: 1rem;
  line-height: 140%;
  border-left: 1.5px solid #e5e5e5;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 20%;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "Kfont";
`;

const HabitatContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Habitat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: "Kfont";
  width: 50%;
  height: 100%;
`;

const HabitatShow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
  width: 50%;
  height: 100%;
`;

// -----------------------------------------------

function ManageDetail() {
  let params = useParams();
  let container_id = params.container_id;
  const month = new Date().getMonth() + 1;
  const [feedingInfo, setFeedingInfo] = useState({
    container_id,
    type: "",
  });
  const [expArr, setExpArr] = useState([]);
  const [progressBar, SetProgressBar] = useState(0);
  const accessToken = localStorage.getItem("accessToken");
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

  // ----------------- 일주일 뽑기 ------------------

  const getCurrentWeek = () => {
    const day = new Date();
    day.setHours(day.getHours() + 9);
    const sunday = day.getTime() - 86400000 * day.getDay();
    day.setTime(sunday);
    const result = [day.toISOString().slice(0, 10)];
    for (let i = 1; i < 7; i++) {
      day.setTime(day.getTime() + 86400000);
      result.push(day.toISOString().slice(0, 10));
    }
    return result;
  };

  let thisWeek = getCurrentWeek();
  let curWeek = thisWeek.map((day) => (day = day.split("-").join("").slice(2)));

  useEffect(() => {
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
        localStorage.setItem("conInfo", JSON.stringify(res.data.data));
        let final_list = {};
        conInfo.feed_list.forEach((el1) => {
          let one_day_list = conInfo.feed_list.filter(
            (el2) => el1.createdAt === el2.createdAt
          );
          let array = [0, 0, 0, 0];
          one_day_list.forEach((el) => (array[el.type - 1] = el.count));
          final_list[el1.createdAt] = array;
        });

        let temp = [];
        for (let key in final_list) {
          if (curWeek.includes(key)) {
            let sum = final_list[key].reduce((a, b) => a + b);
            for (let i = 0; i < sum; i++) {
              temp.push(1);
            }
          }
        }

        let exWaterObj = {};
        conInfo.ex_water_list.forEach((el) => {
          if (!exWaterObj[el.createdAt]) {
            exWaterObj[el.createdAt] = el.amount;
          } else {
            exWaterObj[el.createdAt] += el.amount;
          }
        });

        if (!expArr.includes(2)) {
          for (let key in exWaterObj) {
            if (curWeek.includes(key)) temp.push(2);
            break;
          }
        }

        setExpArr(temp);
        EXP = temp.length === 0 ? 0 : Math.floor((temp.length * 100) / 15);
        SetProgressBar(EXP);
      })
      .catch((err) => console.log(err));
  }, []);

  const exwaterAddRequest = async () => {
    try {
      const response = await axios.post(
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
      );
      localStorage.setItem("conInfo", JSON.stringify(response.data.data));

      // --------------------------------

      let exWaterObj = {};
      conInfo.ex_water_list.forEach((el) => {
        if (!exWaterObj[el.createdAt]) {
          exWaterObj[el.createdAt] = el.amount;
        } else {
          exWaterObj[el.createdAt] += el.amount;
        }
      });

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

      let temp = [];
      for (let key in final_list) {
        if (curWeek.includes(key)) {
          let sum = final_list[key].reduce((a, b) => a + b);
          for (let i = 0; i < sum; i++) {
            temp.push(1);
          }
        }
      }

      if (!expArr.includes(2)) {
        for (let key in exWaterObj) {
          if (curWeek.includes(key)) temp.push(2);
          break;
        }
      }
      setExpArr(temp);
      EXP = temp.length === 0 ? 0 : Math.floor((temp.length * 100) / 15);
      SetProgressBar(EXP);
      dispatch(modalOff);
    } catch (err) {
      console.log(err);
    }
  };

  const conInfo = JSON.parse(localStorage.getItem("conInfo"));

  // ----- 해당수조 총 물고기수 ------

  let total = 0;
  for (let i = 0; i < conInfo.fish_list.length; i++) {
    total += conInfo.fish_list[i].fish_num;
  }

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

  let exp = [];
  const state = useSelector((state) => state.modalReducer);
  const {
    isMyAquariumInfoModal,
    isFeedingModal,
    isAddfishModal,
    isDeadfishModal,
    isExchangeModal,
    isHelpModal,
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
                //오늘이고 기록도 있을때
                return (
                  <Td key={index}>
                    <Number style={{ color: "#108dee" }}>
                      {days.format("D")}
                    </Number>
                    <FoodIconContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/펠렛.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")] === undefined
                              ? 0
                              : final_list[days.format("YYMMDD")][0]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/플레이크.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")] === undefined
                              ? 0
                              : final_list[days.format("YYMMDD")][1]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/냉동.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")] === undefined
                              ? 0
                              : final_list[days.format("YYMMDD")][2]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/생먹이.png" />
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
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/펠렛.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")][0]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/플레이크.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")][1]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/냉동.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")][2]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/생먹이.png" />
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
  let EXP;

  const addFeedingNum = async () => {
    try {
      const response = await axios.post(
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
      );
      localStorage.setItem("conInfo", JSON.stringify(response.data.data));

      //---------------

      let exWaterObj = {};
      conInfo.ex_water_list.forEach((el) => {
        if (!exWaterObj[el.createdAt]) {
          exWaterObj[el.createdAt] = el.amount;
        } else {
          exWaterObj[el.createdAt] += el.amount;
        }
      });

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

      let temp = [];
      for (let key in final_list) {
        if (curWeek.includes(key)) {
          let sum = final_list[key].reduce((a, b) => a + b);
          for (let i = 0; i < sum; i++) {
            temp.push(1);
          }
        }
      }
      if (!expArr.includes(2)) {
        for (let key in exWaterObj) {
          if (curWeek.includes(key)) temp.push(2);
          break;
        }
      }
      setExpArr(temp);
      EXP = temp.length === 0 ? 0 : Math.floor((temp.length * 100) / 15);
      SetProgressBar(EXP);
      if (expArr.length >= 15 && expArr.includes(2)) {
        axios
          .patch(
            `http://localhost:80/container/level/${container_id}`,
            {},
            {
              headers: {
                authorization: `Bearer ${accessToken}`,
              },
              withCredentials: true,
            }
          )
          .then((res) => {
            localStorage.setItem("conInfo", JSON.stringify(res.data.data));
            if (
              res.message === "You've already leveled up this week" ||
              res.message === "You've reached max level"
            ) {
            }
            // SetProgressBar([]);
            // setExpArr([]);
          })
          .catch((err) => console.log(err));
      }
      dispatch(modalOff);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header2 />
      <Container>
        <Title>My Aquarium</Title>
        <TextContainer>
          <Text>{conInfo.container_name}</Text>
        </TextContainer>
      </Container>
      {/* ----------------------------------------- */}
      <OuterContainer>
        <ImgContainer>
          <MainImg src={imgSrcUrl} alt="" />
        </ImgContainer>

        {/* ----------------------------------------- */}

        <MidContainer>
          <Level>
            <LevelCover>
              <LevelText>Lv.</LevelText>
              <Levelinfo>{Math.floor(conInfo.level / 10)}</Levelinfo>
            </LevelCover>
            <Logo
              src="https://iconmage.s3.ap-northeast-2.amazonaws.com/로고.png"
              alt="/로고.png"
            />
          </Level>
          <ProgressBar>
            <Progress EXP={`${progressBar}%`}></Progress>
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
          <HelpBtn
            onClick={() => {
              dispatch(helpInfoModalOnAction);
              console.log(isHelpModal);
            }}
          >
            도움말
          </HelpBtn>
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

        {/* <ManageDetCard conInfo={conInfo} /> */}
      </OuterContainer>
      <FishCardContainer>
        {conInfo.fish_list.map((el, idx) => {
          return (
            <ContainerS key={idx}>
              <DetailImg>
                <ImgD src={`http://localhost:80${el.fish_img}`} alt="이미지" />
              </DetailImg>
              {/* ----------------------------------------- */}
              <Content>
                <LeftInfo>
                  <Name>{el.fish_name}</Name>

                  <HabitatContainer>
                    <Habitat>종류</Habitat>
                    <HabitatShow>
                      {el.fresh_water ? "담수어" : "해수어"}
                    </HabitatShow>
                  </HabitatContainer>
                  <HabitatContainer>
                    <Habitat>적정수온</Habitat>
                    <HabitatShow>{el.temp}</HabitatShow>
                  </HabitatContainer>

                  <HabitatContainer>
                    <Habitat>산호합사</Habitat>
                    <HabitatShow>{el.reefsafe ? "O" : "X"}</HabitatShow>
                  </HabitatContainer>
                  <HabitatContainer>
                    <Habitat>마릿수</Habitat>
                    <HabitatShow>{el.fish_num}</HabitatShow>
                  </HabitatContainer>
                </LeftInfo>
                <RightInfo>
                  <FishDesc>{el.desc}</FishDesc>
                </RightInfo>
              </Content>
            </ContainerS>
          );
        })}
      </FishCardContainer>
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
      {isHelpModal && <HelpInfo />}
      <Footer />
    </>
  );
}
export default ManageDetail;
