import axios from "axios";
const baseUrl = "/posts";

export const getAllBlogs = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};
