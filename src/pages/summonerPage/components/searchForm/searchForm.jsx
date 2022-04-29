import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./searchForm.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="소환사명을 입력하세요"
        autoComplete="off"
        required
        ref={inputRef}
        onKeyPress={onKeyPress}
      />
      <button type="submit" className={styles.searchBtn}>
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default SearchForm;
