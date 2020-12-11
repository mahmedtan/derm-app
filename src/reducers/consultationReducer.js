import { getAllConsultations } from "../services/consultations";
const reducer = (state = null, action) => {
  switch (action.type) {
    case "INIT_CONSULTATIONS":
      return action.data.consultations;
    default:
      return state;
  }
};
export const initConsultations = () => {
  return async (dispatch) => {
    const consultations = await getAllConsultations();
    dispatch({ type: "INIT_CONSULTATIONS", data: { consultations } });
  };
};
export default reducer;
