import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* top: 15%; */
  width: 25%;
  height: 390px;
  box-shadow: 5px 8px 7px 3px #c6c6c6;
  margin: 1%;
  /* background: #d1f8ff; */
  /* border: 1px solid black; */
`;

const Contents = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  text-align: left;
  .icon {
    opacity: 0.6;
    position: absolute;
    z-index: 999;
    cursor: pointer;
    top: 42%;
    left: 40%;
  }
`;

function ManageAdd() {
  return (
    <Container>
      <Contents>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/manage/addInfo"
        >
          <div className="icon">
            <FontAwesomeIcon size="4x" icon={faPlus} />
          </div>
        </Link>
      </Contents>
    </Container>
  );
}
export default ManageAdd;
