import React, { useState } from "react";
import styles from "./runeSpell.module.css";

const RuneSpell = ({ runeSpellInfo, runeDescMarkup }) => {
  const [tooltipIsActive, setTooltipIsActive] = useState(false);

  const onMouseOver = () => {
    setTooltipIsActive(true);
  };
  const onMouseLeave = () => {
    setTooltipIsActive(false);
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
          <span dangerouslySetInnerHTML={runeDescMarkup()}></span>
        ) : (
          <span>{runeSpellInfo?.runeSpellDesc}</span>
        )}
      </div>
    </div>
  );
};

export default RuneSpell;
