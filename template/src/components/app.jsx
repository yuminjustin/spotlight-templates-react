import React, { Component } from 'react';
import img from '@/assets/image/sp_wihte.png';

class Test extends Component {
  state = {
    text: "Hello world! Let's react"
  };
  render() {
    return (
      <div className="hw">
        <p>{this.state.text}</p>
        <img src={img} />
      </div>
    );
  }
}

export default Test;