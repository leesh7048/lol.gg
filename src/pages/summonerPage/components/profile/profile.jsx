import React from "react";
import styles from "./profile.module.css";
import { useNavigate } from "react-router-dom";

const Profile = ({ summonerProfile }) => {
  const { name, profileIconId, summonerLevel } = summonerProfile;
  const navigate = useNavigate();

  const refreshBtn = () => {
    navigate(0);
  };
  return (
    <header className={styles.header}>
      <div className={styles.profileIcon}>
        <img
          className={styles.iconImg}
          src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${profileIconId}.png`}
          alt="icon"
        />
        <span className={styles.level}>{summonerLevel}</span>
      </div>
      <div className={styles.profile}>
        <span className={styles.summonerId}>{name}</span>
        <button className={styles.summonerRefreshBtn} onClick={refreshBtn}>
          전적 갱신
        </button>
      </div>
    </header>
  );
};

export default Profile;
