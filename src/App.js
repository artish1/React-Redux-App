import React, { useEffect } from "react";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//reducers
import { reducer } from "./reducers/index";

import "./App.css";
import axios from "axios";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  useEffect(() => {
    axios
      .get("https://owlbot.info/api/v3/dictionary/apple", {
        headers: {
          Authorization: "Token 31962e31752bcc7e15fe8e5ba6f1340854af5989"
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        console.log(err.response);
      });
  }, []);

  return (
    <Provider store={store}>
      <div className="App"></div>
    </Provider>
  );
}

export default App;
