import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Profile from "./components/profile/profile";
import styles from "./summonerPage.module.css";
import { TIER_IMG_URLS } from "./tierImgUrl";

const SummonerPage = ({ lolApi }) => {
  const [summonerProfile, setSummonerProfile] = useState({});
  const [soloRank, setSoloRank] = useState({});
  const [teamRank, setTeamRank] = useState({});
  const [leagueIds, setLeagueIds] = useState([]);
  const [matchInfo, setMatchInfo] = useState({});

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
      leagueIds.map((id) => lolApi.matchInfo(id))
    );
    setMatchInfo(getMatchInfo);
  };
  console.log(matchInfo);

  useEffect(() => {
    getSummonerInfo();
  }, [location]);

  const soloEmptyRank = {
    leaguePoints: "",
    tier: "UnRanked",
    rank: "",
    wins: "0",
    losses: "0",
  };

  const {
    leaguePoints: soloLp,
    tier: soloTier,
    rank: soloTierRank,
    wins: soloWins,
    losses: soloLosses,
  } = soloRank || soloEmptyRank;

  const teamEmptyRank = {
    leaguePoints: "",
    tier: "UnRanked",
    rank: "",
    wins: "0",
    losses: "0",
  };

  const {
    leaguePoints: teamLp,
    tier: teamTier,
    rank: teamTierRank,
    wins: teamWins,
    losses: teamLosses,
  } = teamRank || teamEmptyRank;

  const soloTierImg = TIER_IMG_URLS[soloTier];
  const teamTierImg = TIER_IMG_URLS[teamTier];

  return (
    <div className={styles.container}>
      <Profile summonerProfile={summonerProfile} />
      <div className={styles.contents}>
        <div className={styles.rank}>
          <div className={styles.soloRank}>
            <div className={styles.soloRankImg}>
              <img
                className={styles.soloTierImg}
                src={soloTierImg}
                alt="soloTier"
              />
            </div>
            <div className={styles.soloRankInfo}>
              <span>솔로랭크</span>
              <span>
                {soloTier} {soloTierRank}
              </span>
              <span>{soloLp}LP</span>
              <span>
                {soloWins}승{soloLosses}패
              </span>
              <span>
                승률 {Math.round((soloWins / (soloWins + soloLosses)) * 100)}%
              </span>
            </div>
          </div>

          <div className={styles.teamRank}>
            <div className={styles.teamRankImg}>
              <img
                className={styles.teamTierImg}
                src={teamTierImg}
                alt="teamTier"
              />
            </div>
            <div className={styles.teamRankInfo}>
              <span>자유랭크</span>
              <span>
                {teamTier} {teamTierRank}
              </span>
              <span>{teamLp}LP</span>
              <span>
                {teamWins}승{teamLosses}패
              </span>
              <span>
                승률 {Math.round((teamWins / (teamWins + teamLosses)) * 100)}%
              </span>
            </div>
          </div>
        </div>
        <div className={styles.matches}>
          {leagueIds.map(() => (
            <div className={styles.match}>
              <div className={styles.gameStats}>
                <div className={styles.gameType}></div>
                <div className={styles.gameStamp}></div>
                <div className={styles.gameResult}></div>
                <div className={styles.gameLength}></div>
              </div>
              <div className={styles.gameSettingInfo}>
                <div className={styles.championImg}></div>
                <div className={styles.spell}></div>
                <div className={styles.runes}></div>
                <div className={styles.championName}></div>
              </div>
              <div className={styles.kda}></div>
              <div className={styles.stats}></div>
              <div className={styles.items}></div>
              <div className={styles.followPlayers}></div>
              <div className={styles.statsBtn}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummonerPage;
