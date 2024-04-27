import ContactBox from "./ContactBox";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function ContactBoxes() {
  return (
    <div className="main-box contact__boxes">
      <ContactBox
        icon={faEnvelope}
        url="mailto:engrbassel@outlook.com"
        text="engrbassel@outlook.com"
      />
      <ContactBox
        icon={faLinkedin}
        url="https://www.linkedin.com/in/engrbassel"
        text="LinkedIn"
      />
      <ContactBox
        icon={faWhatsapp}
        url="https://wa.me/201552088220"
        text="Whatsapp"
      />
    </div>
  );
}

export default ContactBoxes;
