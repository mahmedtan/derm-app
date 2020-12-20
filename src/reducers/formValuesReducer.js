const reducer = (
  state = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
  },
  action
) => {
  switch (action.type) {
    case "ON_CHANGE":
      return action.data;
    case "RESET_FORM":
      return {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
      };
    default:
      return state;
  }
};

export const changeValues = (data) => {
  window.sessionStorage.setItem("formValues", JSON.stringify(data));
  return {
    type: "ON_CHANGE",
    data,
  };
};

export default reducer;
