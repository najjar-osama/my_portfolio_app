import React from "react";
import email from "../images/email.png";
import github from "../images/pgithub.png";
import linkedin from "../images/in.png";
import twitter from "../images/twitter.png";

const contactLinks = [
  { icon: email, href: "mailto:osama.najjar.m@gmail.com" },
  { icon: github, href: "https://github.com/najjar-osama/" },
  { icon: linkedin, href: "https://www.linkedin.com/in/osama-najjar/" },
  { icon: twitter, href: "https://twitter.com/NajjarOsama93" }
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
      <div className="cp">
        <p>{`Osama Mohammad Najjar © ${new Date().getFullYear()}`}</p>
      </div>
    </div>
  </div>
);

export default Contact;
