import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import createStore from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={createStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);
