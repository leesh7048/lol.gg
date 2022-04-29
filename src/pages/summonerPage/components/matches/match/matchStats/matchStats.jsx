import React from "react";
import MatchTeamStats from "./matchTeamStats/matchTeamStats";
import styles from "./matchStats.module.css";

const MatchStats = ({
  userTeamStats,
  opposingTeamStats,
  isActive,
  runeSpellInfo,
  itemsInfo,
  runeSpellInfoFunction,
}) => {
  return (
    <div className={styles.gameDetail}>
      <MatchTeamStats
        infos={userTeamStats}
        isActive={isActive}
        runeSpellInfo={runeSpellInfo}
        itemsInfo={itemsInfo}
        runeSpellInfoFunction={runeSpellInfoFunction}
      />
      <MatchTeamStats
        infos={opposingTeamStats}
        isActive={isActive}
        runeSpellInfo={runeSpellInfo}
        itemsInfo={itemsInfo}
        runeSpellInfoFunction={runeSpellInfoFunction}
      />
    </div>
  );
};

export default MatchStats;
