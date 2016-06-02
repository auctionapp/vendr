import React, { Component } from 'react';
import FacebookButton from './FacebookButton.jsx';
import SearchBar from './SearchBar.jsx';
import Signin from './Signin.jsx';
import SellItem from './SellItem.jsx'
import Router from 'react-router';
import MessageBox from './MessageBox.jsx';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';


export default class Navbar extends React.Component {
  

  render() {
  	return (
          <div className="pure-menu pure-menu-horizontal pure-menu-scrollable">
            <h2>TITLE</h2>
            <ul className="pure-menu-list">
              <li className="pure-menu-item"><Link className="pure-menu-link" to="landing">Home</Link></li>
              <li className="pure-menu-item"><Link className="pure-menu-link" to="sellitem">Sell an Item</Link></li>
              <li className="pure-menu-item"><Link className="pure-menu-link" to="message">Messages</Link></li>
              <li className="pure-menu-item"><SearchBar /></li>
              <li className="pure-menu-item"><Link className="pure-menu-link" to="signin">Signin</Link></li>
              <li className="pure-menu-item"><Link className="pure-menu-link" to="searchresults">results</Link></li>
              {this.props.children}
            </ul>  
          </div>
	   ) 
    };
  }

module.exports = Navbar;


