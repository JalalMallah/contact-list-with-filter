import React from 'react';

import ContactItem from 'components/ContactItem';

import styles from 'styles/ContactList.module.scss';

const ContactList: React.FC = () => {
  return (
    <ul className={styles.contactList}>
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </ul>
  );
};

export default ContactList;
