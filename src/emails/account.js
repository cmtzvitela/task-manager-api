const sgMail = require("@sendgrid/mail");


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "cgmartinez@intekglobal.com",
    subject: "Welcome to the Task App",
    text: `Welcome ${name}! Let us know what we can do to improve`,
  });
};

const sendDeleteUserMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "cgmartinez@intekglobal.com",
    subject: "User deleted succesdfully",
    text: `We are sad to see you go, ${name}. We hope to see you again`,
  });
};

module.exports = { sendWelcomeEmail, sendDeleteUserMail };
