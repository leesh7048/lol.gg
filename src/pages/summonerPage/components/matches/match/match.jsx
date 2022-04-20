import { useEffect, useState } from "react";
import MatchStats from "./matchStats/matchStats";
import styles from "./match.module.css";

import { QUEUE_TYPE } from "./queueType";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import dayjs from "dayjs";
import RuneSpell from "../../runeSpell/runeSpell.jsx";
import Items from "../../items/items";
import { Link } from "react-router-dom";

const Match = ({ infos, summonerProfile, lolApi }) => {
  const [isActive, setIsActive] = useState(false);
  const [userTeamStats, setUserTeamStats] = useState([]);
  const [opposingTeamStats, setOpposingTeamStats] = useState([]);
  const [runeSpellInfo, setRuneSpellInfo] = useState([]);
  const [itemsInfo, setItemsInfo] = useState({});
  const [championInfo, setChampionInfo] = useState({});

  const formatChampionName = (championName) => {
    if (championName === "FiddleSticks") {
      return (
        championName[0].toUpperCase() + championName.slice(1).toLowerCase()
      );
    }
    return championName;
  };

  const getChampionInfo = async () => {
    const champion = await lolApi.championInfo();
    setChampionInfo(champion);
  };

  const getRuneSpellInfo = async () => {
    const rune = lolApi.runeInfo();
    const spell = lolApi.spellInfo();
    const [_rune, _spell] = await Promise.all([rune, spell]);

    setRuneSpellInfo([_rune, Object.values(_spell)]);
  };
  const getItemsInfo = async () => {
    const items = await lolApi.itemsInfo();
    setItemsInfo(items);
  };

  useEffect(() => {
    getRuneSpellInfo();
    getItemsInfo();
    getChampionInfo();
  }, []);

  const getTeamStats = () => {
    if (
      infos.info.participants
        .slice(0, 5)
        .find((summoner) => summoner.puuid === summonerProfile.puuid)
    ) {
      setUserTeamStats(infos.info.participants.slice(0, 5));
      setOpposingTeamStats(infos.info.participants.slice(5, 10));
    } else {
      setOpposingTeamStats(infos.info.participants.slice(0, 5));
      setUserTeamStats(infos.info.participants.slice(5, 10));
    }
  };

  const getMyGameInfo = (infos) =>
    infos.info.participants.find(
      (summoner) => summoner.puuid === summonerProfile.puuid
    );

  const handleStatsBtn = () => {
    setIsActive(!isActive);
    if (!isActive) {
      getTeamStats();
    }
  };

  const runeSpellInfoFunction = {
    firstRuneInfo: function (myGameInfo) {
      return runeSpellInfo[0]
        ?.find((runeInfos) => runeInfos.id === myGameInfo.perks.styles[0].style)
        ?.slots.map((slot) => slot.runes)
        .flat()
        .find(
          (runeInfo) =>
            runeInfo.id === myGameInfo.perks.styles[0].selections[0].perk
        );
    },
    secondRuneInfo: function (myGameInfo) {
      return runeSpellInfo[0]?.find(
        (runeInfo) => runeInfo.id === myGameInfo.perks.styles[1].style
      );
    },
    firstSpellInfo: function (myGameInfo) {
      return runeSpellInfo[1]?.find(
        (spellInfo) => spellInfo.key === String(myGameInfo.summoner1Id)
      );
    },
    secondSpellInfo: function (myGameInfo) {
      return runeSpellInfo[1]?.find(
        (spellInfo) => spellInfo.key === String(myGameInfo.summoner2Id)
      );
    },
  };

  const runeSpellArr = [
    {
      name: "firstRune",
      runeSpellInfo: runeSpellInfo[0],
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/img/${
        runeSpellInfoFunction.firstRuneInfo(getMyGameInfo(infos))?.icon
      }`,
      runeSpellName: runeSpellInfoFunction.firstRuneInfo(getMyGameInfo(infos))
        ?.name,
    },
    {
      name: "secondRune",
      runeSpellInfo: runeSpellInfo[0],
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/img/${
        runeSpellInfoFunction.secondRuneInfo(getMyGameInfo(infos))?.icon
      }`,

      runeSpellName: runeSpellInfoFunction.secondRuneInfo(getMyGameInfo(infos))
        ?.name,
    },
    {
      name: "firstSpell",
      runeSpellInfo: runeSpellInfo[1],
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${
        runeSpellInfoFunction.firstSpellInfo(getMyGameInfo(infos))?.id
      }.png`,
      runeSpellName: runeSpellInfoFunction.firstSpellInfo(getMyGameInfo(infos))
        ?.name,
      runeSpellDesc: runeSpellInfoFunction.firstSpellInfo(getMyGameInfo(infos))
        ?.description,
    },
    {
      name: "secondSpell",
      runeSpellInfo: runeSpellInfo[1],
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${
        runeSpellInfoFunction.secondSpellInfo(getMyGameInfo(infos))?.id
      }.png`,
      runeSpellName: runeSpellInfoFunction.secondSpellInfo(getMyGameInfo(infos))
        ?.name,
      runeSpellDesc: runeSpellInfoFunction.secondSpellInfo(getMyGameInfo(infos))
        ?.description,
    },
  ];

  const itemArr = [
    { key: 1, itemNum: getMyGameInfo(infos).item0 },
    { key: 2, itemNum: getMyGameInfo(infos).item1 },
    { key: 3, itemNum: getMyGameInfo(infos).item2 },
    { key: 4, itemNum: getMyGameInfo(infos).item3 },
    { key: 5, itemNum: getMyGameInfo(infos).item4 },
    { key: 6, itemNum: getMyGameInfo(infos).item5 },
    { key: 7, itemNum: getMyGameInfo(infos).item6 },
  ];

  const runeDescMarkup = () => {
    return {
      __html: `${
        runeSpellInfoFunction.firstRuneInfo(getMyGameInfo(infos))?.longDesc
      }`,
    };
  };

  return (
    <div key={infos.metadata.matchId} className={styles.match}>
      <div
        className={
          getMyGameInfo(infos).win
            ? styles.matchWin
            : Math.floor(infos.info.gameDuration / 60) <= 5
            ? styles.reMatch
            : styles.matchLose
        }
      >
        <div className={styles.gameStats}>
          <div className={styles.gameType}>
            {QUEUE_TYPE[infos.info.queueId]}
          </div>
          <div className={styles.gameStamp}>
            {dayjs(infos.info.gameStartTimestamp).fromNow()}
          </div>

          <div
            className={
              getMyGameInfo(infos).win
                ? styles.gameResultWin
                : Math.floor(infos.info.gameDuration / 60) <= 5
                ? styles.gameRestart
                : styles.gameResultLose
            }
          >
            {getMyGameInfo(infos).win
              ? "승리"
              : Math.floor(infos.info.gameDuration / 60) <= 5
              ? "다시하기"
              : "패배"}
          </div>

          <div className={styles.gameLength}>
            {dayjs(
              infos.info.gameEndTimestamp
                ? infos.info.gameDuration * 1000
                : infos.info.gameDuration
            ).format("mm분ss초")}
          </div>
        </div>
        <div className={styles.gameSettingInfo}>
          <div className={styles.championImgBox}>
            <img
              className={styles.championImg}
              src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${formatChampionName(
                getMyGameInfo(infos).championName
              )}.png`}
              alt=""
            />
          </div>
          <div className={styles.runeSpell}>
            {runeSpellInfo.length &&
              runeSpellArr.map((runeSpellInfo) => (
                <RuneSpell
                  key={runeSpellInfo.name}
                  runeSpellInfo={runeSpellInfo}
                  runeDescMarkup={runeDescMarkup}
                />
              ))}
          </div>

          <div className={styles.championName}>
            <span>
              {
                championInfo[
                  formatChampionName(getMyGameInfo(infos).championName)
                ]?.name
              }
            </span>
          </div>
        </div>
        <div className={styles.kdaBox}>
          <div className={styles.kda}>
            <span>{getMyGameInfo(infos).kills}/</span>
            <span>{getMyGameInfo(infos).deaths}/</span>
            <span>{getMyGameInfo(infos).assists}</span>
          </div>
          <div className={styles.grade}>
            <span>
              {getMyGameInfo(infos).deaths === 0
                ? "Perfect"
                : (
                    (getMyGameInfo(infos).kills +
                      getMyGameInfo(infos).assists) /
                    getMyGameInfo(infos).deaths
                  ).toFixed(2)}{" "}
              평점
            </span>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.level}>
            <span>
              레벨
              {getMyGameInfo(infos).champLevel}
            </span>
          </div>
          <div className={styles.cs}>
            <span>{getMyGameInfo(infos).totalMinionsKilled}</span>
            <span>
              (
              {(
                getMyGameInfo(infos).totalMinionsKilled /
                Math.floor(infos.info.gameDuration / 60)
              ).toFixed(1)}
              )
            </span>
            <span>cs</span>
          </div>
          <div className={styles.killPercent}></div>
        </div>
        <div className={styles.items}>
          <div className={styles.itemList}>
            {itemArr.map((itemInfo) => (
              <Items
                itemsInfo={itemsInfo}
                itemNum={itemInfo.itemNum}
                key={itemInfo.key}
              />
            ))}
          </div>
          <div className={styles.controlWard}>
            <span>제어와드 </span>
            <span>{getMyGameInfo(infos).detectorWardsPlaced}</span>
          </div>
        </div>
        <div className={styles.followPlayers}>
          <div className={styles.blueTeam}>
            {infos.info.participants.slice(0, 5).map((blueTeam) => (
              <div className={styles.summoner} key={blueTeam.puuid}>
                <div>
                  <img
                    className={styles.championImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${formatChampionName(
                      blueTeam.championName
                    )}.png`}
                    alt=""
                  />
                </div>
                <div className={styles.summonerChampionName}>
                  <Link to={`/summoner?userName=${blueTeam.summonerName}`}>
                    <span className={styles.summonerLink}>
                      {blueTeam.summonerName}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.redTeam}>
            {infos.info.participants.slice(5, 10).map((redTeam) => (
              <div className={styles.summoner} key={redTeam.puuid}>
                <div>
                  <img
                    className={styles.championImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${formatChampionName(
                      redTeam.championName
                    )}.png`}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className={styles.summonerChampionName}>
                  <Link to={`/summoner?userName=${redTeam.summonerName}`}>
                    <span className={styles.summonerLink}>
                      {redTeam.summonerName}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            getMyGameInfo(infos).win ? styles.winStatsBtn : styles.loseStatsBtn
          }
          onClick={handleStatsBtn}
        >
          {!isActive ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
      </div>
      <MatchStats
        infos={infos}
        summonerProfile={summonerProfile}
        userTeamStats={userTeamStats}
        opposingTeamStats={opposingTeamStats}
        isActive={isActive}
        runeSpellInfo={runeSpellInfo}
        itemsInfo={itemsInfo}
        runeSpellInfoFunction={runeSpellInfoFunction}
      />
    </div>
  );
};
export default Match;
