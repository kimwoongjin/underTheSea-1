import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TipContainer = styled.div`
  position: relative;
  width: 95%;
  display: flex;
  margin-bottom: 1px;
  border-top: 1px solid #808080;
  cursor: pointer;
  z-index: 100;
  &:hover {
    background-color: #f7f7f4;
    color: black;
  }
`;

const TipTitle = styled.div`
  position: relative;
  z-index: 1;
  flex: 6;
  width: 90%;
  height: 30%;
  /* border: 1px solid red; */
  margin-top: 8px;
  margin-bottom: 5px;
`;

const TipWriter = styled.div`
  flex: 2;
  width: 90%;
  height: 20%;
  font-size: 0.9rem;
  /* border: 1px solid black; */
  margin-top: 8px;
  margin-bottom: 5px;
`;

const TipDate = styled.div`
  flex: 2;
  width: 90%;
  height: 10%;
  font-size: 0.8rem;
  color: #808080;
  /* border: 1px solid black; */
  margin-top: 8px;
  margin-bottom: 5px;
  text-align: center;
`;

function TipList({ tip }) {
  const navigate = useNavigate();
  const date = tip.created_at.split("T")[0];
  //   console.log(tip.tip_id);
  const handleSelectTip = (e) => {
    localStorage.setItem("tip_id", e.target.id);
    const tip_id = localStorage.getItem("tip_id");
    // console.log(e.target.id);
    navigate(`/posttips`);
  };
  return (
    <>
      <TipContainer>
        <div style={{ flex: "0.5" }}></div>
        <TipTitle id={tip.tip_id} onClick={handleSelectTip}>
          {tip.title}
        </TipTitle>
        <TipWriter>{tip.user_name}</TipWriter>
        <TipDate>{date}</TipDate>
      </TipContainer>
    </>
  );
}

export default TipList;
