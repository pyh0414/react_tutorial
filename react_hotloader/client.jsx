import React, { Component } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import Test from "./Test";
const Hot = hot(Test);

ReactDOM.render(<Test />, document.querySelector("#root"));
