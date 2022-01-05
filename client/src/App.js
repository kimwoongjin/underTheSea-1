import Main from "./page/Main";
import Guide from "./page/Guide";
import Search from "./page/Search";
import Manage from "./page/Manage";
import ManageDetail from "./Manage2Component/ManagaDetail";
// import SearchDetail from "./page/SearchDetail";
import { Routes, Route } from "react-router-dom";
import SeaWaterGuide from "./page/SeaWaterGuide";
<<<<<<< HEAD
import HoneyTips from "./Tips_component/HoneyTips";
import WriteTips from "./Tips_component/WriteTips";
import PostTips from "./Tips_component/PostTips";
=======
>>>>>>> 1ba29ceb67469046a443b6eefc556887c5270ece

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/guide" element={<Guide />}></Route>
      <Route path="/seawaterguide" element={<SeaWaterGuide />}></Route>
<<<<<<< HEAD
      <Route path="/honeytips" element={<HoneyTips />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/manage" element={<Manage />}></Route>
      <Route path="/writetips" element={<WriteTips />}></Route>
      <Route path="/posttips" element={<PostTips />}></Route>
=======
      <Route path="/search" element={<Search />}></Route>
      <Route path="/manage" element={<Manage />}></Route>
      <Route path="/manage/detailinfo" element={<ManageDetail />}></Route>
>>>>>>> 1ba29ceb67469046a443b6eefc556887c5270ece
      {/* <Route path="/search/detail" element={<SearchDetail />}></Route> */}
    </Routes>
  );
}

export default App;
