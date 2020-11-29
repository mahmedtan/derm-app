import { Grommet } from "grommet";
import { theme } from "../styles/theme.js";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import NotFound from "../pages/404";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Blog from "../pages/Blog";
import { initializeBlogs } from "../reducers/blogReducer";
import Layout from "./Layout.js";

function App() {
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  return (
    <Grommet theme={theme} themeMode={uiTheme} full>
      <Switch>
        <Route path="/blogs/:slug">
          <Blog />
        </Route>
        <Route path="/blogs">
          <Layout>
            <Blogs blogs={blogs} />
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
