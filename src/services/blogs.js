import axios from "axios";
const baseUrl = "https://quiet-headland-46767.herokuapp.com/posts";

export const getAllBlogs = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};
