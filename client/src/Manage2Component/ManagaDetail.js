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
  /* background-color: rgba(51, 153, 255, 0.1); */
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
  /* width: 50%; */
  color: #008eff;
  font-weight: bold;
  font-family: "Kfont";
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
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
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 4vh;
  margin-top: 1%;
  /* border: 1px solid red; */
`;

const HelpBtn = styled.div`
  display: flex;
  /* text-align: right; */
  justify-content: flex-end;
  align-items: center;
  color: #108dee;
  font-weight: bold;
  /* width: 11%; */
  font-family: "Kfont";
  /* border: 1px solid blue; */
  cursor: pointer;
`;

const AddfishBtn = styled.div`
  display: flex;
  /* text-align: right; */
  justify-content: flex-end;
  align-items: center;
  color: #108dee;
  font-weight: bold;
  margin: 0px 20px;
  /* width: 11%; */
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
  /* width: 11%; */
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
  width: ${(props) => props.EXP};
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
  /* background: white; */
  background-color: rgba(51, 153, 255, 0);
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
  box-sizing: border-box;
  padding-left: 5px;
  display: flex;
  width: 100%;
  height: 20px;
  /* border: 1px solid black; */
`;

const Td = styled.td`
  display: flex;
  /* border: 1px solid rgba(51, 153, 255, 0.3); */
  border: 1px solid black;
  /* justify-content: center; */
  background: white;
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
function ManageDetail({ condata, handleCondata }) {
  //

  //변수 선언부분
  const params = useParams();
  const container_id = params.container_id;
  let exAmount = 0;
  let exWaterObj = {};
  const month = new Date().getMonth() + 1;
  let todayString = new Date().toISOString().split("T")[0].split("-");
  todayString = todayString[0].slice(2) + todayString[1] + todayString[2];

  const accessToken = localStorage.getItem("accessToken");
  const conInfo = JSON.parse(localStorage.getItem("conInfo"));

  const [finalList, setFinalList] = useState([]);
  const [progressBar, setProgressBar] = useState(0);
  const [getMoment, setMoment] = useState(moment());

  const [exwaterInfo, setExwaterInfo] = useState({
    container_id,
    amount: "",
  });
  const [feedingInfo, setFeedingInfo] = useState({
    container_id,
    type: "",
  });

  const dispatch = useDispatch();
  const state = useSelector((state) => state.modalReducer);
  const {
    isMyAquariumInfoModal,
    isFeedingModal,
    isAddfishModal,
    isDeadfishModal,
    isExchangeModal,
    isHelpModal,
  } = state;

  const today = getMoment; // today == moment()   입니다.
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();
  console.log(today, todayString);
  //함수선언부분
  //
  // [...'220119', '220120', '220121'] 형태로 return
  const GetCurrentWeek = () => {
    const day = new Date();
    day.setHours(day.getHours() + 9);
    const sunday = day.getTime() - 86400000 * day.getDay();
    day.setTime(sunday);
    let result = [day.toISOString().slice(0, 10)];
    for (let i = 1; i < 7; i++) {
      day.setTime(day.getTime() + 86400000);
      result.push(day.toISOString().slice(0, 10));
    }
    result = result.map((day) => (day = day.split("-").join("").slice(2)));
    return result;
  };
  //
  // return 값 없음. 그냥 바로 condata 갱신
  const UpdateConInfo = async () => {
    const res = await axios.get(
      `http://localhost:80/container/${container_id}/${month}`,
      {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      }
    );
    console.log("RES FROM getConinfo", res.data);
    handleCondata(res.data.data);
  };
  //
  //
  const AddFeedRequest = async () => {
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
    handleCondata(response.data.data);
  };
  //
  //
  const AddWaterRequest = async () => {
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
    handleCondata(response.data.data);
  };

  const LevelUpRequest = async () => {
    const response = await axios.patch(
      `http://localhost:80/container/${container_id}/level`,
      {},
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );
    localStorage.setItem("conInfo", JSON.stringify(response.data.data));
    handleCondata(response.data.data);
  };

  //
  // return 값 없음. 바로 finalList 갱신
  const UpdateFinalList = () => {
    let final_list = {};
    condata.feed_list.forEach((el1) => {
      let one_day_list = condata.feed_list.filter(
        (el2) => el1.createdAt === el2.createdAt
      );
      let array = [0, 0, 0, 0];
      one_day_list.forEach((el) => (array[el.type - 1] = el.count));
      final_list[el1.createdAt] = array;
    });
    setFinalList(final_list);
  };
  //
  // return값 없음. 바로 progressBar 갱신  && 조건 충족하면 레벨 업도 요청
  const UpdateProgressBar = () => {
    let temp = [];
    const curWeek = GetCurrentWeek();
    condata.ex_water_list.forEach((el) => {
      if (!exWaterObj[el.createdAt]) {
        exWaterObj[el.createdAt] = el.amount;
      } else {
        exWaterObj[el.createdAt] += el.amount;
      }
    });
    for (let key in finalList) {
      if (curWeek.includes(key)) {
        let sum = finalList[key].reduce((a, b) => a + b);
        for (let i = 0; i < sum; i++) {
          temp.push(1);
        }
      }
    }
    if (!temp.includes(2)) {
      for (let key in exWaterObj) {
        if (curWeek.includes(key)) temp.push(2);
        break;
      }
    }

    if (temp.length >= 15 && temp.includes(2)) {
      LevelUpRequest();
    }

    setProgressBar(Math.floor((temp.length * 100) / 15));
  };
  //
  // 캘린더 어레이 레이아웃을 리턴
  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    console.log("condata when calendarArr runs", condata);
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
                            {finalList[days.format("YYMMDD")] === undefined
                              ? 0
                              : finalList[days.format("YYMMDD")][0]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/플레이크.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")] === undefined
                              ? 0
                              : finalList[days.format("YYMMDD")][1]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/냉동.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")] === undefined
                              ? 0
                              : finalList[days.format("YYMMDD")][2]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/생먹이.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")] === undefined
                              ? 0
                              : finalList[days.format("YYMMDD")][3]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                    </FoodIconContainer>
                    <ExWaterRecord>
                      {exWaterObj[days.format("YYMMDD")]}L
                    </ExWaterRecord>
                  </Td>
                );
              } else if (finalList[days.format("YYMMDD")]) {
                //오늘은 아니지만 기록이 있을 때
                return (
                  <Td key={index}>
                    <Number>{days.format("D")}</Number>
                    <FoodIconContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/펠렛.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")][0]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/플레이크.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")][1]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/냉동.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")][2]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/생먹이.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")][3]}
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
  //

  //
  // handler 함수 선언
  const handleExwaterValue = (e) => {
    setExwaterInfo({
      ...exwaterInfo,
      amount: e.target.value,
    });
  };
  //
  //
  const handleFeedAddRequest = async () => {
    try {
      AddFeedRequest();
      UpdateFinalList();
      UpdateProgressBar();
      dispatch(modalOff);
    } catch (err) {
      console.log(err);
    }
  };
  //
  //
  const handleExwaterAddRequest = async () => {
    try {
      AddWaterRequest();
      UpdateFinalList();
      UpdateProgressBar();
      dispatch(modalOff);
    } catch (err) {
      console.log(err);
    }
  };
  //
  //
  const handleFoodtype = (e) => {
    setFeedingInfo({
      ...feedingInfo,
      type: e.target.name,
    });
  };

  //
  // 함수 실행 부분
  useEffect(() => {
    UpdateConInfo();
    UpdateFinalList();
    UpdateProgressBar();
  }, []);

  let total = 0;
  for (let i = 0; i < condata.fish_list.length; i++) {
    total += condata.fish_list[i].fish_num;
  }
  let todayEx = condata.ex_water_list.filter(
    (el) => el.createdAt === todayString
  );

  for (let i = 0; i < todayEx.length; i++) {
    exAmount += todayEx[i].amount;
  }
  const imgSrcUrl = "http://localhost:80/level/" + condata.level;
  console.log("PLZ", condata);
  return (
    <>
      <Header2 />
      <Container>
        <Title>My Aquarium</Title>
        <TextContainer>
          <Text>{condata.container_name}</Text>
        </TextContainer>
      </Container>
      <OuterContainer>
        <ImgContainer>
          <MainImg src={imgSrcUrl} alt="" />
        </ImgContainer>
        {/* ----------------------------------------- */}

        {/* ----------------------- */}

        <MidContainer>
          {/* ----------------------------------------- */}
          <Level>
            <LevelCover>
              <LevelText>Lv.</LevelText>
              <Levelinfo>{Math.floor(condata.level / 10)}</Levelinfo>
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

        {/* <ManageDetCard condata={condata} /> */}
      </OuterContainer>
      {isMyAquariumInfoModal && (
        <AquaInfo
          condata={condata}
          total={total}
          container_id={container_id}
          month={month}
        />
      )}
      {isFeedingModal && (
        <FeedingInput
          handleFeedAddRequest={handleFeedAddRequest}
          handleFoodtype={handleFoodtype}
          feedingInfo={feedingInfo}
        />
      )}
      {isExchangeModal && (
        <ExChangeWaterInput
          handleExwaterValue={handleExwaterValue}
          handleExwaterAddRequest={handleExwaterAddRequest}
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
