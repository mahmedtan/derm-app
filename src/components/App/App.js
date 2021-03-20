import { Box, Grommet } from "grommet";
import { theme } from "../../styles/theme.js";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Blogs from "../../pages/Blogs/Blogs";
import NotFound from "../../pages/Extras/404";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Blog from "../../pages/Blogs/Blog";
import { initializeBlogs } from "../../reducers/blogReducer";
import Layout from "../Utils/Layout.js";
import Services from "../../pages/ServicesPage/Services.js";
import { initServiceTypes } from "../../reducers/serviceTypeReducer.js";
import { initServices } from "../../reducers/serviceReducer.js";
import Book from "../../pages/Book/Book.js";
import Profile from "../../pages/Profile/Profile.js";

import ProtectedRoute from "../../auth/protected-route";
import Processing from "../../pages/Book/Processing.js";

import { initProcedures } from "../../reducers/procedureReducer";
import { initConsultations } from "../../reducers/consultationReducer";
import Confirmation from "../../pages/Book/Confirmation.js";
import AboutUs from "../../pages/ContactUs/AboutUs.js";
import Specials from "../../pages/Specials/Specials.js";
import Finance from "../../pages/Financing.js";
import ContactUs from "../../pages/ContactUs/ContactUs.js";
import ServicesMain from "../../pages/ServicesPage/ServicesMain/ServicesMain.js";
import { changeValues } from "../../reducers/formValuesReducer.js";
import { changeDate } from "../../reducers/dateReducer.js";
import PrivacyPolicy from "../../pages/PrivacyPolicy.js";
import { setBanner, toggleBanner } from "../../reducers/bannerReducer.js";

function App() {
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(initServices());
    dispatch(initServiceTypes());
    dispatch(initConsultations());
    dispatch(initProcedures());

    if (window.sessionStorage.getItem("banner")) {
      dispatch(setBanner(JSON.parse(window.sessionStorage.getItem("banner"))));
    } else {
      dispatch(toggleBanner());
    }

    const formValues = window.sessionStorage.getItem("formValues");
    const date = window.sessionStorage.getItem("date");
    if (formValues && date) {
      dispatch(changeValues(JSON.parse(formValues)));
      dispatch(changeDate(new Date(date)));
    }
  }, [dispatch]);

  return (
    <Grommet theme={theme} themeMode={uiTheme}>
      <Switch>
        <Route path="/blogs/:slug">
          <Blog />
        </Route>

        <Route path="/blogs">
          <Blogs blogs={blogs} />
        </Route>

        <ProtectedRoute path="/profile" component={Profile} />

        <ProtectedRoute path="/processing" component={Processing} />

        <ProtectedRoute path="/confirmation" component={Confirmation} />

        <Route path="/book-now" component={Book} />

        <Route path="/services/:slug">
          <Services />
        </Route>
        <Route path="/services">
          <Layout>
            <ServicesMain />
          </Layout>
        </Route>
        <Route path="/finance">
          <Layout>
            <Finance />
          </Layout>
        </Route>
        <Route path="/about-us">
          <Layout>
            <AboutUs />
          </Layout>
        </Route>
        <Route path="/contact-us">
          <Layout>
            <ContactUs />
          </Layout>
        </Route>
        <Route path="/specials">
          <Layout>
            <Specials />
          </Layout>
        </Route>
        <Route path="/privacy-policy">
          <Layout>
            <PrivacyPolicy />
          </Layout>
        </Route>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="*">
          <Layout>
            <NotFound />
          </Layout>
        </Route>
      </Switch>
    </Grommet>
  );
}

export default App;
