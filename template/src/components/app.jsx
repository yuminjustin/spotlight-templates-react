import React, { Component } from 'react';

class Test extends Component {
  state = {
    text: "Hello world! Let's react!"
  };
  render() {
    return (
      <div className="hw">
        <p>{this.state.text}</p>
        <img src="./static/image/white.png" />
      </div>
    );
  }
}

export default Test;