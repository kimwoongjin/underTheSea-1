import Main from "./page/Main";
import Guide from "./page/Guide";
import Search from "./page/Search";
import Manage from "./page/Manage";
import Mypage from "./page/Mypage";
import ManageDetail from "./Manage2Component/ManagaDetail";
import ManageAddInfo from "./page/ManageAddInfo";
import { Routes, Route } from "react-router-dom";
import SeaWaterGuide from "./page/SeaWaterGuide";
import HoneyTips from "./Tips_component/HoneyTips";
import WriteTips from "./Tips_component/WriteTips";
import PostTips from "./Tips_component/PostTips";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(false); // 로그인 여부: true/fale로 구분
  const [userinfo, setUserinfo] = useState(null); // 개인정보 저장
  const [accessToken, setAccessToken] = useState(null); // 액세스토큰: null/accToken
  const history = useNavigate(); // Signup, login 페이지 연결 부탁드립니다.

  const handleL = (value) => {
    setIsLogin(value);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            isLogin={isLogin}
            userinfo={userinfo}
            accessToken={accessToken}
            // setIsLogin={setIsLogin}
            handleL={handleL}
          />
        }
      ></Route>

      <Route path="/guide" element={<Guide />}></Route>
      <Route path="/seawaterguide" element={<SeaWaterGuide />}></Route>
      <Route path="/honeytips" element={<HoneyTips />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/writetips" element={<WriteTips />}></Route>
      <Route path="/posttips" element={<PostTips />}></Route>
      <Route path="/manage" element={<Manage />}></Route>
      <Route path="/manage/detailinfo" element={<ManageDetail />}></Route>
      <Route path="/manage/addInfo" element={<ManageAddInfo />}></Route>
      <Route
        path="/mypage"
        element={
          <Mypage
            isLogin={isLogin}
            userinfo={userinfo}
            accessToken={accessToken}
            setIsLogin={setIsLogin}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;
