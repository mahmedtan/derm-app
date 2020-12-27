import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Heading, Text } from "grommet";
import Layout from "../../components/Utils/Layout";
import VerifyBanner from "./VerifyBanner";
import { getForm, removeForm } from "../../services/forms";
import Appointments from "./Appointments/Appointments";
import Loading from "../Extras/Loading";
import PatientDetails from "./Patient/PatientDetails";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory();
  const [fullName, setFullName] = useState(null);
  const [forms, setForms] = useState(null);
  useEffect(() => {
    if (user) getForm(user.sub).then((res) => setForms(res));
  }, [user]);
  useEffect(() => {
    if (forms)
      setFullName(forms[0] && forms[0].firstName + " " + forms[0].lastName);
    window.sessionStorage.clear();
  }, [forms]);
  useEffect(() => {
    if (forms) {
      const promises = forms
        .filter((form) => new Date(form.bookedFor) < new Date())
        .map((form) => removeForm(form._id));
      Promise.all(promises).then((res) => {
        console.log(res);
        history.push("/profile");
      });
    }
  }, []);

  if (!forms) return <Loading />;

  return (
    isAuthenticated && (
      <Layout>
        <Box
          align="center"
          height={{ min: "90vh" }}
          fill
          gap="large"
          pad={{ bottom: "large" }}
        >
          <Box align="center">
            <Heading
              textAlign="center"
              level="2"
              margin={{ top: "large", bottom: "none" }}
            >
              Welcome
            </Heading>
            <Text size="xlarge" margin={{ top: "small" }}>
              {fullName}
            </Text>
          </Box>

          {!user.email_verified && <VerifyBanner user={user} />}
          <PatientDetails
            setFullName={(fullName) => {
              setFullName(fullName);
            }}
          />

          <Appointments forms={forms} />
        </Box>
      </Layout>
    )
  );
};

export default Profile;
