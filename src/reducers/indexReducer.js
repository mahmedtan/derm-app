const indexReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_INDEX":
      return state + 1;
    case "DECREMENT_INDEX":
      return state - 1;
    case "SET_INDEX":
      return action.index;
    case "RESET_INDEX":
      return 0;
    default:
      return state;
  }
};
export const incrementIndex = () => ({
  type: "INCREMENT_INDEX",
});
export const decrementIndex = () => ({
  type: "DECREMENT_INDEX",
});
export const setIndex = (index) => ({
  type: "SET_INDEX",
  index,
});

export default indexReducer;
