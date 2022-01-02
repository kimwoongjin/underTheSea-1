import styled from "styled-components";
import React from "react";
import Header from "../component/Header";
import Landingpage from "../Landing_component/Landingpage";
import LandingSearch from "../Landing_component/LandingSearch";

function Main() {
  return (
    <>
      <Header></Header>
      <Landingpage></Landingpage>
      <LandingSearch></LandingSearch>
    </>
  );
}
export default Main;
