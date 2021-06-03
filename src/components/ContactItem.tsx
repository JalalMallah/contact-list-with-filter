import React, { useState } from 'react';

import { Contact } from 'utils/ContactType';
import styles from 'styles/ContactItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const ContactItem: React.FC<Contact> = ({
  picture,
  email,
  name: { first, last },
  login: { uuid: id },
  selectContact,
  unselectContact,
}) => {
  const [isContactChecked, setIsContactChecked] = useState<boolean>(false);

  const avatarElement = picture.large ? (
    <img src={picture.large} alt="contact's avatar" />
  ) : (
    <span>{first.charAt(0).toUpperCase() + last.charAt(0).toUpperCase()}</span>
  );

  function handleContactItemClick(id: string) {
    if (selectContact && unselectContact) {
      isContactChecked ? unselectContact(id) : selectContact(id);
    }
    setIsContactChecked(prev => !prev);
  }

  return (
    <li className={styles.contactItem} onClick={() => handleContactItemClick(id)}>
      <div className={styles.avatarContainer}>{avatarElement}</div>
      <div className={styles.contactInfo}>
        <p className={styles.name}>
          {first} {last}
        </p>
        <p className={styles.email}>{email}</p>
      </div>
      <div className={styles.checkCircle}>
        {<FontAwesomeIcon icon={isContactChecked ? faCheckCircle : faCircle} />}
      </div>
    </li>
  );
};

export default ContactItem;
