import { getAllBlogs } from "../services/blogs";
const initialState = null;

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_BLOGS":
      return action.data.sort(
        (a, b) =>
          new Date(b.createdAt).getMilliseconds() -
          new Date(a.createdAt).getMilliseconds()
      );
    default:
      return state;
  }
};

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await getAllBlogs();
    dispatch({
      type: "INIT_BLOGS",
      data: blogs,
    });
  };
};
export default blogReducer;
