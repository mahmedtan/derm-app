import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});

export const getAboutUs = async () => {
  const res = await client.fetch(
    `*[_type=="extra"  && pageType=="about-us"]{body,title, "avatar":avatar.asset->url}[0]`
  );
  return res;
};
export const getSpecials = async () => {
  const res = await client.fetch(
    `*[_type=="extra"  && pageType=="specials"][0]{title, body,"posters": posters[].asset->url,"avatar":avatar.asset->url}`
  );
  return res;
};
