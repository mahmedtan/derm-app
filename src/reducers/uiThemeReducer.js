const reducer = (state = "light", action) => {
  switch (action.type) {
    case "TOGGLE":
      return state === "light" ? "dark" : "light";
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
