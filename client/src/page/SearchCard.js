import styled from "styled-components";
import React, { useState } from "react";
import SearchInfo from "./SearchInfo";
import SearchCurrent from "./SearchCurrent";
import axios from "axios";
import { useEffect } from "react";

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CardContainer = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 12%;
`;

function SearchCard({ word, setCurrentFIsh, currentFish }) {
  const [fish, setFish] = useState([]);

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

  return (
    <Container>
      {currentFish ? (
        <CardContainer>
          {word.map((item) => (
            <SearchInfo key={item.id} item={item} />
          ))}
        </CardContainer>
      ) : (
        <CardContainer>
          {fish.map((item) => (
            <SearchCurrent key={item.id} item={item} />
          ))}
        </CardContainer>
      )}
    </Container>
  );
}
export default SearchCard;
