import React from 'react';
/* eslint-disable */
const SearchBar = (props) => {
  const { handleSearch } = props
  const BarStyling = {
    width: '20rem', background: '#F2F1F9', border: 'none', padding: '0.5rem',
  };
  return (
    <div>
      <form onSubmit={e => handleSearch(e.target.value)}>
      <input style={BarStyling} placeholder="search stock" />
      <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
/* eslint-enable */
