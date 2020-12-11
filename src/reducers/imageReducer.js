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
  }
};

export const addImage = (file) => ({
  type: "ADD_IMAGE",
  data: file,
});

export default reducer;
