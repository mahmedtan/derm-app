import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zegc2wrv",
  dataset: "production",
  ignoreBrowserTokenWarning: true,
  token: process.env.REACT_APP_CMS_TOKEN,
});

export const getPatientDetails = async (sub) => {
  const response = await client.fetch(
    '*[_type=="patient" && sub==$sub]{_id, emailAddress, phoneNumber, fullName,_updatedAt, patientId}',
    {
      sub,
    }
  );
  return response;
};

export const updatePatientDetails = async ({
  emailAddress,
  fullName,
  phoneNumber,
  patientId,
  id,
  sub,
}) => {
  const response = await client.createOrReplace({
    _type: "patient",
    _id: id,
    patientId: patientId,
    emailAddress,
    fullName,
    phoneNumber,
    sub,
  });
  return response;
};
