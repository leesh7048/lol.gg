import React from "react";
import styles from "./match.module.css";
import { SPELL } from "./spell";
import { RUNES } from "./runes";
import { CHAMPIONS } from "./champions";
import { QUEUE_TYPE } from "./queueType";
import dayjs from "dayjs";

const Match = ({
  matchInfo,
  summonerProfile,
  addMatchCount,
  gameModeHandle,
}) => {
  const today = dayjs();
  console.log(matchInfo);

  const formatChampionName = (championName) => {
    if (championName === "FiddleSticks") {
      return (
        championName[0].toUpperCase() + championName.slice(1).toLowerCase()
      );
    }
    return championName;
  };

  const getMyGameInfo = (infos) =>
    infos.info.participants.find((a) => a.puuid === summonerProfile.puuid);
  console.log(matchInfo);
  return (
    <div className={styles.matches}>
      <div className={styles.gameMode}>
        <button onClick={gameModeHandle}>전체</button>
        <button onClick={gameModeHandle}>솔로랭크</button>
        <button onClick={gameModeHandle}>자유랭크</button>
        <button onClick={gameModeHandle}>일반</button>
        <button onClick={gameModeHandle}>무작위 총력전</button>
      </div>
      {matchInfo.map((infos) => (
        <div
          key={infos.metadata.matchId}
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
                src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${formatChampionName(
                  getMyGameInfo(infos).championName
                )}.png`}
                alt=""
              />
            </div>
            <div className={styles.spells}>
              <div className={styles.spell}>
                <img
                  className={styles.spellImg}
                  src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${
                    SPELL[getMyGameInfo(infos).summoner1Id]
                  }.png`}
                  alt=""
                />
              </div>
              <div className={styles.spell}>
                <img
                  className={styles.spellImg}
                  src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${
                    SPELL[getMyGameInfo(infos).summoner2Id]
                  }.png`}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.runes}>
              <div className={styles.run}>
                <img
                  className={styles.runImg1}
                  src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${
                    RUNES[
                      getMyGameInfo(infos).perks.styles[0].selections[0].perk
                    ]
                  }.png`}
                  alt=""
                />
              </div>
              <div className={styles.run}>
                <img
                  className={styles.runImg2}
                  src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${
                    RUNES[getMyGameInfo(infos).perks.styles[1].style]
                  }.png`}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.championName}>
              <span>{CHAMPIONS[getMyGameInfo(infos).championId]}</span>
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
              <div className={styles.item}>
                {getMyGameInfo(infos).item0 !== 0 ? (
                  <img
                    className={styles.itemImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${
                      getMyGameInfo(infos).item0
                    }.png`}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.item}>
                {getMyGameInfo(infos).item1 !== 0 ? (
                  <img
                    className={styles.itemImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${
                      getMyGameInfo(infos).item1
                    }.png`}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.item}>
                {getMyGameInfo(infos).item2 !== 0 ? (
                  <img
                    className={styles.itemImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${
                      getMyGameInfo(infos).item2
                    }.png`}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.item}>
                {getMyGameInfo(infos).item3 !== 0 ? (
                  <img
                    className={styles.itemImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${
                      getMyGameInfo(infos).item3
                    }.png`}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.item}>
                {getMyGameInfo(infos).item4 !== 0 ? (
                  <img
                    className={styles.itemImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${
                      getMyGameInfo(infos).item4
                    }.png`}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.item}>
                {infos.info.participants.find(
                  (a) => a.puuid === summonerProfile.puuid
                ).item5 !== 0 ? (
                  <img
                    className={styles.itemImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${
                      getMyGameInfo(infos).item5
                    }.png`}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.item}>
                {getMyGameInfo(infos).item6 !== 0 ? (
                  <img
                    className={styles.itemImg}
                    src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${
                      getMyGameInfo(infos).item6
                    }.png`}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={styles.controlWard}>
              <span>제어와드 </span>
              <span>{getMyGameInfo(infos).detectorWardsPlaced}</span>
            </div>
          </div>
          <div className={styles.followPlayers}>
            <div className={styles.blueTeam}>
              {infos.info.participants.slice(0, 5).map((blueTeam) => (
                <div className={styles.summoner}>
                  <div>
                    <img
                      className={styles.championImg}
                      src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${formatChampionName(
                        blueTeam.championName
                      )}.png`}
                      alt=""
                    />
                  </div>
                  <div className={styles.summonerChampionName}>
                    <a
                      className={styles.summonerLink}
                      href={`http://localhost:3000/summoner?userName=${blueTeam.summonerName}`}
                    >
                      {blueTeam.summonerName}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.redTeam}>
              {infos.info.participants.slice(5, 10).map((redTeam) => (
                <div className={styles.summoner}>
                  <div>
                    <img
                      className={styles.championImg}
                      src={`https://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${formatChampionName(
                        redTeam.championName
                      )}.png`}
                      alt=""
                    />
                  </div>
                  <div className={styles.summonerChampionName}>
                    <a
                      className={styles.summonerLink}
                      href={`http://localhost:3000/summoner?userName=${redTeam.summonerName}`}
                    >
                      {redTeam.summonerName}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.statsBtn}></div>
        </div>
      ))}
      <div>
        <button onClick={addMatchCount}> 더보기</button>
      </div>
    </div>
  );
};
export default Match;
