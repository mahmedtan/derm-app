import { Header, ResponsiveContext } from "grommet";
import SnackBar from "./Header/Snackbar";

import { useSelector } from "react-redux";
import Navbar from "./Header/Navbar";

const NavHeader = () => {
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);
  return (
    <Header
      direction="row"
      justify="between"
      fill="horizontal"
      focusIndicator={false}
      hoverIndicator={true}
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
