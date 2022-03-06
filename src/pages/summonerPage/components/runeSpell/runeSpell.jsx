import React, { useState } from "react";
import styles from "./runeSpell.module.css";

const RuneSpell = ({ runeSpellInfo, infos, getMyGameInfo }) => {
  const [tooltipIsActive, setTooltipIsActive] = useState(false);

  const onMouseOver = () => {
    setTooltipIsActive(true);
  };
  const onMouseLeave = () => {
    setTooltipIsActive(false);
  };
  const markup = () => {
    return {
      __html: `${
        runeSpellInfo.runeSpellInfo
          ?.find(
            (info) => info.id === getMyGameInfo(infos).perks.styles[0].style
          )
          ?.slots.map((a) => a.runes)
          .flat()
          .find(
            (info) =>
              info.id ===
              getMyGameInfo(infos).perks.styles[0].selections[0].perk
          ).longDesc
      }`,
    };
  };

  return (
    <div
      className={styles.runeSpell}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <img className={styles.runeSpellImg} src={runeSpellInfo.imgUrl} alt="" />

      <div
        className={tooltipIsActive ? styles.openTooltip : styles.closeTooltip}
      >
        <span className={styles.runeSpellName}>
          {runeSpellInfo?.runeSpellName}
        </span>

        {runeSpellInfo.name === "firstRune" ? (
          <span dangerouslySetInnerHTML={markup()}></span>
        ) : (
          <span>{runeSpellInfo?.runeSpellDesc}</span>
        )}
      </div>
    </div>
  );
};

export default RuneSpell;
