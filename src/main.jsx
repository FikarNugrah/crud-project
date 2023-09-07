import React from "react";
import { createRoot } from "react-dom/client"; // Ganti impor ini
import { Provider } from "react-redux";
import store from "./store"; // Impor store Redux Anda
import App from "./App"; // Impor komponen App Anda

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
