import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});

export const getAboutUs = async () => {
  const res = await client.fetch(
    `*[_type=="extra"  && pageType=="about-us"]{body, bodySecondary,title,titleSecondary,"sliderImages": sliderImages[].asset->url, showSlider, "posters": posters[].asset->url, metaTags }[0]`
  );
  return res;
};
export const getContactUs = async () => {
  const res = await client.fetch(
    `*[_type=="extra"  && pageType=="contact-us"]{body,title, "avatar":avatar.asset->url, description,metaTags}[0]`
  );
  return res;
};
export const getFinancing = async () => {
  const res = await client.fetch(
    `*[_type=="extra"  && pageType=="financing"]{body,title, "avatar":avatar.asset->url,description,metaTags}[0]`
  );
  return res;
};
export const getSpecials = async () => {
  const res = await client.fetch(
    `*[_type=="extra"  && pageType=="specials"][0]{title, body,"posters": posters[].asset->url,"avatar":avatar.asset->url,description,"posterVideo1": posterVideo1.asset->,"posterVideo2": posterVideo2.asset->, "bannerVideo": bannerVideo.asset->,metaTags}`
  );
  return res;
};

export const getPopup = async () => {
  const res = await client.fetch(
    `*[_type=="extra"  && pageType=="telemarketingPopup"][0]{"avatar":avatar.asset->url}`
  );
  return res;
};
