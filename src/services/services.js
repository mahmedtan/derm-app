import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});

export const getAllServiceTypes = async () => {
  const serviceTypes = await client.fetch(
    '*[_type=="serviceType"] | order(name) {backgroundColor,description,"image":image.asset->url,name,"slug":slug.current,"services":*[_type=="service" && references(^._id)]{"slug":slug.current,name,_id, orderAccordian,hideOnAccordian},order }'
  );
  return serviceTypes;
};
export const getAllServices = async () => {
  const services = await client.fetch(
    '*[_type=="service" ]{showOnSlider,body,"image":image.asset->url,name,"slug":slug.current, serviceType->{name,"slug":slug.current},order,"sliderImages": sliderImages[].asset->url, showSlider, brands[]{"image":image.asset->url,brand,brandLink, products[]{"image":image.asset->url,productName, productPrice}} }'
  );
  return services;
};
