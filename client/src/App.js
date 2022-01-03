import Main from "./page/Main";
import Guide from "./page/Guide";
import { Routes, Route } from "react-router-dom";
import SeaWaterGuide from "./page/SeaWaterGuide";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/guide" element={<Guide />}></Route>
      <Route path="/seawaterguide" element={<SeaWaterGuide />}></Route>
    </Routes>
  );
}

export default App;
