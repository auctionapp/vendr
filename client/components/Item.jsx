import React, { Component } from 'react';
import { connect } from 'react-redux'

class Item extends React.Component {

//temp image for now
  render() {
    return (
      <div>
      <img className="image" src="http://lorempixum.com/100/100/nature/3" />
      <h3>{this.props.selectedItem.title}</h3>
      <p>{this.props.selectedItem.description}</p>
      </div>
    );
  };


}

function mapStateToProps (state) {
  return {
    selectedItem: state.selectedItem
  }
}

function mapDispatchToProps(dispatch) {
 return {

 }
}

export default connect (mapStateToProps, mapDispatchToProps)(Item);