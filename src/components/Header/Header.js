import { Header, ResponsiveContext } from "grommet";
import SnackBar from "./Snackbar";

import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const NavHeader = () => {
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  return (
    <Header
      direction="row"
      justify="between"
      elevation="small"
      fill="horizontal"
      as="header"
    >
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" || size === "medium" ? (
            <SnackBar uiTheme={uiTheme} />
          ) : (
            <Navbar uiTheme={uiTheme} />
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
};

export default NavHeader;
