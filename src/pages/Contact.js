import React from "react";
import Section from "../components/Section";
import CrossSection from "../components/CrossSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = props => {
  return (
    <>
      <Section theme="dark">
        <CrossSection
          title="Contact form"
          text="On this moment it is not send any data anywhere"
        />
      </Section>
      <Section theme="light">
        <ContactForm />
      </Section>
      <Footer />
    </>
  );
};

export default Contact;
