import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./search.module.css";

const Search = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSearch = () => {
    const value = inputRef.current.value;
    navigate(`/summoner?userName=${value}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <main className={styles.main}>
      <span className={styles.title}>lol.gg</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          ref={inputRef}
          onKeyPress={onKeyPress}
        />
        <button type="submit" className={styles.searchBtn}>
          검색
        </button>
      </form>
    </main>
  );
};

export default Search;
