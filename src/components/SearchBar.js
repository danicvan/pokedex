import React from "react";
import { useState } from "react";
import searchImg from "../assets/search.svg";

const SearchBar = () => {
  const [search, setSearch] = useState("dito");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    console.log("Pokemon: ", search);
  };

  return (
    <div className="searchbar-container">
      <form className="searchbar">
        <input
          type="text"
          placeholder="Buscar Pokemon..."
          onChange={onChangeHandler}
        />
        <div className="searchbar-btn">
          <img
            src={searchImg}
            alt="Search Pokemon"
            onClick={onButtonClickHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
