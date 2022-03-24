import React from "react";
import styles from "./matchTeamStats.module.css";
import IndividualState from "../individualState/individualState";

const MatchTeamStats = ({
  infos,
  isActive,
  runeSpellInfo,

  itemsInfo,
  runeSpellInfoFunction,
}) => {
  return (
    <>
      {!isActive ? (
        <></>
      ) : (
        <table table className={styles.openTeam}>
          <thead className={styles.teamHeader}>
            <tr className={styles.row}>
              <th
                colSpan={3}
                className={
                  infos[0].win ? styles.winHeaderCell : styles.loseHeaderCell
                }
              >
                {infos[0].win ? "승리" : "패배"}
                {infos[0].teamId === 100 ? "(블루팀)" : "(레드팀)"}
              </th>

              <th className={styles.headerCell}>아이템</th>
              <th className={styles.headerCell}>kda</th>
              <th className={styles.headerCell}>cs</th>
              <th className={styles.headerCell}>와드</th>
              <th className={styles.headerCell}>피해량</th>
              <th className={styles.headerCell}>골드</th>
            </tr>
          </thead>
          <tbody
            className={infos[0].win ? styles.winContents : styles.loseContents}
          >
            {infos.map((summoner) => (
              <IndividualState
                key={summoner.puuid}
                summoner={summoner}
                runeSpellInfo={runeSpellInfo}
                itemsInfo={itemsInfo}
                runeSpellInfoFunction={runeSpellInfoFunction}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default MatchTeamStats;
