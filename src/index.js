import React from "react";
import ScrollToTop from "./components/Utils/ScrollToTop";
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
import indexReducer from "./reducers/indexReducer";
import procedureReducer from "./reducers/procedureReducer";
import consultationReducer from "./reducers/consultationReducer";
import imageReducer from "./reducers/imageReducer";
import bannerReducer from "./reducers/bannerReducer";
import dateReducer from "./reducers/dateReducer";
import formValuesReducer from "./reducers/formValuesReducer";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import dotenv from "dotenv";
dotenv.config();

const reducer = combineReducers({
  blogs: blogReducer,
  uiTheme: uiThemeReducer,
  serviceTypes: serviceTypesReducer,
  services: serviceReducer,
  selectedItem: selectItemReducer,
  activeIndex: indexReducer,
  procedures: procedureReducer,
  consultations: consultationReducer,
  images: imageReducer,
  date: dateReducer,
  formValues: formValuesReducer,
  banner: bannerReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Auth0ProviderWithHistory>
        <ScrollToTop />
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </Provider>,
  document.getElementById("root")
);
