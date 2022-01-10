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

import { useSelector } from "react-redux";

function App() {
  // isLoginModal: false,
  // isSignupModal: false,
  // isSkimmerModal: false,
  // const { isLoginModal, isSignupModal } = useSelector(
  //   ({ modalReducer }) => modalReducer
  // );
  const state = useSelector((state) => state.modalReducer);
  const { isLoginModal, isSignupModal } = state;
  const isModal = isLoginModal || isSignupModal;

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/guide" element={<Guide />}></Route>
        <Route path="/seawaterguide" element={<SeaWaterGuide />}></Route>
        <Route path="/honeytips" element={<HoneyTips />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/writetips" element={<WriteTips />}></Route>
        <Route path="/posttips" element={<PostTips />}></Route>
        <Route path="/manage" element={<Manage />}></Route>
        <Route path="/manage/detailinfo" element={<ManageDetail />}></Route>
        <Route path="/manage/addInfo" element={<ManageAddInfo />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </>
  );
}

export default App;
