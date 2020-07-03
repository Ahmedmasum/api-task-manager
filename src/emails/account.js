const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ahmedmasum1994@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ahmedmasum1994@gmail.com",
    subject: "cencelation confirms",
    text: `${name},We are sorry for you dissatisfaction`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};

// sgMail.send({
//   to: "ahmedmasum1994@gmail.com",
//   from: "andrew@mead.io",
//   subject: "This is my first creation!",
//   text: "I hope this one actually get to you",
// });
