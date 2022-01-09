import styled from "styled-components";
import React, { useState } from "react";
import Header from "../component/Header";
import Landingpage from "../Landing_component/Landingpage";
import LandingSearch from "../Landing_component/LandingSearch";
import LandingManage from "../Landing_component/LandingManage";
import LandingGuide from "../Landing_component/LandingGuide";
import Footer from "../component/Footer";
import Login from "../modalComponent/Login";
import SignUp from "../modalComponent/SignUp";
import { useSelector } from "react-redux";

function Main() {
  const state = useSelector((state) => state.modalReducer);
  const { isLoginModal, isSignupModal } = state;
  const isModal = isLoginModal || isSignupModal;
  return (
    <>
      <Header></Header>
      <Landingpage></Landingpage>
      <LandingSearch></LandingSearch>
      <LandingManage></LandingManage>
      <LandingGuide></LandingGuide>
      <Footer></Footer>
      {isLoginModal && <Login />}
      {isSignupModal && <SignUp />}
    </>
  );
}
export default Main;
