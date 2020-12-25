const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_IMAGE":
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
    case "INIT_IMAGES":
      return action.data;
    default:
      return state;
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
