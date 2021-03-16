import { useState } from "react";
import {
  Layer,
  Button,
  Heading,
  Box,
  Image,
  AccordionPanel,
  Text,
  Accordion,
  Anchor,
} from "grommet";
import { Menu, Close } from "grommet-icons";
import { Link } from "react-router-dom";

import LightLogo from "./logo-light.png";
import DarkLogo from "./logo-dark.png";

import MenuBar from "./MenuBar";
import AuthenticationBtn from "../Authentication/AuthenticationBtn";
import { useSelector } from "react-redux";

const Snackbar = ({ uiTheme }) => {
  const [show, setShow] = useState(false);
  const serviceTypes = useSelector(({ serviceTypes }) => serviceTypes);

  const removeLayer = () => {
    setShow(false);
    document.body.classList.remove("is-scrollLocked");
  };

  return (
    <Box fill="horizontal">
      <MenuBar uiTheme={uiTheme} />
      <Box
        direction="row"
        gap="large"
        align="center"
        height="3.5rem"
        justify="around"
        fill="horizontal"
        pad={{ horizontal: "large" }}
        width="xlarge"
      >
        <Link to="/book-now">
          <Button primary label="Book" />
        </Link>
        <Link to="/">
          <Box overflow="hidden" height="xxsmall" width="9rem">
            <Image
              src={uiTheme === "light" ? LightLogo : DarkLogo}
              fit="cover"
            />
          </Box>
        </Link>
        <Button
          icon={<Menu />}
          onClick={() => {
            setShow(true);
            document.body.classList.add("is-scrollLocked");
          }}
        />
        {show && (
          <Layer
            position="right"
            background="background-front"
            onClickOutside={() => removeLayer()}
          >
            <Box
              pad={{ horizontal: "large", top: "large", bottom: "none" }}
              gap="medium"
              fill
            >
              <Button icon={<Close />} alignSelf="end" onClick={removeLayer} />
              <Box pad="small" align="center" animation="fadeIn" gap="large">
                <Box align="center" gap="large">
                  <Link to="/book-now" onClick={removeLayer} component={Anchor}>
                    <Text size="xlarge" margin="none">
                      Book Online
                    </Text>
                  </Link>

                  <Accordion alignSelf="center" gap="large">
                    <AccordionPanel
                      header={
                        <Box align="center">
                          <Anchor
                            alignSelf="center"
                            size="xlarge"
                            margin="none"
                          >
                            Dermatology
                          </Anchor>
                        </Box>
                      }
                    >
                      <Box align="center" gap="small" margin="small">
                        {serviceTypes
                          .find(({ name }) => name === "Dermatology")
                          .services.filter(
                            (item, index) => !item.hideOnAccordian && index < 4
                          )
                          .sort((a, b) => a.orderAccordian - b.orderAccordian)

                          .map((service) => {
                            return (
                              <Anchor
                                href={`/services/${service.slug}`}
                                key={service._id}
                              >
                                <Text
                                  size="xlarge"
                                  weight="normal"
                                  textAlign="center"
                                >
                                  {service.name}
                                </Text>
                              </Anchor>
                            );
                          })}
                      </Box>
                    </AccordionPanel>

                    <AccordionPanel
                      header={
                        <Box align="center">
                          <Anchor size="xlarge" margin="none">
                            Aesthetics
                          </Anchor>
                        </Box>
                      }
                    >
                      <Box align="center" gap="small" margin="small">
                        {serviceTypes
                          .find(({ name }) => name === "Injectables")
                          .services.filter((item) => !item.hideOnAccordian)
                          .sort((a, b) => a.orderAccordian - b.orderAccordian)

                          .map((service) => {
                            return (
                              <Anchor
                                href={`/services/${service.slug}`}
                                key={service._id}
                              >
                                <Text
                                  weight={"normal"}
                                  size="xlarge"
                                  textAlign="center"
                                >
                                  {service.name}
                                </Text>
                              </Anchor>
                            );
                          })}
                      </Box>
                    </AccordionPanel>
                  </Accordion>

                  <Link to="/specials" onClick={removeLayer} component={Anchor}>
                    <Text size="xlarge" margin="none">
                      Specials
                    </Text>
                  </Link>
                  <Link to="/services" onClick={removeLayer} component={Anchor}>
                    <Text size="xlarge" margin="none">
                      Services
                    </Text>
                  </Link>
                  <Link to="/finance" onClick={removeLayer} component={Anchor}>
                    <Text size="xlarge" margin="none">
                      Finance
                    </Text>
                  </Link>
                  <Link
                    to="/contact-us"
                    onClick={removeLayer}
                    component={Anchor}
                  >
                    <Text size="xlarge" margin="none">
                      Contact us
                    </Text>
                  </Link>
                  <Link to="/About-us" onClick={removeLayer} component={Anchor}>
                    <Text size="xlarge" margin="none">
                      About Us
                    </Text>
                  </Link>
                </Box>
              </Box>
              <Box
                alignSelf="center"
                onClick={() =>
                  document.body.classList.remove("is-scrollLocked")
                }
              >
                <AuthenticationBtn />
              </Box>
            </Box>
          </Layer>
        )}
      </Box>
    </Box>
  );
};

export default Snackbar;
