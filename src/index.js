import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import reducer from "./store/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunk));
console.log(store.getState());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);