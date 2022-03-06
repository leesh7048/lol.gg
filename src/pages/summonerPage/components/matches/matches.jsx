import React from "react";
import styles from "./matches.module.css";

import Match from "../match/match";

const Matches = ({ matchInfo, summonerProfile, addMatchCount, lolApi }) => {
  return (
    <div className={styles.matches}>
      {matchInfo.map((infos) => (
        <Match
          key={infos.metadata.matchId}
          infos={infos}
          summonerProfile={summonerProfile}
          lolApi={lolApi}
        />
      ))}
      <div>
        <div className={styles.addMatchBtn} onClick={addMatchCount}>
          더보기
        </div>
      </div>
    </div>
  );
};
export default Matches;
