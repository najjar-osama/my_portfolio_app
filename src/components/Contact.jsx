import React from "react";
import email from "../images/email.png";
import github from "../images/pgithub.png";
import linkedin from "../images/in.png";
import twitter from "../images/twitter.png";

const contactLinks = [
  { link: "", icon: email },
  { icon: github, link: " " },
  { icon: linkedin, link: "" },
  { icon: twitter, link: "" }
];
const Contact = props => (
  <div className="contact-wrapper">
    <div className="container contact-block">
      <h1 className="contact-header">Thanks for coming by!</h1>
      <h3 className="contact-subheader">find me on ..</h3>
      <div className="flex flex-content-spacing--center">
        {contactLinks.map((link, index) => (
          <a className="contact-item" href={link.href} key={index}>
            <img src={link.icon} alt={link.href} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Contact;
