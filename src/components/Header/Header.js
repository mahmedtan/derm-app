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
      elevation="xsmall"
      fill="horizontal"
      height="6rem"
      as="header"
    >
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
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
