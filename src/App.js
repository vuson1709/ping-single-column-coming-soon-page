/* 
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*
 */

import Logo from "./images/logo.svg";
import Illustration from "./images/illustration-dashboard.png";
import IconFacebook from "./images/icon-facebook.svg";
import IconTwitter from "./images/icon-twitter.svg";
import IconInstagram from "./images/icon-instagram.svg";
import { useState } from "react";

function checkEmail(email) {
  // Regular expression for a simple email validation
  if (!email) return;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex
  return emailRegex.test(email);
}

export default function CommingSoon() {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState("");

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log("clicked");

    if (!input) {
      setInputError("Whoops! It looks like you forgot to add your email");
      return;
    } else if (!checkEmail(input)) {
      setInputError("Please provide a valid email address");
      return;
    }

    // When submit success
    setInput("");
    setInputError("");
  }

  return (
    <section>
      <img src={Logo} alt="Logo of ping" className="logo" />
      <div className="text-content">
        <h1>
          <span className="gray">We are launching</span> soon!
        </h1>
        <p>Subscribe and get notified</p>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Your email address..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={inputError ? "error" : ""}
          />
          {inputError && <span className="error-text">{inputError}</span>}
          <button>Notify Me</button>
        </form>
      </div>
      <img src={Illustration} alt="Banner" className="banner" />
      <div className="social-media">
        <img src={IconFacebook} alt="social" className="icon-social" />
        <img src={IconTwitter} alt="" className="icon-social" />
        <img src={IconInstagram} alt="" className="icon-social" />
      </div>
      <p className="copyright">© Copyright Ping. All rights reserved.</p>
    </section>
  );
}
