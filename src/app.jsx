import { BrowserRouter, Route, Routes } from "react-router-dom";

import SearchPage from "./pages/searchPage/searchPage";

import SummonerPage from "./pages/summonerPage/summonerPage";

function App({ lolApi }) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/summoner" element={<SummonerPage lolApi={lolApi} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
