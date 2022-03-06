import React, { useState } from "react";
import styles from "./items.module.css";

const Items = ({ itemNum, itemsInfo }) => {
  const [tooltipIsActive, setTooltipIsActive] = useState(false);

  const onMouseOver = () => {
    if (!itemsInfo[itemNum]?.name) return;
    setTooltipIsActive(true);
  };
  const onMouseLeave = () => {
    setTooltipIsActive(false);
  };

  const markup = (description) => {
    return { __html: description };
  };
  return (
    <div
      className={styles.item}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {itemNum !== 0 ? (
        <img
          className={styles.itemImg}
          src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/item/${itemNum}.png`}
          alt=""
        />
      ) : (
        ""
      )}

      <div
        className={tooltipIsActive ? styles.openTooltip : styles.closeTooltip}
      >
        <span className={styles.itemName}>{itemsInfo[itemNum]?.name}</span>
        <span className={styles.itemPlainText}>
          {itemsInfo[itemNum]?.plaintext}
        </span>
        <span
          className={styles.itemDescription}
          dangerouslySetInnerHTML={markup(itemsInfo[itemNum]?.description)}
        ></span>
        <span className={styles.itemGold}>
          gold:{itemsInfo[itemNum]?.gold.total}
        </span>
      </div>
    </div>
  );
};

export default Items;
