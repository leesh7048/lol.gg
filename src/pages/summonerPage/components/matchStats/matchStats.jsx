import React from "react";
import { RUNES } from "../match/runes";
import { SPELL } from "../match/spell";
import styles from "./matchStats.module.css";

const MatchStats = ({ infos, summonerProfile }) => {
  const a = () => {
    if (
      infos.info.participants
        .slice(0, 5)
        .find((summoner) => summoner.puuid === summonerProfile.puuid)
    ) {
      return infos.info.participants.slice(0, 5);
    }
    return infos.info.participants.slice(5, 10);
  };

  console.log(infos);
  return (
    <div className={styles.gameDetail}>
      <table className={styles.team1}>
        <thead className={styles.team1Header}>
          <tr className={styles.row}>
            <th colSpan={4} className={styles.headerCell}>
              {a()[0].win ? "승리" : "패배"}
              {a()[0].teamId === 100 ? "(블루팀)" : "(레드팀)"}
            </th>
            <th className={styles.headerCell}>티어</th>
            <th className={styles.headerCell}>아이템</th>
            <th className={styles.headerCell}>kda</th>
            <th className={styles.headerCell}>cs</th>
            <th className={styles.headerCell}>와드</th>
            <th className={styles.headerCell}>피해량</th>
            <th className={styles.headerCell}>골드</th>
          </tr>
        </thead>
        <tbody className={styles.contents}>
          {a().map((summoner) => (
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
                {summoner.summonerName}
              </td>

              <td className={styles.tierCell}>tier</td>

              <td className={styles.itemCell}>
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
      <table className={styles.team2}>
        <thead className={styles.team2Header}></thead>
      </table>
    </div>
  );
};

export default MatchStats;
