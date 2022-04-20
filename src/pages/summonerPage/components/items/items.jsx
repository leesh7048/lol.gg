import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./items.module.css";

const Items = ({ itemNum, itemsInfo }) => {
  const [tooltipIsActive, setTooltipIsActive] = useState(false);
  const [tooltipTop, setTooltipTop] = useState(false);
  const itemRef = useRef();
  const tooltipRef = useRef();

  const onMouseOver = () => {
    if (!itemsInfo[itemNum]?.name) return;
    if (!tooltipRef.current) return;
    setTooltipIsActive(true);
  };

  const onMouseLeave = () => {
    setTooltipIsActive(false);
  };

  const itemDescMarkup = (description) => {
    return { __html: description };
  };
  useLayoutEffect(() => {
    if (tooltipIsActive) {
      window.innerHeight <
      tooltipRef.current.getBoundingClientRect().height +
        itemRef.current.getBoundingClientRect().bottom
        ? setTooltipTop(true)
        : setTooltipTop(false);
    }
  }, [tooltipIsActive]);

  return (
    <div
      className={styles.item}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      ref={itemRef}
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
        <span className={styles.itemName}>{itemsInfo[itemNum]?.name}</span>
        <span className={styles.itemPlainText}>
          {itemsInfo[itemNum]?.plaintext}
        </span>
        <span
          className={styles.itemDescription}
          dangerouslySetInnerHTML={itemDescMarkup(
            itemsInfo[itemNum]?.description
          )}
        ></span>
        <span className={styles.itemGold}>
          gold:{itemsInfo[itemNum]?.gold.total}
        </span>
      </div>
    </div>
  );
};

export default Items;
