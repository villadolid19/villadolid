import React, { useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import { FaArrowRight } from "react-icons/fa";
// import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [honeypot, setHoneypot] = useState<string>(""); // Honeypot state
  // const [cap, setCap] = useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypot) return;

    setLoading(true);
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "7907e977-c4f6-4d12-822f-a4f46aa2e576");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      });

      const res = await response.json();
      setLoading(false);

      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your message has been sent successfully.",
        });
        event.currentTarget.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.message || "Something went wrong! Please try again later.",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
      console.error("Error:", error);
    }
  };

  return (
    <section className="Contact" id="Contact">
      <div className="greetings">
        <p>Get in Touch</p>
        <h1>Contact Me</h1>
      </div>

      <div className="form-con">
        {loading && <div className="loading-spinner"></div>}

        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Full Name" autoComplete="off" required />
          <input type="email" name="email" placeholder="Email" autoComplete="off" required />
          <input type="text" name="subject" placeholder="Subject" autoComplete="off" required />
          <textarea name="message" placeholder="Your Message" cols={30} rows={10} autoComplete="off" required />

          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />

          {/* <ReCAPTCHA sitekey="..." onChange={(value) => setCap(value)} /> */}

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : <>Submit <span><FaArrowRight /></span></>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;