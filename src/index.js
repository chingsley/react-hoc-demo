import React from "react";
import ReactDOM from "react-dom";
import Example1 from './components/HOC1';
import Example2 from './components/HOC2';
import HOC3 from './components/HOC3/index';

import "./styles.css";


const App = () => {
  // return [<HOCHelloWorld key="1" />, <HOCButton key="2" />];
  return (
    <div className="App(remove this part to centralize things)">
      <Example1 />
      <Example2 />
      <HOC3 />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
