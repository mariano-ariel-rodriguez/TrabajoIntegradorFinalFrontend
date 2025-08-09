import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';

const ContactList = ({ contacts, setChatActive, selectedContactId, setSelectedContactId }) => {
  return (
    <div className="contact-list">
      <div className="contact-list-header">
        <h2 className="contact-list-title">WhatsApp to the Future</h2>
      </div>
      <div className="contact-list-items">
        {contacts.map((contact) => (
          <ContactItem 
            key={contact.id} 
            contact={contact} 
            setChatActive={setChatActive}
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList