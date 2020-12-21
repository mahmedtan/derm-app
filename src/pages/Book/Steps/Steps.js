import StepOne from "./StepOne";
import StepFour from "./StepFour";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default [
  {
    title: "Select services",
    description: "Select your desired service",
    item: <StepOne />,
  },
  {
    title: "Upload photos",
    description: "Upload/Capture photos of your condition",
    item: <StepTwo />,
  },
  {
    title: "Appointment",
    description: "Please select your date and time of visit",
    item: <StepThree />,
  },

  {
    title: "Details",
    description: "Please select the item/items you want to talk about",
    item: <StepFour />,
  },
];
