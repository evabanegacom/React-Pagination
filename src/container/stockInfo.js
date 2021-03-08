import React, { connect } from 'react-redux';
/* eslint-disable */

const stockInfo = (props) => {
  const stockId = props.match.params.stock_id
  const currentStock = props.stocks.filter(stock => stock.symbol === stockId)
  const stockItems = currentStock ? (
      currentStock.map(stk =>(
          <div  key={stk.symbol}>
            <p>{stk.name}</p>
            <p>{stk.price}</p>
            <p>{stk.symbol}</p>
            <p>{stk.exchange}</p>
          </div>
      ))
  ) : (
      <p>loading.....</p>
  )
  return (
  <div>
    <h3>stock item</h3>
    {stockItems}
  </div>
  )
};

const mapStateToProps = state => ({
  stocks: state.stockReducer.stocks
});

export default connect(mapStateToProps)(stockInfo);
/* eslint-enable */
