import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

//reducers
import { reducer } from "./reducers/index";

import "./App.css";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
    </Provider>
  );
}

export default App;
