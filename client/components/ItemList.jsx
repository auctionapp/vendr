import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemList extends Component {
	constructor(props){
		super(props);
	
	}


	renderList() {
	   return this.props.items.map((item) => {
	   	return (
	   	  <li className="resultlistitem"
	   	    onClick={() => this.props.selectedItem(item)}
	   	    key={item.id}>
           <img src="http://lorempixum.com/100/100/nature/4" />
           <h3>{item.title}</h3>
           <p>{item.description}</p>   
	   	  </li>
	   	)
	   })
	}

	render() {
		return (
			<ul className="listview">
			  { this.renderList() }
			</ul>
		)
	}

};


function mapStateToProps (state) {
   return {
   	  items: state.items
   };
};

function mapDispatchToProps(dispatch) {
  return {
    selectedItem: (selected) => {
      dispatch({
        type: 'SELECTED_ITEM',
        payload: selected
      })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
