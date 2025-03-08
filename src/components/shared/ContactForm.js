import "./ContactForm.scss";
import { useState } from "react";
import StandardButton from "./StandardButton";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
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
  );
}

export default ContactForm;
