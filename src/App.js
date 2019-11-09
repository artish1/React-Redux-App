import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//reducers
import { reducer } from "./reducers/index";

import "./App.scss";
import SearchForm from "./components/SearchForm/SearchForm";
import WordCards from "./components/WordCards/WordCards";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchForm />
        <WordCards />
      </div>
    </Provider>
  );
}

export default App;
