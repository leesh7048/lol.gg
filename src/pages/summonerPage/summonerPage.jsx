import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Profile from "./components/profile/profile";
import styles from "./summonerPage.module.css";

import Rank from "./components/rank/rank";
import Match from "./components/match/match";

const SummonerPage = ({ lolApi }) => {
  const [summonerProfile, setSummonerProfile] = useState({});
  const [soloRank, setSoloRank] = useState({});
  const [teamRank, setTeamRank] = useState({});
  const [leagueIds, setLeagueIds] = useState([]);
  const [matchInfo, setMatchInfo] = useState([]);

  const location = useLocation();

  const getSummonerInfo = async () => {
    const id = await lolApi.summoner(location.search.split("=")[1]);
    setSummonerProfile(id);
    const rankInfo = await lolApi.rank(id.id);

    if (rankInfo[0] && rankInfo[0].queueType === "RANKED_SOLO_5x5") {
      setSoloRank(rankInfo[0]);
      setTeamRank(rankInfo[1]);
    } else {
      setTeamRank(rankInfo[0]);
      setSoloRank(rankInfo[1]);
    }
    const getleagueIds = await lolApi.matches(id.puuid);
    setLeagueIds(getleagueIds);

    const getMatchInfo = await Promise.all(
      getleagueIds.map((id) => lolApi.matchInfo(id))
    );

    setMatchInfo(getMatchInfo);
  };

  useEffect(() => {
    getSummonerInfo();
  }, [location]);

  return (
    <div className={styles.container}>
      <Profile summonerProfile={summonerProfile} />
      <div className={styles.bar}></div>
      <div className={styles.contents}>
        <Rank soloRank={soloRank} teamRank={teamRank} />
        <Match matchInfo={matchInfo} summonerProfile={summonerProfile} />
      </div>
    </div>
  );
};

export default SummonerPage;
