import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  token: process.env.REACT_APP_CMS_TOKEN,
  useCdn: true, // `false` if you want to ensure fresh data
});

export const postAComment = async ({ patientName, remarks }) => {
  const res = await client.create({
    _type: "comment",
    patientName,
    remarks,
    show: false,
  });
  return res;
};
export const getComments = async () => {
  const res = await client.fetch(
    `*[_type=="comment" && show==true]{patientName, _id, remarks}`
  );
  return res;
};
