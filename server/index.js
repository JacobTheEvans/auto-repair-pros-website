const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
const settings = require("./config.js");
const validate = require("./middleware/validateMessage.js");

let smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: settings.user,
    pass: settings.pass
  }
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.post("/contact", validate, (req, res) => {
  let mailOptions = {
    to: settings.receiver,
    subject: `Contact ${settings.domain} from ${req.body.name}`,
    text: `Name: ${req.body.name}\nPhone Number: ${req.body.number}\nMessage: ${req.body.message}`
  }
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.status(500).send({"message": "Internal Error", error});
    } else {
      res.status(200).send({"message": "Success", "response": response.message});
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

const PORT = process.env.PORT || settings.port;

app.listen(PORT, () => {
  console.log(`[+] Server starting on port ${PORT}`);
});
