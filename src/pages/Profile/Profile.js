import React, { useEffect, useState } from "react";
import CancellationBanner from "./CancellationBanner";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Heading, Text } from "grommet";
import Layout from "../../components/Utils/Layout";
import VerifyBanner from "./VerifyBanner";
import { getForm, removeForm } from "../../services/forms";
import Appointments from "./Appointments/Appointments";
import Loading from "../Extras/Loading";
import PatientDetails from "./Patient/PatientDetails";
import { useHistory } from "react-router-dom";
import ScrollToTop from "../../components/Utils/ScrollToTop";

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
  useEffect(() => {
    if (window.localStorage.getItem("cancel"))
      setTimeout(() => window.localStorage.removeItem("cancel"), 5000);
  }, []);

  if (!forms)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  return (
    isAuthenticated && (
      <Layout>
        <ScrollToTop />
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

          {window.localStorage.getItem("cancel") && <CancellationBanner />}

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
