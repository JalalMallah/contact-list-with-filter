import React, { useState } from 'react';

import ContactItem from 'components/ContactItem';

import { Contact } from 'interfaces/ContactInterface';
import styles from 'styles/ContactList.module.scss';

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedIDs, setSelectedIDs] = useState<number[]>([]);

  const selectContact = (id: number) => {
    setSelectedIDs(prev => {
      const updatedIDs = [...prev, id];
      console.log('Selected IDs: ', updatedIDs);
      return updatedIDs;
    });
  };

  const unselectContact = (id: number) => {
    setSelectedIDs(prev => {
      const updatedIDs = prev.filter(item => item !== id);
      console.log('Selected IDs: ', updatedIDs);
      return updatedIDs;
    });
  };

  const mappedContacts = contacts.map(contact => (
    <ContactItem
      key={contact.id}
      selectContact={selectContact}
      unselectContact={unselectContact}
      {...contact}
    />
  ));

  return <ul className={styles.contactList}>{mappedContacts}</ul>;
};

export default ContactList;
