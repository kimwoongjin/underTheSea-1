import styled from "styled-components";
import React from "react";

const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";
const DropDownContainer = styled.ul`
  background-color: #ffffff;
  /* display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px; */
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 999;
  position: absolute;
  width: 32vw;
  margin: 0.2% 28.8%;
  list-style-type: none;

  > li {
    padding: 0.2rem 1rem;

    &:hover {
      background-color: #eee;
    }

    &.selected {
      background-color: #ebe5f9;
    }
  }
`;

function SearchDrop({ options, handleDropDownClick, selected }) {
  return (
    <DropDownContainer>
      {options.map((option, idx) => (
        <li
          key={idx}
          onClick={() => handleDropDownClick(option)}
          className={selected === idx ? "selected" : ""}
        >
          {option}
        </li>
      ))}
      {/* TODO : input 값에 맞는 autocomplete 선택 옵션이 보여지는 역할을 합니다. */}
    </DropDownContainer>
  );
}
export default SearchDrop;
