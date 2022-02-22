import React from "react";
import MatchTeamStats from "../matchTeamStats/matchTeamStats";
import styles from "./matchStats.module.css";

const MatchStats = ({ userTeamStats, opposingTeamStats, isActive }) => {
  return (
    <div className={styles.gameDetail}>
      <MatchTeamStats infos={userTeamStats} isActive={isActive} />
      <MatchTeamStats infos={opposingTeamStats} isActive={isActive} />
    </div>
  );
};

export default MatchStats;
