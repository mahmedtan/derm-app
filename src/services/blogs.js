import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
});

export const getAllBlogs = async () => {
  const blogs = await client.fetch(
    '*[_type=="post"] | order(_createdAt desc){title,"slug":slug.current,"mainImage":mainImage.asset->url,author->{name, "image":image.asset->url, bio}, description}'
  );
  return blogs;
};

export const getFullBlog = async (slug) => {
  const blog = await client.fetch(
    `*[_type=="post" && slug.current == $slug] {title,"mainImage":mainImage.asset->url,author->{name, "image":image.asset->url, bio},body}`,
    {
      slug,
    }
  );
  return blog;
};
