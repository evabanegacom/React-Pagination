/* eslint-disable */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Stock from "./stock";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import SearchFilters from "./filter";
import { connect } from "react-redux";
import { getStocks, searchFilter } from "../actions/actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }
  componentDidMount() {
    this.props.actions.getStocks();

    this.handleFilter = this.handleFilter.bind(this);
    this.filteredStock = this.filteredStock.bind(this);
  }

  handleFilter = (filter) => {
    const { filters } = this.props;
    filters(filter);
  };

  handlePageClick = ({ selected: selectedPage }) => {
    this.setState({
      currentPage: selectedPage
    });
  }

  filteredStock = (stocks, value) => {
    if (stocks || !stocks.length) {
      return value === "ALL" || value === undefined
        ? stocks
        : stocks.filter((stock) => stock.exchange === value);
    } else {
      return false;
    }
  };

  render() {
    const PER_PAGE = 50;
    const { stocks, filteredValue } = this.props;
    const pageCount = Math.ceil(stocks.length / PER_PAGE);
    const offset = this.state.currentPage * PER_PAGE;
    const checkFilter = this.filteredStock(stocks, filteredValue);
    const stockList = checkFilter ? (
      checkFilter.slice(offset, offset + PER_PAGE).map((stock) => {
        return <Stock stock={stock} />;
      })
    ) : (
      <p>loading...</p>
    );
  console.log(stockList)
    return (
      <div>
        <SearchFilters handleFilter={this.handleFilter} />
        <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
        {stockList}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stocks: state.stockReducer.stocks,
  filteredValue: state.filterReducer,
});

// const mapStateToProps = state => {
//   console.log(state)
//   return {
//     stocks: state.stockReducer.stocks
//   }
//   }

// const mapDispatchToProps = (dispatch) => ({
//   getStocks: () => dispatch(getStocks),
// });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getStocks }, dispatch),
    filters: (filter) => {
      dispatch(searchFilter(filter));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
/* eslint-enable */
