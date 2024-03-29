import {
  Box,
  Heading,
  Form,
  Text,
  ResponsiveContext,
  Paragraph,
} from "grommet";
import React, { useContext, useEffect } from "react";
import StepFooter from "./StepFooter";
import { useHistory } from "react-router-dom";
import Steps from "./Steps/Steps";
import { useDispatch, useSelector } from "react-redux";
import StepHeader from "./StepHeader";
import Loading from "../Extras/Loading";
import { changeValues } from "../../reducers/formValuesReducer";
import { uploadImages } from "../../services/forms";
import { useState } from "react";
import Spinner from "../../components/Utils/Spinner";
import { min } from "moment";
import { Helmet } from "react-helmet";

const Book = () => {
  const size = useContext(ResponsiveContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const { activeIndex, procedures, consultations, formValues, images } =
    useSelector(
      ({ procedures, consultations, activeIndex, formValues, images }) => ({
        activeIndex,
        formValues,
        procedures,
        consultations,
        images,
      })
    );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeIndex]);

  if (!(procedures && consultations && images)) {
    return <Loading />;
  }

  if (loading)
    return (
      <Box
        align="center"
        justify="center"
        height={{ min: "100vh" }}
        pad="large"
      >
        <Heading textAlign="center">Processing your request</Heading>
        <Box height="medium">
          <Spinner />
        </Box>
        <Paragraph>
          This might take a minute or two depending on the number of images
          you've uploaded. Meanwhile, Please do not refresh or close this page.
        </Paragraph>
      </Box>
    );

  return (
    <>
      <Helmet>
        <title>Book Online</title>
      </Helmet>
      <Box
        align="center"
        pad={{ bottom: "xlarge" }}
        background="background-gray"
        height={{ min: "100vh" }}
      >
        <Box
          align="center"
          width="large"
          pad={size === "small" ? "large" : "medium"}
          gap="medium"
        >
          <Box gap="small" fill>
            <StepHeader />
            <Heading margin={{ vertical: "none" }} level="2" textAlign="center">
              {Steps[activeIndex].title}
            </Heading>
            <Text textAlign="center">{Steps[activeIndex].description}</Text>
          </Box>

          <Box>
            <Form
              validate="blur"
              value={formValues}
              onChange={(nextValue) => dispatch(changeValues(nextValue))}
              onSubmit={({ value }) => {
                setLoading(true);
                images
                  ? uploadImages(images).then((res) => {
                      window.sessionStorage.setItem(
                        "images",
                        JSON.stringify(res)
                      );
                      history.push("/processing");
                    })
                  : history.push("/processing");
              }}
            >
              <Box
                gap="small"
                margin={{
                  bottom: "xlarge",
                }}
              >
                {Steps[activeIndex].item}
                <StepFooter />
              </Box>
            </Form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Book;
