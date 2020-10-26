import React, { Component } from "react";
import CounterButton from "./CounterButton";
import CounterButtonPrettier from "./CounterButtonPrettier";

class Header extends Component {
  //Set component to never rerender
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div>
        <CounterButton color={"red"} />
        <CounterButtonPrettier color={"blue"} />
        <h1 className="f1">RoboFriends</h1>
      </div>
    );
  }
}

export default Header;
