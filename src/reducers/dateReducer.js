let initialState = new Date(new Date().setHours(9)).setMinutes(0);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return action.date;
    case "RESET_DATE":
      return initialState;
    default:
      return state;
  }
};
export const changeDate = (date) => {
  return {
    type: "CHANGE_DATE",
    date,
  };
};

export default reducer;
