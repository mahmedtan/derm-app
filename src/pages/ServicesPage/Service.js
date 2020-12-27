import React, { useContext, useEffect } from "react";
import { Box, Heading, Card, Button, ResponsiveContext, Text } from "grommet";
import Loading from "../Extras/Loading";
import BlockContentMain from "../../components/Utils/BlockContentMain";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../../reducers/selectedItemReducer";
import Footer from "../../components/Footer/Footer";
import PageNotFound from "../Extras/404";
import SidebarAccordian from "../../components/Sidebars/SidebarAccordian";
import { LinkNext } from "grommet-icons";
import { Link } from "react-router-dom";
import FaceVisual from "../../components/FaceVisual/FaceVisual";

const Service = ({ service, services, serviceTypes, size }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    service && dispatch(selectItem(service.serviceType.slug, service.slug));
  }, [service, dispatch]);
  if (service === undefined) return <PageNotFound />;
  if (!service) return <Loading />;

  return (
    <Box align="center" margin={{ vertical: "small" }} fill>
      <Box
        width="large"
        flex="grow"
        gap="large"
        pad={{
          horizontal: size === "small" ? "large" : "4rem",
          vertical: "large",
        }}
      >
        <Heading level="2" margin="none" textAlign="center">
          {service.name}
        </Heading>

        {service.slug === "injectables" && (
          <Box gap="small">
            <Text size="large" textAlign="center" margin="none">
              Select the areas of treatment to see what treatment options are
              available.
            </Text>{" "}
            <FaceVisual />
          </Box>
        )}
        <BlockContentMain body={service.body} />

        {(size === "small" || size === "xsmall") && (
          <Box>
            <Box align="center" gap="small">
              <Link to="/book-now">
                <Button
                  label="Book Now"
                  icon={<LinkNext />}
                  reverse
                  primary
                  size="medium"
                  style={{ borderRadius: "25px" }}
                />
              </Link>

              <Button
                label=" Call Now "
                icon={<LinkNext />}
                reverse
                secondary
                size="medium"
                href="tel:214-625-2777"
                style={{ borderRadius: "25px" }}
              />
            </Box>
            <Card
              pad="medium"
              margin={{ vertical: "large", horizontal: "small" }}
            >
              <SidebarAccordian serviceTypes={serviceTypes} />
            </Card>
          </Box>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default Service;
