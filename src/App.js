import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import stockInfo from './container/stockInfo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/:stock_id" component={stockInfo} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
