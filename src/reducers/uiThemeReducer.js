const reducer = (state = "light", action) => {
  switch (action.type) {
    case "TOGGLE":
      window.localStorage.setItem(
        "uiTheme",
        state === "light" ? "dark" : "light"
      );
      return state === "light" ? "dark" : "light";

    case "SET_THEME":
      return action.uiTheme;
    default:
      return state;
  }
};

export const toggleUI = () => {
  return {
    type: "TOGGLE",
  };
};

export default reducer;
