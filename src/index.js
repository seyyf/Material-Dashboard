/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { configureStore } from "@reduxjs/toolkit";
import App from "App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

const store = configureStore({
  reducer: {},
});

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
