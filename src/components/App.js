import { Grommet } from "grommet";
import { theme } from "../styles/theme.js";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import NotFound from "../pages/404";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Blog from "../pages/Blog";
import { initializeBlogs } from "../reducers/blogReducer";

function App() {
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const match = useRouteMatch("/blogs/:slug");
  const blog =
    match && blogs
      ? blogs.find((blog) => blog.slug === match.params.slug)
      : null;
  useEffect(() => {
    dispatch(initializeBlogs());
  });
  return (
    <Grommet theme={theme} themeMode={uiTheme} full>
      <Header />

      <Switch>
        <Route path="/blogs/:slug">
          <Blog blog={blog} />
        </Route>
        <Route path="/blogs">
          <Blogs blogs={blogs} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </Grommet>
  );
}

export default App;
