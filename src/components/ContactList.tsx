import React from 'react';

import styles from 'styles/ContactList.module.scss';

const ContactList: React.FC = () => {
  return (
    <ul className={styles.contactList}>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      <li>item 5</li>
    </ul>
  );
};

export default ContactList;
