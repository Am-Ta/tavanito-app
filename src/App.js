import React from "react";
import "./App.scss";

import GetCode from "./components/GetCode";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import Edit from "./components/Edit";

const App = () => {
    return (
        <div className="app">
            <GetCode />
            <Login />
            <UserInfo />
            <Edit />
        </div>
    );
};

export default App;
