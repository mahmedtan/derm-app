const sg = require("@sendgrid/mail");
const moment = require("moment");

sg.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

module.exports = async (req, res) => {
  try {
    const { date, emailAddress, fullName } = req.body;

    const message = {
      to: emailAddress,
      bcc: ["contact@mydermpa.com", "faseeha@mydermpa.com"],
      from: "Chic Derm & Aesthetics <contact@mydermpa.com>",
      templateId: "d-8e49bec36dcf4d5bbfe67b4339ea8ea7",
      dynamicTemplateData: {
        subject: "Appointment Cancellation",
        fullName,

        date:
          new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }) +
          " at " +
          moment(date).format("hh:mm A"),
      },
    };

    const response = await sg.send(message);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
