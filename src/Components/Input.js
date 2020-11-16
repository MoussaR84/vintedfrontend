import React from "react";

const Inputform = ({ type, setSearch }) => {
  return (
    <div className="search-cont">
      <input
        type="text"
        placeholder="Recherche des articles"
        className="search-input"
        onChange={(event) => {
          const value = event.target.value;
          setSearch(value);
        }}
      />
    </div>
  );
};
export default Inputform;
