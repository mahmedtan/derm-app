import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Heading } from "grommet";
import Layout from "../../components/Utils/Layout";
import VerifyBanner from "./VerifyBanner";
import { getForm } from "../../services/forms";
import Appointments from "./Appointments/Appointments";
import Loading from "../Extras/Loading";
import PatientDetails from "./Patient/PatientDetails";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
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
          <Heading
            textAlign="center"
            level="2"
            margin={{ top: "large", bottom: "none" }}
          >
            Welcome {fullName}
          </Heading>

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
