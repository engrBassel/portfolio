import MainHeading from "../0-global/MainHeading";
import ContactBoxes from "./contact-boxes/ContactBoxes";

function ContactSection() {
  return (
    <section id="contact" className="section">
      <MainHeading p="Get in touch" h="Contact Me" />
      <ContactBoxes />
    </section>
  );
}

export default ContactSection;
