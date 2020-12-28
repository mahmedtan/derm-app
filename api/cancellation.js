const sg = require("@sendgrid/mail");

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
          new Date(date).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
      },
    };

    const response = await sg.send(message);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
