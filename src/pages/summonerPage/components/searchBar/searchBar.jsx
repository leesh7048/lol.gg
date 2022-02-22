import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../searchForm/searchForm";
import styles from "./searchBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.logoBox}>
        <Link to="/">
          <span className={styles.logo}>LoL.gg</span>
        </Link>
      </div>
      <div className={styles.searchFormBox}>
        <SearchForm />
      </div>
    </div>
  );
};

export default SearchBar;
