import React from 'react';

import ContactItem from 'components/ContactItem';

import { Contact } from 'interfaces/ContactInterface';
import styles from 'styles/ContactList.module.scss';

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  const mappedContact = contacts.map(contact => <ContactItem key={contact.id} {...contact} />);

  return <ul className={styles.contactList}>{mappedContact}</ul>;
};

export default ContactList;
