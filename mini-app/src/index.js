const React = require('react')
const ReactDOM = require('react-dom')
const bridge = require('@vkontakte/vk-bridge')
const App = require('./App')
//import React from "react";
//import ReactDOM from "react-dom";
//import bridge from "@vkontakte/vk-bridge";
//import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(App, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
