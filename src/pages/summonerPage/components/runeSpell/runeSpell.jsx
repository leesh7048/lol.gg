import React, { useState } from "react";
import styles from "./runeSpell.module.css";

const RuneSpell = ({ runeSpellInfo, infos, getMyGameInfo }) => {
  const [tooltipIsActive, setTooltipIsActive] = useState(false);

  const detailInfo = (info) =>
    Object.values(info).find(
      (b) => b.key === String(getMyGameInfo(infos).summoner1Id)
    );

  const onMouseOver = () => {
    setTooltipIsActive(true);
  };
  const onMouseLeave = () => {
    setTooltipIsActive(false);
  };
  const createMarkup = () => {
    return {
      __html: `${
        runeSpellInfo.runeSpellInfo
          ?.find((a) => a.id === getMyGameInfo(infos).perks.styles[0].style)
          .slots.map((a) => a.runes)
          .flat()
          .find(
            (a) =>
              a.id === getMyGameInfo(infos).perks.styles[0].selections[0].perk
          ).longDesc
      }`,
    };
  };

  //   console.log("runeSpellInfo.runeSpellInfo", runeSpellInfo.runeSpellInfo);
  //   console.log("mygame", getMyGameInfo(infos));
  console.log(
    runeSpellInfo.runeSpellInfo?.find(
      (b) => b.key === String(getMyGameInfo(infos).summoner1Id)
    )?.name
  );

  return (
    <div
      className={styles.runeSpell}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <img className={styles.runeSpellImg} src={runeSpellInfo.imgUrl} alt="" />

      <div
        className={
          tooltipIsActive ? styles.openSpellTooltip : styles.closeSpellTooltip
        }
      >
        <span>{runeSpellInfo.runeSpellName}</span>
        <span>{runeSpellInfo?.runeSpellDesc}</span>
        {/* <span dangerouslySetInnerHTML={createMarkup()}> */}
        {
          //   runeSpellInfo.runeSpellInfo?.find(
          //     (b) => b.key === String(getMyGameInfo(infos).summoner1Id)
          //   )?.description
          //
          //   runeSpellInfo.runeSpellInfo?.find(
          //     (b) => b.key === String(getMyGameInfo(infos).summoner2Id)
          //   )?.description
          //
          //   runeSpellInfo.runeSpellInfo
          //     ?.find((a) => a.id === getMyGameInfo(infos).perks.styles[0].style)
          //     .slots.map((a) => a.runes)
          //     .flat()
          //     .find(
          //       (a) =>
          //         a.id ===
          //         getMyGameInfo(infos).perks.styles[0].selections[0].perk
          //     ).longDesc
        }
        {/* </span> */}
      </div>
    </div>
  );
};

export default RuneSpell;
