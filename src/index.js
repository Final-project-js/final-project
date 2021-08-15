import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootreducer from "./store/rootreducer";

const store = createStore(rootreducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
