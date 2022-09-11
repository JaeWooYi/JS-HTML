import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./JWtest/child1.js";

function App() {
  const text = "HI HI HI Hi HI";
  const text2 = function () {
    return <h3>HI2 HI2 HI2 HI2 HI2</h3>;
  };
  const sayReact = function () {
    alert("React Good");
  };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <h1>abcd Test</h1>
      <ChildComponent name="Me" age={100} />
      <ChildComponent name="Me2" age={200} />
      <ChildComponent name="Me3" age={300} />
      <h2>{text}</h2>
      {text2()}
      <div onClick={sayReact}>Click!!</div>
    </div>
  );
}

export default App;
