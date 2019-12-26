import React from "react";
import "./App.scss";

import GetCode from "./components/GetCode";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";

const App = () => {
    return (
        <div className="app">
            <GetCode />
            <Login />
            <UserInfo />
        </div>
    );
};

export default App;
