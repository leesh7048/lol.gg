import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

import Profile from "./components/profile/profile";
import styles from "./summonerPage.module.css";

import Rank from "./components/rank/rank";
import Match from "./components/match/match";

const SummonerPage = ({ lolApi }) => {
  const [summonerProfile, setSummonerProfile] = useState({});
  const [soloRank, setSoloRank] = useState({});
  const [teamRank, setTeamRank] = useState({});
  const [matchInfo, setMatchInfo] = useState([]);
  const [matchPage, setMatchPage] = useState(0);
  const [error, setError] = useState();

  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.search.split("=")[1];

  const getManipulatedUserName = (userName) => {
    if (userName.length === 2) return userName.split("").join(" ");
    else return userName;
  };

  const getSummonerProfile = async () => {
    try {
      console.log(encodeURI(getManipulatedUserName(userName)));
      const summoner = await lolApi.summoner(getManipulatedUserName(userName));
      setSummonerProfile(summoner);
    } catch (error) {
      setError(error);
    }
  };

  const getRankInfoByQueueType = (rankInfo, targetQueueType) =>
    rankInfo.find(({ queueType }) => queueType === targetQueueType);

  const getRankInfo = async (id) => {
    const rankInfo = await lolApi.rank(id);

    const soloRank = getRankInfoByQueueType(rankInfo, "RANKED_SOLO_5x5");
    const teamRank = getRankInfoByQueueType(rankInfo, "RANKED_FLEX_SR");
    setSoloRank(soloRank);
    setTeamRank(teamRank);
  };

  const addMatchCount = () => {
    setMatchPage(matchPage + 1);
  };

  const gameModeHandle = (e) => {
    console.log(e);
  };

  useEffect(() => {
    if (userName) {
      getSummonerProfile();
    } else {
      navigate("/", { replace: true });
    }
  }, [userName]);

  useEffect(() => {
    if (!summonerProfile.puuid || !summonerProfile.id) return;

    const getMatchInfo = async () => {
      const leagueIds = await lolApi.matches(summonerProfile.puuid, matchPage);
      const newMatchInfo = await Promise.all(
        leagueIds.map((id) => lolApi.matchInfo(id))
      );
      setMatchInfo([...matchInfo, ...newMatchInfo]);
    };

    getRankInfo(summonerProfile.id);
    getMatchInfo();
  }, [summonerProfile, matchPage]);

  return (
    <div className={styles.container}>
      {error ? (
        <div>등록되지 않은 소환사입니다. 오타를 확인 후 다시 검색해주세요.</div>
      ) : (
        <>
          <Profile summonerProfile={summonerProfile} />
          <div className={styles.bar}></div>
          <div className={styles.contents}>
            <Rank soloRank={soloRank} teamRank={teamRank} />
            <Match
              matchInfo={matchInfo}
              summonerProfile={summonerProfile}
              addMatchCount={addMatchCount}
              gameModeHandle={gameModeHandle}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SummonerPage;
