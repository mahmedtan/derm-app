import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

export default [
  {
    title: "Selection",
    description: "Please select the item/items you want to talk about",
    item: <StepOne />,
  },
  {
    title: "Details",
    description: "Please select the item/items you want to talk about",
    item: <StepTwo />,
  },
  {
    title: "Optional",
    description: "Upload/Capture photos of your condition",
    item: <StepThree />,
  },
  {
    title: "Appointment",
    description: "Please select your date and time of visit",
    item: <StepFour />,
  },
];
