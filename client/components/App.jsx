import React, { Component, Proptypes } from 'react';
import MessageBox from './MessageBox.jsx';
import Navbar from './Navbar.jsx'
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

export default class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
         <Navbar />
      </div>
    );
  }
}

module.exports = App;
