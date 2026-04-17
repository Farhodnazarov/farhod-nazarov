import React from "react";
import ContactForm from "./ContactForm";
import ContactLink from "./ContactLink";

export default function Contact() {
  return (
    <div className="container mx-auto flex flex-col-reverse gap-5 lg:flex-row lg:gap-0 lg:p-10">
      <ContactLink />
      <ContactForm />
    </div>
  );
}
