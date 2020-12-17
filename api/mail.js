const sg = require("@sendgrid/mail");

sg.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

module.exports = async (req, res) => {
  try {
    const {
      formValues: { phoneNumber, firstName, lastName, emailAddress },
      date,
    } = req.body;
    const message = {
      to: emailAddress,
      from: "mahmedexec@gmail.com",
      templateId: "d-61035d75b8014f2a9f781b4fd26181c9",
      dynamicTemplateData: {
        phoneNumber,
        emailAddress,
        subject: "Appointment Confirmation",
        fullName: `${firstName} ${lastName}`,
        date:
          new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }) +
          " " +
          new Date(date).toLocaleTimeString("en-US", {
            timeStyle: "short",
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
