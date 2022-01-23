import React from "react";
import styles from "./profile.module.css";

const Profile = ({ summonerProfile }) => {
  const { name, profileIconId, summonerLevel } = summonerProfile;
  return (
    <header className={styles.header}>
      <div className={styles.profileIcon}>
        <img
          className={styles.iconImg}
          src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/profileicon/${profileIconId}.png`}
          alt="icon"
        />
        <span className={styles.level}>{summonerLevel}</span>
      </div>
      <div className={styles.profile}>
        <span className={styles.summonerId}>{name}</span>
        <button className={styles.summonerRefreshBtn}>새로고침</button>
      </div>
    </header>
  );
};

export default Profile;
