import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      <div className="contact-list-header">
        <h2 className="contact-list-title">WhatsApp to the Future</h2>
      </div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList