import React from "react";
import SearchForm from "../summonerPage/components/searchForm/searchForm";
import styles from "./searchPage.module.css";

const SearchPage = () => {
  return (
    <main className={styles.main}>
      <span className={styles.title}>lol.gg</span>
      <div className={styles.searchFormBox}>
        <SearchForm />
      </div>
    </main>
  );
};

export default SearchPage;
