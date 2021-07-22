import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});

export const getAvailableTimes = async () => {
  const availableTimes = await client.fetch(
    '*[_type=="timeAvailable"] | order(dayOfTheWeek)'
  );

  return availableTimes;
};
