import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import blogReducer from "./reducers/blogReducer";
import uiThemeReducer from "./reducers/uiThemeReducer";
import serviceTypesReducer from "./reducers/serviceTypeReducer";
import serviceReducer from "./reducers/serviceReducer";
import selectItemReducer from "./reducers/selectedItemReducer";
const reducer = combineReducers({
  blogs: blogReducer,
  uiTheme: uiThemeReducer,
  serviceTypes: serviceTypesReducer,
  services: serviceReducer,
  selectedItem: selectItemReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
