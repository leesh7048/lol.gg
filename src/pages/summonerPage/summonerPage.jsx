import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

import Profile from "./components/profile/profile";
import styles from "./summonerPage.module.css";

import Rank from "./components/rank/rank";
import Matches from "./components/matches/matches";
import SearchBar from "./components/searchBar/searchBar";

const SummonerPage = ({ lolApi }) => {
  const [summonerProfile, setSummonerProfile] = useState({});
  const [soloRank, setSoloRank] = useState({});
  const [teamRank, setTeamRank] = useState({});
  const [matchInfo, setMatchInfo] = useState([]);
  const [matchPage, setMatchPage] = useState(0);
  const [error, setError] = useState(false);
  const [matchLoading, setMatchLoading] = useState(false);
  const [rankLoading, setRankLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.search.split("=")[1];

  const getManipulatedUserName = (userName) => {
    if (userName.length === 2) return userName.split("").join(" ");
    else return userName;
  };

  const getRankInfoByQueueType = (rankInfo, targetQueueType) =>
    rankInfo.find(({ queueType }) => queueType === targetQueueType);

  const addMatchCount = () => {
    setMatchPage(matchPage + 1);
  };

  useEffect(() => {
    if (userName) {
      setError(false);
      const getSummonerProfile = async () => {
        try {
          const summoner = await lolApi.summoner(
            getManipulatedUserName(decodeURI(userName))
          );
          setSummonerProfile(summoner);
        } catch (error) {
          setError(true);
        }
      };
      setMatchInfo([]);
      getSummonerProfile();
    } else {
      navigate("/", { replace: true });
    }
  }, [userName, navigate, lolApi]);

  useEffect(() => {
    if (!summonerProfile.puuid || !summonerProfile.id) return;
    setError(false);

    const getMatchInfo = async () => {
      try {
        setMatchLoading(true);

        const leagueIds = await lolApi.matches(
          summonerProfile.puuid,
          matchPage
        );

        const newMatchInfo = await Promise.all(
          leagueIds.map((id) => lolApi.matchInfo(id))
        );

        setMatchInfo((prevMatchInfo) => [...prevMatchInfo, ...newMatchInfo]);
        setMatchLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const getRankInfo = async (id) => {
      setRankLoading(true);
      const rankInfo = await lolApi.rank(id);
      const soloRank = getRankInfoByQueueType(rankInfo, "RANKED_SOLO_5x5");
      const teamRank = getRankInfoByQueueType(rankInfo, "RANKED_FLEX_SR");

      setSoloRank(soloRank);
      setTeamRank(teamRank);
      setRankLoading(false);
    };

    getRankInfo(summonerProfile.id);
    getMatchInfo();
  }, [summonerProfile, matchPage, lolApi]);

  return (
    <div className={styles.container}>
      {error ? (
        <div className={styles.error}>
          ???????????? ?????? ??????????????????. ????????? ?????? ??? ?????? ??????????????????.
        </div>
      ) : (
        <>
          <SearchBar />
          <Profile summonerProfile={summonerProfile} />

          <div className={styles.contents}>
            <Rank
              soloRank={soloRank}
              teamRank={teamRank}
              rankLoading={rankLoading}
            />
            <Matches
              matchInfo={matchInfo}
              summonerProfile={summonerProfile}
              addMatchCount={addMatchCount}
              lolApi={lolApi}
              matchLoading={matchLoading}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SummonerPage;
