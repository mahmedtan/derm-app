import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Heading } from "grommet";
import Layout from "../../components/Utils/Layout";
import VerifyBanner from "./VerifyBanner";
import { getForm } from "../../services/forms";
import Appointments from "./Appointments";
import Loading from "../Extras/Loading";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [forms, setForms] = useState(null);
  useEffect(() => {
    if (user) getForm(user.sub).then((res) => setForms(res));
  }, [user]);

  if (!forms) return <Loading />;
  return (
    isAuthenticated && (
      <Layout>
        <Box
          align="center"
          background="background-back"
          height={{ min: "90vh" }}
        >
          <Heading textAlign="center" level="2">
            Welcome {forms[0] && forms[0].firstName + " " + forms[0].lastName}
          </Heading>

          {!user.email_verified && <VerifyBanner user={user} />}
          <Appointments forms={forms} />
        </Box>
      </Layout>
    )
  );
};

export default Profile;
