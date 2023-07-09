import React, { useState } from "react";
import ContactForm from "./ContactForm";
export default function Contact() {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-container">
      <ContactForm submitForm={submitForm}></ContactForm>
    </div>
  );
}
