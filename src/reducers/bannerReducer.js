const reducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_BANNER":
      return !state;

    default:
      return state;
  }
};
export const toggleBanner = () => {
  return {
    type: "TOGGLE_BANNER",
  };
};

export default reducer;
