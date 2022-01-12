import Main from "./page/Main";
import Guide from "./page/Guide";
import Search from "./page/Search";
import Manage from "./page/Manage";
import Mypage from "./page/Mypage";
import ManageDetail from "./Manage2Component/ManagaDetail";
import ManageAddInfo from "./page/ManageAddInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import SeaWaterGuide from "./page/SeaWaterGuide";
import HoneyTips from "./Tips_component/HoneyTips";
import WriteTips from "./Tips_component/WriteTips";
import PostTips from "./Tips_component/PostTips";
import Login from "./modalComponent/Login";
import SignUp from "./modalComponent/SignUp";
import { useState } from "react";
import axios from "axios";

function App() {
  //-----------------------------------------------

  const [aquaInfo, setAquaInfo] = useState({
    container_name: "",
    size: "",
    theme: "",
  });
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    vertical: 0,
  });
  const handleInputValue = (e) => {
    setAquaInfo({
      ...aquaInfo,
      [e.target.name]: e.target.value,
    });
  };

  const getSize = (e) => {
    setSize({
      ...size,
      [e.target.name]: e.target.value,
    });
  };
  const getWaterVolum = () => {
    let waterVolum = Math.floor(
      (size.width * size.height * size.vertical) / 1000
    );
    if (waterVolum > 0) {
      setAquaInfo({
        ...aquaInfo,
        size: waterVolum,
      });
    }
  };

  const containerAddRequest = () => {
    getWaterVolum();
    console.log("아쿠아인포", aquaInfo);

    console.log(token);
    axios
      .post(
        `http://localhost:80/container/add`,
        { data: aquaInfo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("추가성공!");
        console.log("응답이 뭘까?", res);
        // data: {id: 3, user_id: 1, container_name: '예쁜수족관', size: '20', theme: 'FO', …}
        // message: "Container is successfully added"
      })
      .catch((err) => console.log(err));
  };

  // ------------------------------------------

  const [token, setToken] = useState("");
  const handleToken = (token) => {
    setToken(token);
  };
  const state = useSelector((state) => state.modalReducer);
  const { isLoginModal, isSignupModal } = state;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/guide" element={<Guide />}></Route>
        <Route path="/seawaterguide" element={<SeaWaterGuide />}></Route>
        <Route path="/honeytips" element={<HoneyTips />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/writetips" element={<WriteTips token={token} />}></Route>
        <Route path="/posttips" element={<PostTips />}></Route>
        <Route path="/manage" element={<Manage aquaInfo={aquaInfo} />}></Route>
        <Route path="/manage/detailinfo" element={<ManageDetail />}></Route>
        <Route
          path="/manage/addInfo"
          element={
            <ManageAddInfo
              token={token}
              handleInputValue={handleInputValue}
              getSize={getSize}
              containerAddRequest={containerAddRequest}
            />
          }
        ></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
      {isLoginModal && <Login handleToken={handleToken} />}
      {isSignupModal && <SignUp />}
    </BrowserRouter>
  );
}

export default App;
