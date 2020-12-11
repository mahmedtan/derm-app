import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});

export const getAllConsultations = async () => {
  try {
    const consultations = await client.fetch(
      '*[_type=="consultation"] | order(name) {_id,title,price,time, description}'
    );
    return consultations;
  } catch (error) {
    console.log("erroR", error);
  }
};
