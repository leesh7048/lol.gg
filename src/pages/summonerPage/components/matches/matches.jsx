import React from "react";
import styles from "./matches.module.css";
import Match from "./match/match";

const Matches = ({
  matchInfo,
  summonerProfile,
  addMatchCount,
  lolApi,
  matchLoading,
}) => {
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
          {!matchLoading ? "더보기" : <div className={styles.loading}></div>}
        </div>
      </div>
    </div>
  );
};
export default Matches;
