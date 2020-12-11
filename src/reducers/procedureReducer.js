import { getAllProceedures } from "../services/procedures";
const reducer = (state = null, action) => {
  switch (action.type) {
    case "INIT_PROCEDURES":
      return action.data.procedures;
    default:
      return state;
  }
};
export const initProcedures = () => {
  return async (dispatch) => {
    const procedures = await getAllProceedures();
    dispatch({ type: "INIT_PROCEDURES", data: { procedures } });
  };
};
export default reducer;
