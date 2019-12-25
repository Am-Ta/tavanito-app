import React from "react";
import "./App.scss";

import GetCode from "./components/GetCode";
import Login from "./components/Login";

const App = () => {
    return (
        <div className="app">
            <GetCode />
            <Login />
        </div>
    );
};

export default App;
