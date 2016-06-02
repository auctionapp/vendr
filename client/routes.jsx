import React from 'react';
import ReactRouter, { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import MessageBox from './components/MessageBox.jsx';
import FacebookButton from './components/FacebookButton.jsx';
import Landing from './components/Landing.jsx';
import Signin from './components/Signin.jsx';
import SellItem from './components/SellItem.jsx';
import Navbar from './components/Navbar.jsx';
import ResultsPage from './components/SearchResultsPage.jsx';


module.exports = (
  <Route path="/" component={Navbar}>
    <Route path="message" component={MessageBox} />
    <Route path="signin" component={Signin} />
    <Route path="landing" component={Landing} />
    <Route path="sellitem" component={SellItem} />
    <Route path="searchresults" component={ResultsPage} />
  </Route>
);
