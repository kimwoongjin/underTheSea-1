import React from "react";
import Landingpage from "../Landing_component/Landingpage";
import LandingSearch from "../Landing_component/LandingSearch";
import LandingManage from "../Landing_component/LandingManage";
import LandingManage1 from "../Landing_component/LandingManage1";
import LandingGuide from "../Landing_component/LandingGuide";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Header2 from "../component/Header2";

function Main() {
  return (
    <>
      <Header />
      <Landingpage></Landingpage>
      <LandingSearch></LandingSearch>
      <LandingGuide></LandingGuide>
      <LandingManage></LandingManage>
      <LandingManage1></LandingManage1>
      <Footer></Footer>
    </>
  );
}
export default Main;
