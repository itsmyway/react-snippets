// React, ReactDOM
import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0 };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick(){
    //this === component instance sent to the dom
    // setState takes an object but this could lead to race conditions when multiple setStates are called
    /*this.setState ({
      counter: this.state.counter + 1
    }) */
    //so if your update depends on the current state , pass fn to setState and use 		prevState
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  };
  handleClick2(){
    this.props.onClickHandler(this.props.incrementValue);
  }
  render(){
    return (
      //<button onClick={this.handleClick}>{this.state.counter}</button>
      <button onClick={this.handleClick2}>+{this.props.incrementValue}</button>
    );
  }
}
