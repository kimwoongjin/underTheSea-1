import styled from "styled-components";
import React, { useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import SearchCurrent from "./SearchCurrent";
import SearchInfo from "./SearchInfo";
import { useEffect } from "react";

const Auto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
  height: 7.5vh;
  position: relative;
  margin-top: 10%;

  .bottom {
    width: 30vw;
    display: flex;
    border-bottom: 5px solid #108dee;
    position: absolute;
    bottom: 3%;
    left: 29.8%;
  }
`;

const InputContainer = styled.div`
  /* position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100%;
  font-family: "Kfont"; */
  /* border: 1px solid black; */
  /* margin-top: 8rem; */
  width: 30vw;
  height: 7vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  margin-right: 2%;
  /* border: 1px solid black; */

  .fish-input {
    flex: 1 0 0;
    background-color: transparent;
    margin: 0;
    padding: 0;
    outline: none;
    /* border: 1px solid black; */
    border: none;
    width: 40vw;
    font-size: 1.2rem;
    font-family: "Kfont";
    text-align: center;
  }

  .delete-button {
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    /* border: 1px solid black; */
    padding: 0.8% 0 0.8%;
    right: 42%;
  }
`;

const Button = styled.button`
  width: 8vw;
  height: 5vh;
  font-size: 1.5rem;
  color: white;
  background: #108dee;
  border-radius: 5px;
  font-weight: bold;
  font-family: "Kfont";
  border: 2px solid #108dee;
  cursor: pointer;
`;

const Text = styled.div`
  position: absolute;
  top: 53%;
  left: 36%;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
  line-height: 180%;
`;

const Container = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
`;
const CardContainer = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 8%;
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
      .post(`http://localhost:80/fish/one`, { data: { fish_name: input } })
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
      .get(`http://localhost:80/fish/all/63`, {
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
      .get(`http://localhost:80/fish/fishnamelist`, {
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
      .get(`http://localhost:80/fish/all/6`, {
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
      <Header />
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
            {fishList.map((el) => (
              <option
                className="fish-option"
                value={el}
                label={el}
                key={el.id}
              ></option>
            ))}
          </datalist>
        </InputContainer>
        <Button onClick={gotoSearch}>Search</Button>
        <div className="bottom"></div>
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
    </>
  );
}
export default Search;
