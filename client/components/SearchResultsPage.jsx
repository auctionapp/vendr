import React, { Component } from 'react';
import ItemList from './ItemList.jsx';
import Item from './Item.jsx';

export default class ResultsPage extends Component {

	render() {
	  return (
		  <div className="resultsitem">
		    <Item  />
		    <ItemList />
		  </div>

	  	);

	}


}	