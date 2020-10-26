import React, { PureComponent } from "react";

//Pure components only update when their props change
class CounterButtonPrettier extends PureComponent {
  state = {
    count: 0,
  };

  updateCount = () => {
    //Here state is passed with a callback function to avoid side effects caused by async state update
    //Useful when modifying current state
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButtonPrettier;
