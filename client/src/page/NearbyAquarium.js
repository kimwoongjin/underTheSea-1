import styled from "styled-components";
import Header2 from "../component/Header2";
import Footer from "../component/Footer";
import React, { useRef, useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  position: relative;
`;

const Input = styled.input``;

const Button = styled.button``;

const SearchContainer = styled.div`
  position: absolute;
  top: 1%;
  left: 1%;
  width: 15%;
  height: 40px;
  border: 1px solid red;
  background: red;
  z-index: 99;
`;

function NearbyAquarium() {
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    return () => {};
  }, []);

  return (
    <Container>
      <Header2 />

      <MapContainer className="map" ref={container}>
        <SearchContainer></SearchContainer>
      </MapContainer>
      <Footer />
    </Container>
  );
}
export default NearbyAquarium;
