import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from './FacebookButton.jsx';

class Signin extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className='signin'>
        Signin or register using Facebook:
        <FacebookButton />
      </div>
    );
  }
}

module.exports = Signin;
