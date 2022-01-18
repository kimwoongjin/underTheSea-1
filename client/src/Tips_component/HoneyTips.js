import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "../component/Header";
import Header2 from "../component/Header2";
import TipList from "./TipList";

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  // background-color: #f7f7f4;
`;
const TopCover = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* border-bottom: 2px solid #808080; */
  flex-direction: column;
  /* background-image: url("투명바다1.png"); */
`;
const Swarm = styled.img`
  position: absolute;
  top: 80px;
  left: 80px;
  bottom: 0px;
  width: 14%;
`;
const TitleContainer = styled.div`
  width: 5.7%;
  display: flex;
  /* border: 1px solid green; */
  position: relative;
`;
const Starfish = styled.img`
  position: absolute;
  right: -30px;
  bottom: 20px;
  width: 50%;
  height: 50%;
`;
const Title = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 60px;
  padding-bottom: 5px;
  box-sizing: border-box;
  border-bottom: 5px solid #108dee;
`;
const SubTitle = styled.div`
  margin-top: 15px;
  color: #808080;
  font-size: 1.25rem;
  margin-bottom: 50px;
  /* border: 1px solid red; */
`;

const BtnContainer = styled.div`
  width: 70%;
  /* margin-top: 80px; */
  display: flex;
  justify-content: flex-end;
  /* border: 1px dashed darkcyan; */
`;
const Btn = styled.button`
  width: 90px;
  height: 30px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 0;
  border-style: none;
  background: #108dee;
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
`;

const TipListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  width: 70%;
  height: 100%;
  border: 1px solid #a0d5fd;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const TipListHeadContainer = styled.div`
  width: 95%;
  display: flex;
  font-size: 1.5rem;
  margin-top: 30px;
  // margin-bottom: 10px;
  border-bottom: 4px solid #108dee;
  // box-shadow: 0px 5px 5px -3px #828282;
  font-weight: bold;
`;

const TipListTitle = styled.div`
  flex: 6;
  margin-bottom: 30px;
  text-align: start;
`;

const TipListWriter = styled.div`
  flex: 2;
  margin-bottom: 30px;
  text-align: start;
`;

const TipListDate = styled.div`
  flex: 2;
  margin-bottom: 30px;
  text-align: center;
`;

const PageBtnForm = styled.form`
  display: flex;
  width: 95%;
  justify-content: center;
  // border-top: 1px solid #808080;
  padding-top: 15px;
  margin-bottom: 15px;
`;

const PageBtn = styled.div`
  align-items: center;
  border-style: none;
  background-color: #ffffff;
  border-bottom: 1px solid black;
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
`;

function HoneyTips() {
  const [tipList, setTipList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [tipLength, setTipLength] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const goToNewTip = () => {
    navigate("/writetips");
  };

  useEffect(() => {
    handleTipList();
  }, [pageNum]);

  const handleTipList = async () => {
    const result = await axios.get(`http://localhost:80/tip/all/${pageNum}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });
    // console.log(result.data.data);
    const { data: list } = result.data;
    setTipList([...list]);
    const page_length = Math.floor(result.data.tip_num / 10);
    if (result.data.tip_num % 10 !== 0) {
      const page = new Array(page_length + 1).fill(0);
      // console.log(page);
      setTipLength([...page]);
    } else {
      const page = Array(page_length).fill(0);
      setTipLength([...page]);
    }
  };

  // 이전페이지
  const goToPre = () => {
    if (pageNum === 1) {
      return;
    }
    const page = pageNum;
    setPageNum(page - 1);
  };

  // 다음페이지
  const goToNext = () => {
    if (pageNum === tipLength.length) {
      return;
    }
    setPageNum(pageNum + 1);
  };

  // 페이지 선택
  const selectPageNum = (e) => {
    // console.log(e.target.id);
    setPageNum(e.target.id);
  };

  return (
    <>
      <Header></Header>
      <Container>
        <TopCover>
          <TitleContainer>
            <Title>Board</Title>
            <Starfish src="불가사리.png" />
          </TitleContainer>
          <SubTitle>여러분의 지식을 나눠주세요!</SubTitle>
          {/* <Swarm src="무리.png" /> */}
        </TopCover>
        <BtnContainer>
          <Btn onClick={goToNewTip}>새글쓰기</Btn>
        </BtnContainer>
        <TipListContainer>
          <TipListHeadContainer>
            <div style={{ flex: "0.5" }}></div>
            <TipListTitle>제목</TipListTitle>
            <TipListWriter>작성자</TipListWriter>
            <TipListDate>작성일</TipListDate>
          </TipListHeadContainer>
          {tipList.map((el, idx) => {
            return <TipList key={idx} value={el.tip_id} tip={el}></TipList>;
          })}
          <PageBtnForm>
            <PageBtn onClick={goToPre}>이전</PageBtn>
            {tipLength.map((el, idx) => {
              return (
                <PageBtn key={idx} id={idx + 1} onClick={selectPageNum}>
                  {idx + 1}
                </PageBtn>
              );
            })}
            <PageBtn onClick={goToNext}>다음</PageBtn>
          </PageBtnForm>
        </TipListContainer>
      </Container>
    </>
  );
}
export default HoneyTips;
