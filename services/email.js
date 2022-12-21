const nodemailer = require("nodemailer");

const { USER_EMAIL, USER_PASSWORD, RECEIVER_EMAILs } = require("../config/credential");


const SMPT_PORT = 587;
const HOST_SERVICE = "smtp-relay.sendinblue.com";

const SENDER_EMAIL = USER_EMAIL;
const RECEIVER_EMAIL = RECEIVER_EMAILs;

const CC = [];
const BCC = [];

const EMAIL_SUBJECT = "Happy New year";
const EMAIL_BODY_HTML = "<h1>Happy New year</h1> <p>Congratulation from Proficient Academy</p>";

const options = {
    from: SENDER_EMAIL,
    to: RECEIVER_EMAIL,
    cc: CC,
    bb: BCC,
    subject: EMAIL_SUBJECT,
    html: EMAIL_BODY_HTML
}

const transporter = nodemailer.createTransport({
    host: HOST_SERVICE,
    port: SMPT_PORT,
    secure: false,
    auth: {
        user: USER_EMAIL,
        pass: USER_PASSWORD
    }
});

module.exports = { transporter, options }