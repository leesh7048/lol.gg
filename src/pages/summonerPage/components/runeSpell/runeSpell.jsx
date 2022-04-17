import React, { useState, useRef, useEffect } from "react";
import styles from "./runeSpell.module.css";

const RuneSpell = ({ runeSpellInfo, runeDescMarkup }) => {
  const [tooltipIsActive, setTooltipIsActive] = useState(false);
  const [tooltipTop, setTooltipTop] = useState(false);

  const runeSpellRef = useRef();
  const tooltipRef = useRef();

  const onMouseOver = () => {
    if (!tooltipRef.current) return;
    setTooltipIsActive(true);
  };
  const onMouseLeave = () => {
    setTooltipIsActive(false);
  };

  useEffect(() => {
    if (tooltipIsActive) {
      window.innerHeight <
      tooltipRef.current.getBoundingClientRect().height +
        runeSpellRef.current.getBoundingClientRect().bottom
        ? setTooltipTop(true)
        : setTooltipTop(false);
    }
  }, [tooltipIsActive]);

  return (
    <div
      className={styles.runeSpell}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      ref={runeSpellRef}
    >
      <img className={styles.runeSpellImg} src={runeSpellInfo.imgUrl} alt="" />

      <div
        className={
          tooltipIsActive
            ? tooltipTop
              ? styles.topOpenTooltip
              : styles.bottomOpenTooltip
            : styles.closeTooltip
        }
        ref={(node) => {
          tooltipRef.current = node;
        }}
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
