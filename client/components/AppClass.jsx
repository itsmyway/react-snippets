class Button extends React.Component {
  handleClick = () => {
    this.props.onClickHandler(this.props.incrementValue);
  }
  render(){
  //the following self invoking function created anonymous fn handlers for every button with incrementvalue
    /*return (
      <button onClick={() => this.props.onClickHandler(this.props.incrementValue)}>
        +{this.props.incrementValue}
      </button>
    );*/
    //a better approach would be
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

class App extends React.Component{
  state = { counter: 0};

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
        counter: prevState.counter + incrementValue
    }));
  }
  render() {
    return(
      <div>
        <Button incrementValue={1} onClickHandler={this.incrementCounter}/>
        <Button incrementValue={5} onClickHandler={this.incrementCounter}/>
        <Button incrementValue={10} onClickHandler={this.incrementCounter}/>
        <Button incrementValue={100} onClickHandler={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    )
  }
}
ReactDOM.render(<App />, mountNode);
