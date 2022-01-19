import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";

const Box2 = styled.div`
  /* border: 1px solid #108dee; */
  margin-top: 2%;
  width: 70vw;
  height: 8vh;
  display: flex;
  align-items: center;
  background: #108dee;
  font-size: 2rem;
  font-weight: bold;
`;
const Manage = styled.div`
  /* border: 1px solid #108dee; */
  width: 24%;
  margin-left: 12%;
  font-size: 1.7rem;
  background: none;
  border: none;
  z-index: 999;
  border-right: 3px solid black;
  cursor: pointer;
`;
const Contents = styled.div`
  /* border: 1px solid #108dee; */
  width: 24%;
  margin-left: 12%;
  font-size: 1.7rem;
  background: none;
  border: none;
  z-index: 999;
  border-right: 3px solid black;
  cursor: pointer;
`;

const Comment = styled.div`
  /* border: 1px solid #108dee; */
  width: 24%;
  margin-left: 10%;
  font-size: 1.7rem;
  z-index: 999;
  background: none;
  border: none;
  cursor: pointer;
`;

function MypageMenuBar({ setCurrentPage }) {
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const GetClick = (e) => {
    setCurrentClick(e.target.id);
    setCurrentPage(e.target.textContent);
  };

  useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.color = "white";
      }
      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.color = "black";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <>
      <Box2>
        <Manage id="manage" onClick={GetClick}>
          manage
        </Manage>

        <Contents id="contents" onClick={GetClick}>
          contents
        </Contents>

        <Comment id="comment" onClick={GetClick}>
          comment
        </Comment>
      </Box2>
    </>
  );
}
export default MypageMenuBar;
