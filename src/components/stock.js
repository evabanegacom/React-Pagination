import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable */

function Stock({stock}) {
  return (
    <div>
    <Link to={`/${stock.symbol}`} key={stock.symbol} className='link-decor'>
      <h3> { stock.name } </h3>
    </Link>
    </div>
  );
}

export default Stock;
/* eslint-enable */
