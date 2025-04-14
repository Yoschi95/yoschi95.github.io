import "./Contact.scss";
import github from "../../assets/images/contact/github.svg";
import linkedin from "../../assets/images/contact/linkedin.svg";
import ContactForm from "../shared/ContactForm";

const Contact = () => {
  return (
    <main className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contactFlexbox">
        <div className="contactFlexboxLeft">
          <p>
            If you have any concerns, please do not hesitate to contact me either via social media or the contact form.
            I’m looking forward to your message!
          </p>
          <div className="contactIconsContainer">
            <div className="contactIcon">
              <a href="https://github.com/Yoschi95/" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub logo" />
              </a>
            </div>
            <div className="contactIcon">
              <a href="https://www.linkedin.com/in/joscha-hartmann-427b761b9" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="contactFlexboxRight">
          <h2>Send me a message</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
