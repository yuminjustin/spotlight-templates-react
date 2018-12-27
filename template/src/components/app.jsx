import React, { Component } from 'react';
import style from 'B/assets/css/style.css';
class Test extends Component {
  state = {
    text: "Hello world! Let's react!"
  };
  render() {
    return (
      <div className={style.hw}>
        <p className={style.hw_p}>{this.state.text}</p>
        <img src="./static/image/white.png" />
      </div>
    );
  }
}

export default Test;
