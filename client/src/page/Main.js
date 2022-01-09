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

function Main({
  isLogin,
  setIsLogin,
  userinfo,
  accessToken,
  handleAccessToken,
  handleL,
}) {
  // const [LoginModal, setLoginModal] = useState(false);
  // const [SignupModal, setSignupModal] = useState(false);
  // isLoginModal: false,
  // isSignupModal: false,
  const { isLoginModal, isSignupModal } = useSelector(
    ({ modalReducer }) => modalReducer
  );

  return (
    <>
      <Header></Header>
      <Landingpage></Landingpage>
      <LandingSearch></LandingSearch>
      <LandingManage></LandingManage>
      <LandingGuide></LandingGuide>
      <Footer></Footer>
      {isLoginModal && <Login />}
    </>
  );
}
export default Main;
