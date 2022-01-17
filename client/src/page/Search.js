import styled from "styled-components";
import React, { useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import SearchCurrent from "./SearchCurrent";
import SearchInfo from "./SearchInfo";
import { useEffect } from "react";
import SearchDrop from "./SearchDrop";

// const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";
// const activeBorderRadius = "1rem 1rem 0 0";
// const inactiveBorderRadius = "1rem 1rem 1rem 1rem";

const Auto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
  height: 7.5vh;
  position: relative;
  margin-top: 10%;
`;

const InputContainer = styled.div`
  /* position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100%;
  font-family: "Kfont";
  border: 1px solid black; */
  /* margin-top: 8rem; */
  width: 30vw;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  margin-right: 2%;
  border-bottom: 5px solid #108dee;
  .hi {
    /* border: none;
    background: none;
    border-bottom: 5px solid #108dee;
    position: absolute;
    width: 70%;
    height: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 20px; */

    flex: 1 0 0;
    background-color: transparent;
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    font-size: 1.2rem;
    font-family: "Kfont";
    text-align: center;
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
  top: 47%;
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
  const [options, setOptions] = useState([]); //60개의 물고기의 이름값
  const [fish2, setFish2] = useState([]); // 60개의 물고기 정보값
  const [filteredOptions, setFilteredOptions] = useState([]); //매치된 이름만 필터링되어서 들어온다. ['','']
  const [filteredOptions2, setFilteredOptions2] = useState([]); //매치된 이름을 통해 정보가 필터링 되어서 들어온다. [{}{}]
  //==================================================================
  const [currentFish, setCurrentFIsh] = useState(false); //추천, 현재 상태
  const [selected, setSelected] = useState(-1);
  const [hasText, setHasText] = useState(false); //인풋값 유무를 확인
  //==================================================================
  const [test, setTest] = useState();
  const [xxx, setXxx] = useState();

  // 검색 받아오기===========================================================

  const gotoSearch = () => {
    axios
      .post(`http://localhost:80/fish/one`, { data: { fish_name: test } })
      .then((result) => {
        console.log(result, "물고기 한마리");
        // setFilteredOptions2(result);
        setCurrentFIsh(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 60개 리스트 받아오기===========================================================

  useEffect(() => {
    axios
      .get(`http://localhost:80/fish/all/60`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((result) => {
        // console.log(result.data.data.fish_data);
        setFish2(result.data.data.fish_data);
        const list = result.data.data.fish_data.map((el) => el.fish_name);
        setOptions(list);
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
        console.log(result);
        // setFish2(result.data.data.fish_data);
        // const list = result.data.data.fish_data.map((el) => el.fish_name);
        // setOptions(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 검색 창 ===========================================================

  // useEffect(() => {
  //   if (search === "") {
  //     setHasText(false);
  //   }
  // }, [search]);

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

  // 인풋 드랍다운  ===========================================================

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.includes("\\")) return;

    // input에 텍스트가 있는지 없는지 확인하는 코드
    value ? setHasText(true) : setHasText(false);
    setTest(value); //

    // dropdown을 위한 기능
    const filterRegex = new RegExp(value, "i");

    const resultOptions = options.filter((option) => option.match(filterRegex));
    const testOptions = fish2.filter((fish) =>
      fish.fish_name.match(filterRegex)
    );

    setFilteredOptions2(testOptions);
    // console.log(resultOptions, "리저릍야야ㅑ");
    // 매치된 이름을 통해 정보가 필터링 되어서 들어온다. [{}{}]
    setFilteredOptions(resultOptions);
    // console.log(testOptions, "난 테스트야");
    // 매치된 이름만 필터링되어서 들어온다. ['','']
  };

  const handleDropDownClick = (clickedOption) => {
    setTest(clickedOption); //
    // console.log(clickedOption, "클릭이벤트");

    const resultOptions = options.filter((option) => option === clickedOption);
    // console.log(resultOptions, "옵션이니");
    setOptions(resultOptions);
  };

  const handleDeleteButtonClick = () => {
    setTest("");
  };

  //엔터 키 이벤트
  // const handleKeyPress = (e) => {
  //   if (e.type === "keypress" && e.code === "Enter") {
  //     // handleSearchClick(); //인자 필요하면 넣기
  //   }
  // };

  //엔터 키 이벤트 ================================================
  const handleKeyUp = (event) => {
    // eslint-disable-next-line

    if (
      event.getModifierState("Fn") ||
      event.getModifierState("Hyper") ||
      event.getModifierState("OS") ||
      event.getModifierState("Super") ||
      event.getModifierState("Win")
    )
      return;
    if (
      event.getModifierState("Control") +
        event.getModifierState("Alt") +
        event.getModifierState("Meta") >
      1
    )
      return;
    if (hasText) {
      if (event.code === "ArrowDown" && options.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (event.code === "ArrowUp" && selected >= 0) {
        setSelected(selected - 1);
      }
      if (event.code === "Enter" && selected >= 0) {
        handleDropDownClick(options[selected]);
        setSelected(-1);
      }
    }
  };

  return (
    <>
      <Header />
      <Auto>
        <InputContainer hasText={hasText}>
          <input
            className="hi"
            type="text"
            placeholder="어종명으로 검색해주세요."
            onChange={handleInputChange}
            value={test}
            onKeyUp={handleKeyUp}
          />
          <div className="delete-button" onClick={handleDeleteButtonClick}>
            &times;
          </div>
        </InputContainer>
        <Button onClick={gotoSearch}>Search</Button>
      </Auto>
      {hasText ? (
        <SearchDrop
          options={filteredOptions}
          handleDropDownClick={handleDropDownClick}
          selected={selected}
        />
      ) : null}
      <Text>카드를 클릭하면 세부 정부를 확인할 수 있습니다.</Text>

      {/* ============================================================= */}

      <Container>
        {currentFish ? (
          <CardContainer>
            <SearchInfo search={filteredOptions2} />
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
