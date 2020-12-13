import { Grommet } from "grommet";
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
import Services from "../../pages/Services/Services.js";
import { initServiceTypes } from "../../reducers/serviceTypeReducer.js";
import { initServices } from "../../reducers/serviceReducer.js";
import Book from "../../pages/Book/Book.js";
import Profile from "../../pages/Profile/Profile.js";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../pages/Extras/Loading.js";
import ProtectedRoute from "../../auth/protected-route";
import Processing from "../../pages/Book/Processing.js";

import { initProcedures } from "../../reducers/procedureReducer";
import { initConsultations } from "../../reducers/consultationReducer";
import Confirmation from "../../pages/Book/Confirmation.js";

function App() {
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const { isLoading } = useAuth0();

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(initServices());
    dispatch(initServiceTypes());
    dispatch(initConsultations());
    dispatch(initProcedures());
  }, [dispatch]);
  if (isLoading) return <Loading />;

  return (
    <Grommet theme={theme} themeMode={uiTheme} full>
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

        <Route path="/services">
          <Services />
        </Route>
        <ProtectedRoute path="/book-now" component={Book} />
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
