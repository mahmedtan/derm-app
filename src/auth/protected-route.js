import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../pages/Extras/Loading";
import Layout from "../components/Utils/Layout";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <Layout>
          <Loading />
        </Layout>
      ),
    })}
    {...args}
  />
);

export default ProtectedRoute;
