import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  ignoreBrowserTokenWarning: true,
  token:
    "sky5AUm67nF6fOTl1iK6CAcuwRunjkFQSQXcMuDwP5pB2RTTy95oh99UuNE4hPFVZsoFt7vWMS9foS3RFfnmi4MSpajtYn7qliXK2qdh9ufssvE2i9EM2q796Vd9gHxLLIhXfkVGINhkbtPzflOYvcTJoHrWpZZVyPGntrY50wH1ZS4l046O",
  useCdn: true, // `false` if you want to ensure fresh data
});

export const submitForm = async (
  {
    emailAddress,
    firstName,
    lastName,
    phoneNumber,
    remarks,
    ...procsNConsults
  },
  images,
  procedures,
  consultations,
  date,
  user
) => {
  const ids = Object.keys(procsNConsults).filter((x) => procsNConsults[x]);

  const doc = {
    _type: "form",
    firstName,
    lastName,
    bookedFor: new Date(date),
    emailAddress,
    phoneNumber,
    sub: user.sub,
    remarks,
    images: images && (await uploadImages(images)),
    procedures: getProcedures(ids, procedures),
    consultations: getConsultations(ids, consultations),
    submitted: new Date(),
  };
  return await client.create(doc);
};

const getProcedures = (ids, procedures) => {
  const proceduresIds = procedures.map((item) => item._id);
  return ids
    .filter((item) => proceduresIds.find((i) => i === item))
    .map((item) => ({ _type: "reference", _key: item, _ref: item }));
};

const getConsultations = (ids, consultations) => {
  const consultationIds = consultations.map((item) => item._id);
  return ids
    .filter((item) => consultationIds.find((i) => i === item))
    .map((item) => ({ _type: "reference", _key: item, _ref: item }));
};
const uploadImages = async (images) => {
  const response = await Promise.all(
    images.map((image) => client.assets.upload("image", image))
  );
  return response.map(({ _id, assetId }) => ({
    _type: "image",
    _key: assetId,
    asset: {
      _type: "reference",
      _ref: _id,
    },
  }));
};

export const getForm = async (sub) => {
  const response = await client.fetch(
    '*[_type=="form" && sub ==$sub]{...,procedures[]->,consultations[]->,"images":images[].asset->url}',
    {
      sub,
    }
  );
  return response;
};

export const removeForm = async (_id) => {
  const response = await client.delete(_id);
  return response;
};
