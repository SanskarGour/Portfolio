import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

function Contact() {
  function emailSend(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cffkgsv",
        "template_b7lgbhr",
        e.target,
        "dzIqOZcBgxHU9jkeT"
      )
      .then(
        (result) => {
          console.log("Successful" + result);        
          toast.success("Message Sent!");
        },
        (error) => {
          toast.error("Error!");
          console.log("Error: " + error.text);
        }
      );
  }

  return (
    <div id="contact">
      <div class="form-heading">
        <h1>CONNECT</h1>
      </div>

      <form onSubmit={emailSend}>
        <div class="formfield-container">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Enter your subject"
            required
          />
          <textarea
            name="msg"
            id="msg"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button id="btn" type="submit">
          Send Message
          <FaTelegramPlane />
        </button>
      </form>
    </div>
  );
}

export default Contact;
