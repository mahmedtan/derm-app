const reducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_BANNER":
      window.sessionStorage.setItem("banner", JSON.stringify(!state));
      return !state;
    case "SET_BANNER":
      return action.banner;

    default:
      return state;
  }
};
export const toggleBanner = () => {
  return {
    type: "TOGGLE_BANNER",
  };
};

export const setBanner = (banner) => {
  return {
    type: "SET_BANNER",
    banner,
  };
};
export default reducer;
