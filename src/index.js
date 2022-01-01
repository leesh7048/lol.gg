import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import LolApi from "./api/lolApi";
import axios from "axios";

const krHttpClient = axios.create({
  baseURL: "https://kr.api.riotgames.com",
  params: { api_key: process.env.REACT_APP_LOL_API_KEY },
});
const asiaHttpClient = axios.create({
  baseURL: "https://asia.api.riotgames.com",
  params: { api_key: process.env.REACT_APP_LOL_API_KEY },
});

const lolApi = new LolApi(krHttpClient, asiaHttpClient);

ReactDOM.render(
  <React.StrictMode>
    <App lolApi={lolApi} />
  </React.StrictMode>,
  document.getElementById("root")
);
