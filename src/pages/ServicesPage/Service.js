import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Card,
  Button,
  Text,
  Image,
  ResponsiveContext,
} from "grommet";
import Loading from "../Extras/Loading";
import BlockContentMain from "../../components/Utils/BlockContentMain";
import { useDispatch } from "react-redux";
import { selectItem } from "../../reducers/selectedItemReducer";
import Footer from "../../components/Footer/Footer";
import SidebarAccordian from "../../components/Sidebars/SidebarAccordian";
import { LinkNext, LinkPrevious, Phone } from "grommet-icons";
import { Link } from "react-router-dom";
import FaceVisual from "../../components/FaceVisual/FaceVisual";
import Slider from "react-slick";
import { useContext } from "react";
import Product from "./Product";

const Service = ({ service, serviceTypes, size }) => {
  const dispatch = useDispatch();
  const PrevArrow = (props) => (
    <LinkPrevious className={props.className} onClick={props.onClick} />
  );
  const NextArrow = (props) => (
    <LinkNext className={props.className} onClick={props.onClick} />
  );
  const settings = {
    slidesToScroll: 1,
    swipe: true,
    speed: 1000,
    autoplaySpeed: 4000,
    swipeToScroll: true,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  useEffect(() => {
    service && dispatch(selectItem(service.serviceType.slug, service.slug));
  }, [service, dispatch]);

  if (service === undefined) return <Loading />;

  const { brands } = service;
  console.log(brands);

  return (
    <Box align="center" margin={{ vertical: "small" }} fill>
      <Box
        width="large"
        flex="grow"
        gap="medium"
        pad={{
          horizontal: size === "small" ? "large" : "4rem",
          vertical: "large",
        }}
      >
        <Heading level="2" margin="none" textAlign="center">
          {service.name}
        </Heading>
        {service.slug === "injectables" && (
          <Box gap={size === "small" ? "large" : "large"}>
            <Text size="large" textAlign="center" margin="none">
              Available Treatment Options
            </Text>
            <FaceVisual />
          </Box>
        )}
        {service.showSlider && (
          <Box width="35rem" alignSelf="center" pad="small">
            <Slider {...settings}>
              {service.sliderImages.map((source) => (
                <Box key={source} pad="small">
                  <Image src={source} />
                </Box>
              ))}
            </Slider>
          </Box>
        )}
        <Box style={{ textAlign: "justify" }}>
          <BlockContentMain body={service.body} />
        </Box>
        <Box margin={{ vertical: "small" }}>
          {brands &&
            brands.map(({ brand, image, products }) => (
              <Box
                key={brand}
                gap="large"
                margin={{ bottom: "large" }}
                align="center"
              >
                <Box width="xsmall" alignSelf="center">
                  <Image src={image} fit="contain" />
                </Box>
                <Box direction="row" flex wrap>
                  {products.map(({ image, productName, productPrice }) => (
                    <Product
                      key={productName}
                      basis=""
                      image={image}
                      name={productName}
                      price={productPrice}
                    />
                  ))}
                </Box>
                <Button
                  size="large"
                  label="Call to order"
                  reverse
                  href="tel:(469) 466-2727"
                  secondary
                  icon={<Phone />}
                />
              </Box>
            ))}
        </Box>

        {(size === "small" || size === "medium") && (
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
              elevation="large"
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
