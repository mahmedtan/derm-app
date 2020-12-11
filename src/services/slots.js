import sanityClient from "@sanity/client";
import moment from "moment";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});

export const getAvailableSlots = async () => {
  const availableSlots = await client.fetch('*[_type=="timing"]{dateAndTime}');
  return availableSlots.map((item) => moment(item.dateAndTime));
};
