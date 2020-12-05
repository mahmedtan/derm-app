import { getAllServices } from "../services/services";
const reducer = (state = null, action) => {
  switch (action.type) {
    case "INIT_SERVICES":
      return action.data.services;
    default:
      return state;
  }
};
export const initServices = () => {
  return async (dispatch) => {
    const services = await getAllServices();
    dispatch({ type: "INIT_SERVICES", data: { services } });
  };
};
export default reducer;
