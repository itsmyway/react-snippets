/*
    ./client/index.js
    which is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonClass from './components/ButtonClass.jsx';
import ButtonFn from './components/ButtonFn.jsx';


//ReactDOM.render(<ButtonClass />, document.getElementById('root'));
//ReactDOM.render(<ButtonFn label="Hello"/>, document.getElementById('root'));

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { counter: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  incrementCounter(incrementValue) {
    this.setState((prevState) => ({
        counter: prevState.counter + incrementValue
    }));
  }
  render() {
    return(
      <div>
        <ButtonClass incrementValue={1} onClickHandler={this.incrementCounter}/>
        <ButtonClass incrementValue={5} onClickHandler={this.incrementCounter}/>
        <ButtonClass incrementValue={10} onClickHandler={this.incrementCounter}/>
        <ButtonClass incrementValue={100} onClickHandler={this.incrementCounter}/>
        <ButtonFn counter={this.state.counter}/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
