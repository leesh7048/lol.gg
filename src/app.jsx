import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Search from "./components/search/search";
import Summoner from "./components/summoner/summoner";

function App({ lolApi }) {
  const [searchId, setSearchId] = useState([]);
  const search = (query) => {
    console.log({ query });
    lolApi.summoner(query).then((id) => setSearchId(id));
  };
  console.log(searchId);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Search lolApi={lolApi} onSearch={search} />}
          />
          <Route path="/" element={<Summoner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
