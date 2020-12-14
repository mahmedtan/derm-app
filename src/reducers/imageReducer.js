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
export const initImages = (data) => ({
  type: "INIT_IMAGES",
  data,
});

export default reducer;