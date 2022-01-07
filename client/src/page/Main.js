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

function Main({
  isLogin,
  setIsLogin,
  userinfo,
  accessToken,
  handleAccessToken,
  handleL,
}) {
  const [LoginModal, setLoginModal] = useState(false);
  const [SignupModal, setSignupModal] = useState(false);
  // 이거는 모달창키는거라서
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
      <Header
        isLogin={isLogin}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        signupCancel={signupCancel}
      ></Header>
      <Landingpage></Landingpage>
      <LandingSearch></LandingSearch>
      <LandingManage></LandingManage>
      <LandingGuide></LandingGuide>
      <Footer></Footer>
      {/* Login 다른 핸들 로그인 */}
      {LoginModal ? (
        <Login
          visible={LoginModal}
          onCancel={onCancel}
          handleL={handleL}
          handleAccessToken={handleAccessToken}
        />
      ) : (
        ""
      )}
      {SignupModal ? (
        <SignUp
          visible={SignupModal}
          onCancel={signupCancel}
          isLogin={isLogin}
          userinfo={userinfo}
          accessToken={accessToken}
        />
      ) : (
        ""
      )}
    </>
  );
}
export default Main;
