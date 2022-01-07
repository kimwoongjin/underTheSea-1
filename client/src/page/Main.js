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
import SignOut from "../modalComponent/SignOut";

function Main(isLogin, userinfo, accessToken, handleAccessToken) {
  const [LoginModal, setLoginModal] = useState(false);
  const [SignupModal, setSignupModal] = useState(false);
  const handleLogin = () => {
    setLoginModal(true);
  };
  const onCancel = () => {
    setLoginModal(false);
  };
  const handleSignup = () => {
    setSignupModal(true);
    console.log("모달온", SignupModal);
  };
  const signupCancel = () => {
    setSignupModal(false);
    console.log("모달오프", SignupModal);
  };
  return (
    <>
      <Header handleLogin={handleLogin} handleSignup={handleSignup}></Header>
      <Landingpage></Landingpage>
      <LandingSearch></LandingSearch>
      <LandingManage></LandingManage>
      <LandingGuide></LandingGuide>
      <Footer></Footer>
      {LoginModal ? <Login visible={LoginModal} onCancel={onCancel} /> : ""}
      {SignupModal ? (
        <SignUp
          visible={SignupModal}
          onCancel={signupCancel}
          isLogin={isLogin}
          userinfo={userinfo}
          accessToken={accessToken}
          handleAccessToken={handleAccessToken}
        />
      ) : (
        ""
      )}
    </>
  );
}
export default Main;
