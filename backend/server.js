const express = require("express");
const cors = require("cors");
const request = require("request");
var nodemailer = require("nodemailer");
const bodyparser = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyparser());

app.get("/events", (req, res) => {
  request(
    "https://events.auroville.org.in/api/public_events",
    { json: true },
    (err, resp, body) => {
      //   console.log(body);
      if (!err) {
        res.send(body);
      } else {
        res.send("Hello");
      }
    }
  );
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aurovileevents@gmail.com",
      pass: "navgurukul"
    }
  });

  var mailOptions = {
    from: "aurovileevents@gmail.com",
    to: "pratik18@navgurukul.org",
    subject: req.body.subject,
    text: req.body.massage,
    html:
      "<h3>Name : " +
      req.body.name +
      "</h3><h3>Email : " +
      req.body.email +
      "</h3><h3>Subject : " +
      req.body.subject +
      "</h3><h3>Message : " +
      req.body.message +
      "</h3>"
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.redirect("http://13.126.28.110:5002/contact");
    } else {
      console.log("Email sent: " + info.response);
      res.redirect("http://13.126.28.110:5002/");
    }
  });
});

app.listen(8090, () => {
  console.log("Your app is listening on 8090");
});
