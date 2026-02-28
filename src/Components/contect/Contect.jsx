import React, { useState } from "react";
import "./Contect.css";

import message_icon from "../../assets/message-icon.png";
import email_icon from "../../assets/email-icon.png";
import phone_icon from "../../assets/phonecall-icon.png";
import location_icon from "../../assets/location-icon.png";
import black_arrow from "../../assets/black_arrow.png";
import { toast } from "react-toastify";

const Contect = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      setResult("Sending...");

      const formData = new FormData(event.target);
      formData.append("access_key", "2c4876cc-80f5-41c3-801e-86351e218823");
      formData.append("subject", "New Contact Form Message - RDSS HIGH SCHOOL");
      formData.append("from_name", "RDSS Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent ✅");
        event.target.reset();
        toast.success("Message sent successfully!");
      } else {
        setResult(data.message || "Failed to send message");
        toast.error(data.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setResult("Network error. Please try again.");
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-wrap">
        {/* Left Card */}
        <div className="contact-info glass">
          <div className="title-row">
            <h3>Send us a message</h3>
            <img src={message_icon} alt="message" />
          </div>

          <p className="muted">
            Feel free to reach out through the contact form or use the details below.
            We’ll get back to you as soon as possible.
          </p>

          <ul className="info-list">
            <li>
              <span className="icon">
                <img src={email_icon} alt="email" />
              </span>
              <div>
                <p className="label">Email</p>
                <p className="value">rdsshighschool@gmail.com</p>
              </div>
            </li>

            <li>
              <span className="icon">
                <img src={phone_icon} alt="phone" />
              </span>
              <div>
                <p className="label">Phone</p>
                <p className="value">+91 8252949073</p>
              </div>
            </li>

            <li>
              <span className="icon">
                <img src={location_icon} alt="location" />
              </span>
              <div>
                <p className="label">Location</p>
                <p className="value">Deori, Uttar Pradesh, India</p>
              </div>
            </li>
          </ul>

          <div className="hint">
            <span className="dot"></span>
            <p>Office Hours: Mon–Sat • 9:00 AM – 4:00 PM</p>
          </div>
        </div>

        {/* Right Card (Form) */}
        <div className="contact-form glass">
          <h3 className="form-title">Contact Form</h3>

          <form onSubmit={onSubmit}>
            <div className="field">
              <label>Your Name</label>
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>

            <div className="grid">
              <div className="field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="10 digit mobile number"
                  required
                  pattern="[0-9]{10}"
                  title="Enter 10 digit number"
                />
              </div>

              <div className="field">
                <label>Email (Optional)</label>
                <input type="email" name="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="field">
              <label>Message</label>
              <textarea name="message" rows="6" placeholder="Write your message..." required />
            </div>

            {/* Honeypot */}
            <input type="checkbox" name="botcheck" style={{ display: "none" }} />

            <button className="send-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit now"}
              <img src={black_arrow} alt="arrow" />
            </button>

            <p className="result">{result}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contect;