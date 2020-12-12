import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});

export const getAvailableDates = async () => {
  const availableDates = await client.fetch(
    '*[_type=="dateAvailable"] | order(dateSelected) {dateSelected} '
  );
  // console.log(availableDates);
  return availableDates.map((item) => item.dateSelected);
};

export const getAvailableTimes = async () => {
  const availableTimes = await client.fetch(
    '*[_type=="timeAvailable"] | order(dayOfTheWeek)'
  );
  // console.log(availableTimes);

  return availableTimes;
};
