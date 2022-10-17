import React, { Component } from 'react';
import Box from './Box'
import Header from './values/Header';
import Input from './values/Input';

class Signup extends Component {
  render() {
    return (
      <div>
        <Box/>
        <Header/>
        <Input/>
      </div>
    );
  }
}

export default Signup;