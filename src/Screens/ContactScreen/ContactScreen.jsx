import React, { useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import { getContactList } from '../../services/contactService';
import './ContactScreen.css';

const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);

    return (
        <div className="contact-screen">
            <div className="contact-screen-container">
                <ContactList contacts={contactsState} />
            </div>
        </div>
    );
};

export default ContactScreen