import React from "react";
import Header from "../component/Header";
import Landingpage from "../Landing_component/Landingpage";
import LandingSearch from "../Landing_component/LandingSearch";
import LandingManage from "../Landing_component/LandingManage";
import LandingGuide from "../Landing_component/LandingGuide";
import Footer from "../component/Footer";

function Main() {
  return (
    <>
      <Header></Header>
      <Landingpage></Landingpage>
      <LandingSearch></LandingSearch>
      <LandingManage></LandingManage>
      <LandingGuide></LandingGuide>
      <Footer></Footer>
    </>
  );
}
export default Main;
