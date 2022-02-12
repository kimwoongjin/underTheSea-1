import styled from "styled-components";
import Header2 from "../component/Header2";
import Footer from "../component/Footer";
import React, { useRef, useEffect, useState } from "react";
import Nn from "../page/Nn";

function NearbyAquarium() {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("서울특별시 강남구 영동대로 513");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">검색</button>
      </form>
      <Nn searchPlace={Place} />
    </>
  );
}
export default NearbyAquarium;
