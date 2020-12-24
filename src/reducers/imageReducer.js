const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      // console.log(state);
      return state.concat(
        action.data.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    case "REMOVE_IMAGE":
      // console.log("reducer activated", action);

      return state.filter((item) => item.name !== action.data.name);
    case "RESET_IMAGES":
      return [];
    default:
      return state;
    case "INIT_IMAGES":
      return action.data;
  }
};

export const addImage = (file) => ({
  type: "ADD_IMAGE",
  data: file,
});
export const removeImage = (file) => ({
  type: "REMOVE_IMAGE",
  data: file,
});
export const initImages = (data) => ({
  type: "INIT_IMAGES",
  data,
});

export default reducer;
