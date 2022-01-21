import styled from "styled-components";
import React, { useState } from "react";
import Header from "../component/Header";
import Header2 from "../component/Header2";
import axios from "axios";
import SearchCurrent from "./SearchCurrent";
import SearchInfo from "./SearchInfo";
import { useEffect } from "react";
import Footer from "../component/Footer";

const MainImg = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 65vh;
  .img {
    width: 100%;
    height: 100%;
  }
`;

const Auto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
  height: 7.5vh;
  position: relative;
  margin-top: 5%;
  flex-direction: column;
  padding-top: 2%;

  .bottom {
    width: 30vw;
    display: flex;
    border-bottom: 5px solid #108dee;
    position: relative;
    outline: none;
    bottom: 55%;
    right: 1%;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 30vw;
  height: 7vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  margin-right: 2%;
  top: 20%;

  .fish-input {
    position: relative;
    /* flex: 1 0 0; */
    background-color: transparent;
    margin: 0%;
    padding: 0;
    outline: none;
    border: none;
    width: 30vw;
    font-size: 1.2rem;
    font-family: "Kfont";
    text-align: center;
    border-bottom: 2px solid #108dee;
  }

  .delete-button {
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    /* border: 1px solid black; */
    padding: 0.8% 0 3%;
  }
`;

const Button = styled.button`
  position: relative;
  left: 20%;
  bottom: 46%;
  width: 8vw;
  height: 5vh;
  font-size: 1.25rem;
  color: white;
  background: #108dee;
  border-radius: 5px;
  font-weight: bold;
  font-family: "Kfont";
  border: 2px solid #108dee;
  cursor: pointer;
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

const Text = styled.div`
  position: relative;
  margin-top: 10%;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
  line-height: 180%;
`;

const Container = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 5%;
  margin-bottom: 10%;
`;
const CardContainer = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

function Search() {
  const [fish, setFish] = useState([]); //첫 랜딩될 화면 페이지
  const [allFish, setAllFish] = useState([]); // 60개의 물고기 정보값
  const [filteredFish, setFilteredFish] = useState([]); //매치된 이름을 통해 정보가 필터링 되어서 들어온다. [{}{}]
  //==================================================================
  const [currentFish, setCurrentFIsh] = useState(false); //추천, 현재 상태
  const [hasText, setHasText] = useState(false); //인풋값 유무를 확인
  //==================================================================
  const [input, setInput] = useState();
  const [fishList, setFishList] = useState([]); //물고기 이름 리스트

  // 검색 받아오기===========================================================

  const gotoSearch = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_API}/fish/one`, {
        data: { fish_name: input },
      })
      .then((result) => {
        console.log(result, "물고기 한마리");
        setCurrentFIsh(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 60개 리스트 받아오기===========================================================

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/fish/all/63`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((result) => {
        // console.log(result.data.data.fish_data);
        setAllFish(result.data.data.fish_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/fish/fishnamelist`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((result) => {
        // console.log(result.data.data);
        setFishList(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 추천 6개 카드  ===========================================================

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/fish/all/6`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((result) => {
        setCurrentFIsh(false);
        setFish(result.data.data.fish_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 인풋  ===========================================================

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.includes("\\")) return;

    // input에 텍스트가 있는지 없는지 확인하는 코드
    value ? setHasText(true) : setHasText(false);
    setInput(value); //

    const matchFish = allFish.filter((fish) => fish.fish_name.match(value));
    setFilteredFish(matchFish);
  };

  const handleDeleteButton = () => {
    setInput("");
  };

  return (
    <>
      <Header2 />
      <MainImg>
        <img
          className="img"
          src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A5%E1%84%8E%E1%85%B5%E1%86%BC.jpg"
          alt=""
        ></img>
      </MainImg>
      <Auto>
        <InputContainer>
          <input
            className="fish-input"
            type="text"
            placeholder="어종명으로 검색해주세요."
            onChange={handleInputChange}
            value={input}
            list="fishName"
          />

          <div className="delete-button" onClick={handleDeleteButton}>
            &times;
          </div>
          <datalist id="fishName">
            {fishList.map((el, idx) => (
              <option
                className="fish-option"
                value={el}
                label={el}
                key={idx}
              ></option>
            ))}
          </datalist>
        </InputContainer>
        <Button onClick={gotoSearch}>검색</Button>
        {/* <div className="bottom"></div> */}
      </Auto>
      <Text>카드를 클릭하면 세부 정부를 확인할 수 있습니다.</Text>

      {/* ============================================================= */}

      <Container>
        {currentFish ? (
          <CardContainer>
            <SearchInfo filteredFish={filteredFish} />
          </CardContainer>
        ) : (
          <CardContainer>
            {fish.map((item) => (
              <SearchCurrent key={item.id} item={item} />
            ))}
          </CardContainer>
        )}
      </Container>
      <Footer />
    </>
  );
}
export default Search;
