import StepOne from "./StepOne";
import StepFour from "./StepFour";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default [
  {
    title: "Services",
    description: "Make a selection",
    item: <StepOne />,
  },
  {
    title: "Upload photos",
    description: "optional",
    item: <StepTwo />,
  },
  {
    title: "Appointment",
    description: "Select your date and time of visit",
    item: <StepThree />,
  },

  {
    title: "Details",
    description: "Fill out the following",
    item: <StepFour />,
  },
];
