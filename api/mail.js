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
    const calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=Appointment+For+${new Date()
      .toLocaleString()
      .split(" ")
      .join(
        "+"
      )}&location=${`1312+West+Exchange+Pkwy,+%0ASuite+2130,+%0AAllen,+Texas+75013`}&dates=${new Date().toISOString()}`;

    const message = {
      to: emailAddress,
      bcc: ["contact@mydermpa.com", "faseeha@mydermpa.com"],
      from: "Chic Derm & Aesthetics <contact@mydermpa.com>",
      templateId: "d-61035d75b8014f2a9f781b4fd26181c9",
      dynamicTemplateData: {
        procedures: getProcedures(ids, procedures),
        consultations: getConsultations(ids, consultations),
        subject: "Appointment Confirmation",
        fullName: `${firstName} ${lastName},`,
        calendarLink,

        date: date,
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
