import "./ContactForm.scss";
import { useState, useRef, useContext } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import emailjs from "@emailjs/browser";
import StandardButton from "./StandardButton";
import { ThemeContext } from "../context/ThemeContext";

function ContactForm() {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactForm = useRef();

  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
  const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, contactForm.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("Form submitted successfully!", formData);
        },
        (error) => {
          console.log("Failed to submit form...", error.text);
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    toast.success("Message sent!👌", {
      className: "costum-toast",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: theme,
      transition: Slide,
    });
  };

  return (
    <div>
      <form ref={contactForm} className="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="name*"
            maxLength={200}
            required
            autocomplete="on"
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email*"
            maxLength={200}
            required
            autocomplete="on"
          />
        </label>
        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="message*"
            minLength={10}
            maxLength={2000}
            required
          />
        </label>
        <StandardButton type="submit" text="SEND MESSAGE" />
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
