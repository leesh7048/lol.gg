import React from "react";
import Items from "../../../../../items/items";
import RuneSpell from "../../../../../runeSpell/runeSpell";
import styles from "./individualState.module.css";

const IndividualState = ({
  summoner,
  runeSpellInfo,
  itemsInfo,
  runeSpellInfoFunction,
}) => {
  const formatChampionName = (championName) => {
    if (championName === "FiddleSticks") {
      return (
        championName[0].toUpperCase() + championName.slice(1).toLowerCase()
      );
    }
    return championName;
  };

  const runeSpellArr = [
    {
      name: "firstRune",
      runeSpellInfo: runeSpellInfo[0],
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/img/${
        runeSpellInfoFunction.firstRuneInfo(summoner)?.icon
      }`,
      runeSpellName: runeSpellInfoFunction.firstRuneInfo(summoner)?.name,
    },
    {
      name: "secondRune",
      runeSpellInfo: runeSpellInfo[0],
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/img/${
        runeSpellInfoFunction.secondRuneInfo(summoner)?.icon
      }`,
      runeSpellName: runeSpellInfoFunction.secondRuneInfo(summoner)?.name,
    },
    {
      name: "firstSpell",
      runeSpellInfo: runeSpellInfo[1],
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${
        runeSpellInfoFunction.firstSpellInfo(summoner)?.id
      }.png`,
      runeSpellName: runeSpellInfoFunction.firstSpellInfo(summoner)?.name,
      runeSpellDesc:
        runeSpellInfoFunction.firstSpellInfo(summoner)?.description,
    },
    {
      name: "secondSpell",
      runeSpellInfo: runeSpellInfo[1],
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${
        runeSpellInfoFunction.secondSpellInfo(summoner)?.id
      }.png`,
      runeSpellName: runeSpellInfoFunction.secondSpellInfo(summoner)?.name,
      runeSpellDesc:
        runeSpellInfoFunction.secondSpellInfo(summoner)?.description,
    },
  ];

  const runeDescMarkup = () => {
    return {
      __html: `${runeSpellInfoFunction.firstRuneInfo(summoner)?.longDesc}`,
    };
  };

  const itemArr = [
    { key: 1, itemNum: summoner.item0 },
    { key: 2, itemNum: summoner.item1 },
    { key: 3, itemNum: summoner.item2 },
    { key: 4, itemNum: summoner.item3 },
    { key: 5, itemNum: summoner.item4 },
    { key: 6, itemNum: summoner.item5 },
    { key: 7, itemNum: summoner.item6 },
  ];

  return (
    <tr className={styles.row}>
      <td className={styles.championImgCell}>
        <div className={styles.championImgBox}>
          <img
            className={styles.championImg}
            src={`https://ddragon.leagueoflegends.com/cdn/12.2.1/img/champion/${formatChampionName(
              summoner.championName
            )}.png`}
            alt=""
          />
        </div>
        <div className={styles.championLevel}>{summoner.champLevel}</div>
      </td>
      <td className={styles.spellCell}>
        {runeSpellArr.map((info) => (
          <RuneSpell
            runeSpellInfo={info}
            runeDescMarkup={runeDescMarkup}
            key={info.name}
          />
        ))}
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
          {itemArr.map((itemInfo) => (
            <Items
              itemNum={itemInfo.itemNum}
              itemsInfo={itemsInfo}
              key={itemInfo.key}
            />
          ))}
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
  );
};

export default IndividualState;
