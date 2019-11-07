import React, { useEffect } from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//reducers
import { reducer } from "./reducers/index";

import "./App.scss";
import SearchForm from "./components/SearchForm/SearchForm";
import WordCard from "./components/WordCard/WordCard";

const store = createStore(reducer, applyMiddleware(thunk));

function App({ dispatch }) {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <div className="App">
        <SearchForm />
        <WordCard />
      </div>
    </Provider>
  );
}

export default App;
