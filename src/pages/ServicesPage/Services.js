import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { Box, ResponsiveContext } from "grommet";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Service from "./Service";
import { useSelector } from "react-redux";
import Loading from "../Extras/Loading";
import SidebarServices from "../../components/Sidebars/SidebarServices";
import Layout from "../../components/Utils/Layout";

const Services = () => {
  const size = useContext(ResponsiveContext);
  const [services, serviceTypes] = useSelector(({ services, serviceTypes }) => [
    services,
    serviceTypes,
  ]);
  const match = useRouteMatch("/services/:slug");
  const service =
    match && services
      ? services.find((service) => service.slug === match.params.slug)
      : undefined;

  if (!serviceTypes)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  return (
    <Box>
      <Header />
      <Box direction="row-responsive" justify="end">
        <Box
          width="100%"
          height="88vh"
          justify="end"
          align="center"
          overflow="auto"
        >
          <Switch>
            <Route path="/services/:slug">
              <Service
                service={service}
                services={services}
                serviceTypes={serviceTypes}
                size={size}
              />
            </Route>
          </Switch>
        </Box>
        {size !== "small" && size !== "medium" ? (
          <SidebarServices serviceTypes={serviceTypes} />
        ) : null}
      </Box>
    </Box>
  );
};

export default Services;
