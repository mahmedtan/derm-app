const sg = require("@sendgrid/mail");

sg.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

module.exports = async (req, res) => {
  try {
    const {
      formValues: {
        phoneNumber,
        firstName,
        lastName,
        emailAddress,
        ...procsNConsults
      },
      date,
      procedures,
      consultations,
    } = req.body;

    const ids = Object.keys(procsNConsults).filter((x) => procsNConsults[x]);

    console.log(getProcedures(ids, procedures));
    const message = {
      to: emailAddress,
      bcc: "faseeha@mydermpa.com",
      from: "Chic Derm & Aesthetics <contact@mydermpa.com>",
      templateId: "d-61035d75b8014f2a9f781b4fd26181c9",
      dynamicTemplateData: {
        procedures: getProcedures(ids, procedures),
        consultations: getConsultations(ids, consultations),
        subject: "Appointment Confirmation",
        fullName: `${firstName} ${lastName}`,
        date:
          new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }) +
          " at " +
          new Date(date).toLocaleTimeString([], {
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

const getProcedures = (ids, procedures) => {
  return procedures.filter((item) => ids.find((i) => i === item._id));
};

const getConsultations = (ids, consultations) => {
  return consultations.filter((item) => ids.find((i) => i === item._id));
};
