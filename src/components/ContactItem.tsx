import React from 'react';

import { Contact } from 'interfaces/ContactInterface';
import styles from 'styles/ContactItem.module.scss';

const ContactItem: React.FC<Contact> = ({ first_name, last_name }) => {
  return (
    <li className={styles.contactItem}>
      {first_name} {last_name}
    </li>
  );
};

export default ContactItem;
