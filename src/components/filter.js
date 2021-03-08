import React from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import PropTypes from 'prop-types';

const SearchFilters = props => {
  const { filteredStock, handleFilter } = props;

  const stockCategory = [
    'New York Stock Exchange',
    'Nasdaq Global Select',
    'NYSE Arca',
  ];

  const handleChange = (e) => {
    handleFilter(e.target.value)
  }

  const stocktype = stockCategory.map(stock => (
    <option key={Math.random()} value={stock}>
      {stock}
    </option>
  ));
  return (
    <select name="Select" onChange={(e) => handleChange(e)} value={filteredStock}>
      <option>
        ALL
      </option>
      {stocktype}
    </select>
  );
};

const mapStateToProps = state => ({
  filteredStock: state.filterReducer,
});

export default connect(mapStateToProps)(SearchFilters);
/* eslint-enable */
