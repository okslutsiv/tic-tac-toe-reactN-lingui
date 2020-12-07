import React, { setGlobal, addReducers, useEffect } from "reactn";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { defaultLocale, dynamicActivate } from "./i18n";
import "./i18n";

// set global state
const initialState = {
  history: [Array(9).fill(null)],
  currentStep: 0,
};
setGlobal(initialState);

//global reducers
addReducers({
  resetBoard: (global, dispatch, action) => ({
    history: [Array(9).fill(null)],
    currentStep: 0,
  }),
  writeHistory: (global, dispatch, currentBoard) => ({
    history: [...global.history, currentBoard],
    currentStep: global.history.length,
  }),
  setLang: (global, dispatch, lang) => ({
    currentLang: lang,
  }),
  setCurrentStep: (global, dispatch, step) => ({
    currentStep: step,
  }),
});

const I18nApp = () => {
  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(defaultLocale);
  }, []);

  return (
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <I18nApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
