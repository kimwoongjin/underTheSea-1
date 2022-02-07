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
`;

function NearbyAquarium() {
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  // 마커배열
  //   let markers = [];

  // 지도생성
  //   let map = new window.kakao.maps.Map(container.current, options);

  // 장소 검색 객체
  //   let ps = new window.kakao.maps.services.places();

  // 검색결과 목록이나 마커를 클릭했을 때 장소명을 표출할 윈도우 인포를 생성
  //   let infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

  //   const searchPlaces = () => {
  //       let keyword =
  //   }

  useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    // var container = document.getElementById('map');
    // var options = {
    //   center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
    //   level: 3
    // };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    return () => {};
  }, []);

  return (
    <Container>
      <Header2 />
      <MapContainer className="map" ref={container}></MapContainer>
      <Footer />
    </Container>
  );
}
export default NearbyAquarium;
