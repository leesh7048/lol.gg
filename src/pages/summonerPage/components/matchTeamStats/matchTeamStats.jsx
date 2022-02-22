import React from "react";
import styles from "./matchTeamStats.module.css";
import { RUNES } from "../match/runes";
import { SPELL } from "../match/spell";

const MatchTeamStats = ({ infos, isActive }) => {
  return (
    <>
      {!isActive ? (
        <></>
      ) : (
        <table table className={styles.openTeam}>
          <thead className={styles.teamHeader}>
            <tr className={styles.row}>
              <th
                colSpan={4}
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
              <tr className={styles.row}>
                <td className={styles.championImgCell}>
                  <div className={styles.championImgBox}>
                    <img
                      className={styles.championImg}
                      src={`https://ddragon.leagueoflegends.com/cdn/12.2.1/img/champion/${summoner.championName}.png`}
                      alt=""
                    />
                  </div>
                  <div className={styles.championLevel}>
                    {summoner.champLevel}
                  </div>
                </td>
                <td className={styles.spellCell}>
                  <img
                    className={styles.spellImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/${
                      SPELL[summoner.summoner1Id]
                    }.png`}
                    alt=""
                  />
                  <img
                    className={styles.spellImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/${
                      SPELL[summoner.summoner2Id]
                    }.png`}
                    alt=""
                  />
                </td>
                <td className={styles.runeCell}>
                  <img
                    className={styles.runeImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${
                      RUNES[summoner.perks.styles[0].selections[0].perk]
                    }.png`}
                    alt=""
                  />
                  <img
                    className={styles.runeImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${
                      RUNES[summoner.perks.styles[1].style]
                    }.png`}
                    alt=""
                  />
                </td>
                <td className={styles.summonerNameCell}>
                  <a
                    className={styles.summonerLink}
                    href={`http://localhost:3000/summoner?userName=${summoner.summonerName}`}
                  >
                    {summoner.summonerName}
                  </a>
                </td>

                <td className={styles.itemCell}>
                  <div className={styles.itemBox}>
                    <div className={styles.item}>
                      {summoner.item0 !== 0 ? (
                        <img
                          className={styles.itemImg}
                          src={`https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/${summoner.item0}.png`}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className={styles.item}>
                      {summoner.item1 !== 0 ? (
                        <img
                          className={styles.itemImg}
                          src={`https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/${summoner.item1}.png`}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className={styles.item}>
                      {summoner.item2 !== 0 ? (
                        <img
                          className={styles.itemImg}
                          src={`https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/${summoner.item2}.png`}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className={styles.item}>
                      {summoner.item3 !== 0 ? (
                        <img
                          className={styles.itemImg}
                          src={`https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/${summoner.item3}.png`}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className={styles.item}>
                      {summoner.item4 !== 0 ? (
                        <img
                          className={styles.itemImg}
                          src={`https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/${summoner.item4}.png`}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className={styles.item}>
                      {summoner.item5 !== 0 ? (
                        <img
                          className={styles.itemImg}
                          src={`https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/${summoner.item5}.png`}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className={styles.item}>
                      {summoner.item6 !== 0 ? (
                        <img
                          className={styles.itemImg}
                          src={`https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/${summoner.item6}.png`}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </td>
                <td className={styles.kdaCell}>
                  <span>{summoner.kills}/</span>
                  <span>{summoner.deaths}/</span>
                  <span>{summoner.assists}</span>
                </td>
                <td className={styles.csCell}>
                  <span>{summoner.totalMinionsKilled}</span>
                </td>
                <td className={styles.wardCell}>
                  <div>{summoner.detectorWardsPlaced}</div>
                  <div>
                    {summoner.wardsPlaced}/{summoner.wardsKilled}
                  </div>
                </td>
                <td className={styles.damageCell}>
                  {summoner.totalDamageDealtToChampions}
                </td>
                <td className={styles.goldCell}>{summoner.goldEarned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default MatchTeamStats;
