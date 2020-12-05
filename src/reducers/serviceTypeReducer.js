import { getAllServiceTypes } from "../services/services";
const reducer = (state = null, action) => {
  switch (action.type) {
    case "INIT_TYPES":
      return action.data.serviceTypes;
    default:
      return state;
  }
};
export const initServiceTypes = () => {
  return async (dispatch) => {
    const serviceTypes = await getAllServiceTypes();
    dispatch({ type: "INIT_TYPES", data: { serviceTypes } });
  };
};
export default reducer;
