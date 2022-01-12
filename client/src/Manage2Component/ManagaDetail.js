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
import AddFish from "../modalComponent/Addfish";
import Deadfish from "../modalComponent/Deadfish";
import { useSelector, useDispatch } from "react-redux";
import { modalOff } from "../store/actions";
import {
  myAquariumInfoModalOnAction,
  feedingInputModalOnAction,
  addfishModalOnAction,
  deadfishModalOnAction,
} from "../store/actions";
import axios from "axios";

//경로 "/manage/detailinfo"의 전체 페이지
//물고기 수, 레벨, 어항 이미지, 버튼, 횟수 넘버 기재
//manage 페이지 카드정보 import 순서 manageDetail > manageDetCard > manageInfo

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

// const ProgressBar22 = styled.div`
//   position: absolute;
//   left: 0;
//   width: ${(props) => (props.bar ? props.bar : "50%")};
//   height: 100%;
//   border-top-left-radius: 10px;
//   border-bottom-left-radius: 10px;
//   box-shadow: -5px 0 0 0 #bbdd3e inset;
//   background-color: #a2c523;
// `;

// const [data, setData] = useState({
//   walks: [{ created_at: 0 }],
//   goal: 0,
//   users: [],
// });

// const [src, setSrc] = useState("");
// const [display, setDisplay] = useState("none");
// const [goal_percent, setGoal_Percent] = useState(0);
// const [modal, setModal] = useState(false);
// const Navigate = useNavigate();

// const onCancel = () => {
//   setModal(false);
// };
// const handleClick = () => {
//   setModal(true);
// };

// useEffect(() => {
//   loadingOn();
// }, []);

// useEffect(() => {
//   if (data.goal) {
//     setGoal_Percent(
//       Math.min(100, Math.floor((100 * data.walks.length) / data.goal))
//     );
//   }
// }, [data]);

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
  /* border-radius: 4px; */
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
  /* border: 1px solid red; */
`;

const FoodInnerContainer = styled.div`
  display: flex;
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
  const month = new Date().getMonth();
  const [feedingInfo, setFeedingInfo] = useState({
    pellet_num: 0,
    flake_num: 0,
    frozen_num: 0,
    live_num: 0,
    food_type: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:80/container/id/${month}`)
      .then((res) => {
        const containerData = res.data;
      })
      .catch((err) => console.log(err));
  }, []);

  // {
  //   "data": {
  //     "container_id": 1,
  //     "user_id": 1,
  //     "container_name": "JawsRocks",
  //     "size": 100,
  //     "theme": "SweetHome",
  //     "fish_list": [
  //       {
  //         "fish_name":"Nemo",
  //         "fish_num":5
  //       },{...}
  //       ],
  //     "feed_list": [
  //       {
  //         "date": "2022-01-09",
  //         "type": 1
  //       },
  //       {
  //         "date": "2022-01-10",
  //         "type": 2
  //       }
  //     ],
  //     "ex_water_list": [
  //       {
  //         "date": "2022-01-09",
  //         "amount": 100
  //       },
  //       {
  //         "date": "2022-01-09",
  //         "amount": 50
  //       }
  //     ],
  //   },
  //   "message": "Data is successfully returned"
  // }

  // 타입을 눌렀을 때는 푸드 타입만 바꾸고 선택완료를 누르면 타입과 같은 피딩횟수의 숫자가 상승
  const handleFoodtype = (e) => {
    setFeedingInfo({
      ...feedingInfo,
      food_type: e.target.name,
    });
  };

  const addFeedingNum = () => {
    if (feedingInfo.food_type === "pellet") {
      setFeedingInfo({
        ...feedingInfo,
        pellet_num: feedingInfo.pellet_num + 1,
      });
    } else if (feedingInfo.food_type === "flake") {
      setFeedingInfo({
        ...feedingInfo,
        flake_num: feedingInfo.flake_num + 1,
      });
    } else if (feedingInfo.food_type === "frozen") {
      setFeedingInfo({
        ...feedingInfo,
        frozen_num: feedingInfo.frozen_num + 1,
      });
    } else {
      setFeedingInfo({
        ...feedingInfo,
        live_num: feedingInfo.live_num + 1,
      });
    }
    dispatch(modalOff);
  };

  const state = useSelector((state) => state.modalReducer);
  const {
    isMyAquariumInfoModal,
    isFeedingModal,
    isAddfishModal,
    isDeadfishModal,
  } = state;
  const dispatch = useDispatch();

  const [getMoment, setMoment] = useState(moment());
  const [count, setCount] = useState(0);
  const today = getMoment; // today == moment()   입니다.
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();
  const onIncrease = () => {
    setCount((count) => count + 1);
    dispatch(modalOff);
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
                    <FoodIconContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="/펠렛.png" />
                          <FeedingNum>{feedingInfo.pellet_num}</FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="/플레이크.png" />
                          <FeedingNum>{feedingInfo.flake_num}</FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="/냉동.png" />
                          <FeedingNum>{feedingInfo.frozen_num}</FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="/생먹이.png" />
                          <FeedingNum>{feedingInfo.live_num}</FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                    </FoodIconContainer>
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
          <Text>구피와 구구 어항</Text>
        </TextContainer>
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
            <Button>환수기록</Button>
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

        <ManageDetCard />
      </OuterContainer>
      {isMyAquariumInfoModal && <AquaInfo />}
      {isFeedingModal && (
        <FeedingInput
          addFeedingNum={addFeedingNum}
          handleFoodtype={handleFoodtype}
          feedingInfo={feedingInfo}
        />
      )}
      {isAddfishModal && <AddFish />}
      {isDeadfishModal && <Deadfish />}
    </>
  );
}
export default ManageDetail;
