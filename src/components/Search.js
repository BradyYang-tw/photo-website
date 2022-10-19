import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input type="text" onChange={inputHandler} />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
