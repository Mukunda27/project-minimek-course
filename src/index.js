import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.css";
import reportWebVitals from "./reportWebVitals";

import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
const rootEl = document.getElementById("root");

let render = () => {
  const App = require("./App").default;
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    rootEl
  );
};

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./App", () => {
      setTimeout(render);
    });
  }
}

render();

reportWebVitals();
