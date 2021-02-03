import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailPage from '../detailPage/DetailPage';
import Home from '../home/Home';

export default function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route 
            path="/" 
            exact 
            render={(routerProps) => <Home {...routerProps}/> } 
          />
            
          <Route 
            path="/detail/:id" 
            exact 
            render={(routerProps) => <DetailPage {...routerProps}/> } 
          />
            
        </Switch>
      </Router>
    </>
  );
}
