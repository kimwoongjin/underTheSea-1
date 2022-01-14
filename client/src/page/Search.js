import styled from "styled-components";
import React, { useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import SearchCurrent from "./SearchCurrent";
import SearchInfo from "./SearchInfo";
import { useEffect } from "react";
import SearchDrop from "./SearchDrop";

const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";
const activeBorderRadius = "1rem 1rem 0 0";
const inactiveBorderRadius = "1rem 1rem 1rem 1rem";

const Auto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  width: 50%;
  height: 7.5vh;
  position: relative;
  margin: 10% 0 0 20%;
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
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: ${(props) =>
    props.hasText ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;
  box-shadow: ${(props) => (props.hasText ? boxShadow : 0)};

  &:focus-within {
    box-shadow: ${boxShadow};
  }

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
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }
`;

const Button = styled.button`
  position: absolute;
  width: 8vw;
  height: 5vh;
  font-size: 1.5rem;
  color: white;
  background: #108dee;
  border-radius: 5px;
  border: 2px solid #108dee;
  cursor: pointer;
  border: 1px solid black;
  right: 0%;
`;

const Text = styled.div`
  position: absolute;
  top: 115%;
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
`;
const CardContainer = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 12%;
`;
// const DropDown = styled.ul``;

function Search() {
  // let refresh = window.location.search;
  // const [word, setWord] = useState("");
  const [search, setSearch] = useState(); //검색 물고기
  const [fish, setFish] = useState([]); //검색 전 추천 물고기
  const [options, setOptions] = useState([]); //60개 정보리스트
  const [filterS, setFilterS] = useState([]);
  //==================================================================
  const [currentFish, setCurrentFIsh] = useState(false); //추천, 현재 상태
  const [selected, setSelected] = useState(-1);
  const [hasText, setHasText] = useState(false); //인풋값 유무를 확인

  // const handleInput = (e) => {
  //   setSearch(e.target.value);
  // };

  // 검색 받아오기===========================================================

  // useEffect(() => {
  //   gotoSearch();
  // }, []);

  const gotoSearch = () => {
    //-----> 네임 리스트 <------
    // navigate(`/search?fish_name=${word}`);
    // const search = decodeURI(window.location.search);

    axios
      .post(`http://localhost:80/fish`, { data: { fish_name: search } })
      .then((result) => {
        // if (!word || word === " ") return null;
        // console.log(result.data, "배열입니까?");
        setSearch(result.data);
        setCurrentFIsh(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 60개 리스트 받아오기===========================================================
  //-----> 네임 리스트 <------
  useEffect(() => {
    axios
      .get(`http://localhost:80/fish/all/60`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((result) => {
        const list = result.data.data.fish_data.map((el) => el.fish_name);
        setOptions(list);
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
        // console.log(result.data.data.fish_data, "---------------");
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
    setSearch(value);

    // dropdown을 위한 기능
    const filterRegex = new RegExp(value, "i");

    const resultOptions = options.filter((option) => option.match(filterRegex));

    setFilterS(resultOptions);
  };

  const handleDropDownClick = (clickedOption) => {
    setSearch(clickedOption);

    const resultOptions = options.filter((option) => option === clickedOption);
    // console.log(resultOptions, "옵션이니");
    setOptions(resultOptions);
  };

  const handleDeleteButtonClick = () => {
    setSearch("");
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
            value={search}
            onKeyUp={handleKeyUp}
          />
          <div className="delete-button" onClick={handleDeleteButtonClick}>
            &times;
          </div>
          {hasText ? (
            <SearchDrop
              options={filterS}
              handleDropDownClick={handleDropDownClick}
              selected={selected}
            />
          ) : null}
          <Button onClick={gotoSearch}>search</Button>
        </InputContainer>
      </Auto>

      <Text>카드를 클릭하면 세부 정부를 확인할 수 있습니다.</Text>

      {/* ============================================================= */}

      <Container>
        {currentFish ? (
          <CardContainer>
            <SearchInfo search={search} />;
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
