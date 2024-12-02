import React from "react";

const ContactList = () => {
  const contacts = [
    "Cheyenne Bergson",
    "Jonathan Higgins",
    "Capt. Trunk",
    "Hannibal Smith",
  ];

  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <div key={index} className="contact">
          <span className="contact-initials">CB</span>
          <span className="contact-name">{contact}</span>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
