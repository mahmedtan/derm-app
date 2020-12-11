import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});

export const getAllProceedures = async () => {
  const procedures = await client.fetch(
    '*[_type=="procedure"] | order(name) {_id,title,price,time, description}'
  );
  return procedures;
};
