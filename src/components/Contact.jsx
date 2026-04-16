import React from "react";
import ContactForm from "./ContactForm";
import ContactLink from "./ContactLink";

export default function Contact() {
  return (
    <div className="container mx-auto flex flex-col-reverse gap-10 lg:flex-row lg:p-10">
      <ContactLink />
      <ContactForm />
    </div>
  );
}
