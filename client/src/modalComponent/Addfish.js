import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { modalOff } from "../store/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const DarkBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  width: 20%;
  height: 25%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  display: flex;
  border-radius: 20px;
  align-items: center;
  /* border: 2px dashed red; */
`;
const CloseBtnContainer = styled.div`
  /* border: 1px dashed green; */
  /* position: absolute; */
  /* top: 0px; */
  width: 100%;
  height: 20%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80%;
  /* border: 1px solid red; */
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 100%;
  /* border: 1px solid blue; */
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  height: 20%;
`;

const Btn = styled.button`
  width: 100%;
  height: 25%;
  border-style: none;
  border-radius: 4px;
  background: #108dee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
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
function Addfish({ handleExwaterValue, exwaterAddRequest }) {
  const dispatch = useDispatch();

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            color="#e5e5e5"
            onClick={() => dispatch(modalOff)}
          />
        </CloseBtnContainer>
        <FormContainer>
          <Form>
            <Input placeholder="어종을 입력해주세요" type="text"></Input>
            <Input
              placeholder="몇L 환수하셨나요?"
              type="number"
              onChange={handleExwaterValue}
              required
            ></Input>
            <Btn type="button" onClick={exwaterAddRequest}>
              환수기록
            </Btn>
          </Form>
        </FormContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default Addfish;
