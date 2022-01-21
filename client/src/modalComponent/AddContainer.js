import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { modalOff } from "../store/actions";
import { useDispatch } from "react-redux";
import useSound from "use-sound";
import axios from "axios";
import sounds from "../component/waterdrop.mp3";

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
  width: 30%;
  height: 35%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
  border-radius: 20px;
  align-items: center;
`;
const CloseBtnContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 10%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;

const ShowContainer = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid green; */
  justify-content: flex-end;
`;

const InfoShow = styled.form`
  display: flex;
  justify-content: space-between;
  /* justify-content: space-around; */
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  font-family: "Kfont";
  font-weight: bold;
  font-size: 1.25rem;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  height: 30px;
`;
const SizeInput = styled.input`
  box-sizing: border-box;
  padding: 5px;
  width: 30%;
  height: 30px;
`;
const MidInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  width: 100%;
  height: 15%;
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
const TypeSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const Selection = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 5px 5px;
`;
const SelImg = styled.img`
  display: flex;
  justify-content: space-evenly;
  width: 80px;
`;

function AddContainer() {
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const [play] = useSound(sounds);
  const [addConInfo, setAddConInfo] = useState({
    container_name: "",
    size: 0,
    theme: "",
    width: 0,
    height: 0,
    vertical: 0,
    type: 0,
  });

  const handleInputValue = (e) => {
    setAddConInfo({
      ...addConInfo,
      [e.target.name]: e.target.value || 11,
    });
    play();
  };

  const addContainerRequest = () => {
    console.log(addConInfo.type);
    axios
      .post(
        `http://localhost:80/container/add`,
        {
          data: {
            container_name: addConInfo.container_name,
            size: Math.floor(
              (addConInfo.width * addConInfo.height * addConInfo.vertical) /
                1000
            ),
            theme: addConInfo.theme,
            type: addConInfo.type,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        { withCredentials: true }
      )
      .catch((err) => console.log(err));
  };

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            onClick={() => dispatch(modalOff)}
            color="#e5e5e5"
          />
        </CloseBtnContainer>
        <ShowContainer>
          <InfoShow>
            <Text>수조정보를 입력해주세요</Text>
            <Input
              name="container_name"
              placeholder="자신의 수족관 이름을 입력해주세요"
              type="text"
              onChange={handleInputValue}
            />
            <MidInputContainer>
              <SizeInput
                name="width"
                placeholder="가로"
                type="number"
                onChange={handleInputValue}
              />
              <SizeInput
                name="height"
                placeholder="세로"
                type="number"
                onChange={handleInputValue}
              />
              <SizeInput
                name="vertical"
                placeholder="높이(수위)"
                type="number"
                onChange={handleInputValue}
              />
            </MidInputContainer>

            <Input
              name="theme"
              placeholder="테마를 입력해주세요"
              type="text"
              onChange={handleInputValue}
            />
            <TypeSelectContainer>
              <Selection>
                <SelImg src="http://localhost:80/level/11" alt="Type A" />

                <input
                  type="radio"
                  name="type"
                  value="11"
                  onChange={handleInputValue}
                />
              </Selection>
              <Selection>
                <SelImg src="http://localhost:80/level/12" alt="Type B" />

                <input
                  type="radio"
                  name="type"
                  value="12"
                  onChange={handleInputValue}
                />
              </Selection>

              <Selection>
                <SelImg src="http://localhost:80/level/13" alt="Type C" />

                <input
                  type="radio"
                  name="type"
                  value="13"
                  onChange={handleInputValue}
                />
              </Selection>
              <Selection>
                <SelImg src="http://localhost:80/level/14" alt="Type D" />

                <input
                  type="radio"
                  name="type"
                  value="14"
                  onChange={handleInputValue}
                />
              </Selection>
            </TypeSelectContainer>

            <Btn onClick={addContainerRequest}>추가하기</Btn>
          </InfoShow>
        </ShowContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default AddContainer;
