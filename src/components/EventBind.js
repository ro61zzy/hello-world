import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome Back!",
    };
  }

  clickHandler() {
    this.setState({
      message: " You are in!!",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        {/*}binding is done because this keyword is not defined for eventhandlers*/}
        {/*another approach is using arrow fn
        <button onClick={() => this.clickHandler()}>Click</button> */}
      </div>
    );
  }
}

export default EventBind;
