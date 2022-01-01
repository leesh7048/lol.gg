import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Search from "./components/search/search";
import Summoner from "./components/summoner/summoner";

function App({ lolApi }) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/summoner" element={<Summoner lolApi={lolApi} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
