import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import LolApi from "./api/lolApi";
import axios from "axios";

console.log({ LolApi });

console.log({ API_KEY: process.env.REACT_APP_LOL_API_KEY });
const httpClient = axios.create({
  baseURL: "https://kr.api.riotgames.com",
  params: { api_key: process.env.REACT_APP_LOL_API_KEY },
});
console.log(LolApi);
const lolApi = new LolApi(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App lolApi={lolApi} />
  </React.StrictMode>,
  document.getElementById("root")
);
