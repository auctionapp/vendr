import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
class SearchBar extends React.Component {
  
  constructor(props){
  	super(props);
  	this.state = {
  		term: ''
    };
  	this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }	
  
  onInputChange(e){
  	this.setState({term: e.target.value})
  };

  onFormSubmit(event){
    event.preventDefault();
    var url = '/searchitem/' + this.state.term;
    console.log(url);
    $.get(url, function(items){
        this.props.fetchItems(items)
      }.bind(this)
    );
      this.setState({term: ''});

  }


  render() {
    return (
       <form>
         <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange} /> 
            <span>
              <button onClick={this.onFormSubmit} type="submit" >Search</button>
            </span>
       </form>
    ) 
  }

}


function mapDispatchToProps(dispatch) {
  return {
     fetchItems: (items) => {
      dispatch({
        type:'FETCH_ITEMS',
        payload: items
      })
     }
  }
}




export default connect  (null, mapDispatchToProps)(SearchBar);