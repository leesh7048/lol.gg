import React from "react";
import styles from "./rank.module.css";
import { TIER_IMG_URLS } from "./tierImgUrl";

const Rank = ({ soloRank, teamRank }) => {
  const soloEmptyRank = {
    leaguePoints: "",
    tier: "UnRanked",
    rank: "",
    wins: "",
    losses: "",
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
    wins: "",
    losses: "",
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
          <span>{soloLp ? `${soloLp}LP` : ""}</span>
          <span>{soloWins ? `${soloWins}승${soloLosses}패` : ""}</span>
          <span>
            {soloWins
              ? `승률 ${Math.round(
                  (soloWins / (soloWins + soloLosses)) * 100
                )}%`
              : ""}
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
          <span>{teamLp ? `${teamLp}LP` : ""}</span>
          <span>{teamWins ? `${teamWins}승${teamLosses}패` : ""}</span>
          <span>
            {teamWins
              ? `승률 ${Math.round(
                  (teamWins / (teamWins + teamLosses)) * 100
                )}%`
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Rank;
