import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Let’s connect!</h2>
          <p>Katja Björlinger</p>
          <p>System Developer</p>

          <div className="contact-icons">
  {/*           <a href="mailto:katja.bjorlinger@gmail.com" aria-label="Send email">
              <FaEnvelope />
            </a> */}
            <a
              href="https://github.com/katjabjorlinger"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/katja-björlinger-403606107"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <a href="mailto:katja.bjorlinger@gmail.com" className="contact-button">
          Email Me
        </a>
      </div>
    </section>
  );
};
