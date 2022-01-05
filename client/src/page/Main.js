import styled from "styled-components";
import React, { useState } from "react";
import Header from "../component/Header";
import Landingpage from "../Landing_component/Landingpage";
import LandingSearch from "../Landing_component/LandingSearch";
import LandingManage from "../Landing_component/LandingManage";
import LandingGuide from "../Landing_component/LandingGuide";
import Footer from "../component/Footer";
import Login from "../modalComponent/Login";

function Main() {
  const [LoginModal, setLoginModal] = useState(false);
  const handleLogin = () => {
    setLoginModal(true);
  };
  const onCancel = () => {
    setLoginModal(false);
  };
  return (
    <>
      <Header handleLogin={handleLogin}></Header>
      <Landingpage></Landingpage>
      <LandingSearch></LandingSearch>
      <LandingManage></LandingManage>
      <LandingGuide></LandingGuide>
      <Footer></Footer>
      {LoginModal ? <Login visible={LoginModal} onCancel={onCancel} /> : ""}
    </>
  );
}
export default Main;
