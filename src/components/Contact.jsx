import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div class="contact-form-container" id="contact">
        <div class="container">
          <h1 class="form-heading" id="contact">
            Contact Me
          </h1>

          <h3 class="form-sub-heading">
            Questions, Thoughts, Or Just Want To Say Hi?
          </h3>

          <div class="contact-me-form-container">
            <form action="">
              <div class="formfield-container">
                <input
                  class="formfield"
                  id=""
                  type="text"
                  placeholder="Enter your name"
                />

                <input
                  class="formfield"
                  id=""
                  type="email"
                  placeholder="Enter your email"
                />

                <input
                  class="formfield"
                  id=""
                  type="text"
                  placeholder="Enter your subject"
                />

                <textarea
                  class="formfield formfield-textarea"
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div
                class="btn-hire-me absolute flex gap-[10px] left-[45%]"
                id="submit-btn"
              >
                Send Message
                <FaTelegramPlane />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
