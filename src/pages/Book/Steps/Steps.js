import StepOne from "./StepOne";
import StepFour from "./StepFour";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const Steps = [
  {
    title: "Appointment",
    description: "Book Online",
    item: <StepOne />,
  },
  {
    title: "Upload Images",
    description: "Optional",
    item: <StepTwo />,
  },
  {
    title: "Appointment ",
    description: "Select your date and time of visit",
    item: <StepThree />,
  },

  {
    title: "Details",
    description: "Fill out the following",
    item: <StepFour />,
  },
];

export default Steps;
