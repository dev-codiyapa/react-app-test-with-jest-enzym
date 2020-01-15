import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/login/Login.component";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
};

export default App;
