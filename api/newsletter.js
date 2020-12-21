const axios = require("axios");

module.exports = async (req, res) => {
  const { fullName, emailAddress, firstName, lastName } = req.body;

  var config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.put(
      "https://api.sendgrid.com/v3/marketing/contacts",
      {
        contacts: [
          {
            email: emailAddress,
            first_name: firstName || fullName,
            lastName,
          },
        ],
      },
      config
    );
    res.status(201).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
