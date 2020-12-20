const reducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return action.date;
    case "RESET_DATE":
      return null;
    default:
      return state;
  }
};
export const changeDate = (date) => {
  window.sessionStorage.setItem("date", date);
  return {
    type: "CHANGE_DATE",
    date,
  };
};

export default reducer;
