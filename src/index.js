import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const HelloWorld = props => 
    <h1 count={props.count} onClick={props.incrementCounter}>
      {props.hello} {props.count}
    </h1>;

const Button = props => 
    <button 
      className="btn btn-primary"
      onClick={props.incrementCounter}
    >
      {props.buttonText} {props.count}
    </button>;

const higherOrderComponent = WrappedComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        hello: 'Higher order Component',
        buttonText: 'My Button',
        counter: 0
      }
    }

    incrementCounter = () => {
      console.log('called!')
      this.setState((prevState, props) => {
        console.log(prevState.counter)
        return {
          counter: prevState.counter + 1
        }
      })
    }

    render() {
      return <WrappedComponent 
                hello={this.state.hello}
                buttonText={this.state.buttonText}
                count={this.state.counter}
                incrementCounter={this.incrementCounter}
              />
    }
  }


const HOCHelloWorld = higherOrderComponent(HelloWorld);
const HOCButton = higherOrderComponent(Button);

const App = () => {
  return [<HOCHelloWorld key="1" />, <HOCButton key="2" />];
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
