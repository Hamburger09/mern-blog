import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// * react-router-dom
import { BrowserRouter } from "react-router-dom";

// * redux toolkit
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </PersistGate>
);
