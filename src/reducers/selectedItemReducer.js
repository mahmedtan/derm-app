const reducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_ITEM":
      return action.data;
    default:
      return state;
  }
};

export const selectItem = (serviceTypeSlug, serviceSlug) => {
  return {
    type: "SELECT_ITEM",
    data: {
      serviceTypeSlug,
      serviceSlug,
    },
  };
};

export default reducer;
