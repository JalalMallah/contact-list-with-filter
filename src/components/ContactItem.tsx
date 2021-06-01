import React, { useState } from 'react';

import { Contact } from 'interfaces/ContactInterface';
import styles from 'styles/ContactItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const ContactItem: React.FC<Contact> = ({ avatar, email, first_name, id, last_name }) => {
  const [isContactChecked, setIsContactChecked] = useState<boolean>(false);

  const avatarElement = avatar ? (
    <img src={avatar} alt="contact's avatar" />
  ) : (
    <span>{first_name.charAt(0).toUpperCase() + last_name.charAt(0).toUpperCase()}</span>
  );

  const checkCircleElement = isContactChecked ? (
    <FontAwesomeIcon icon={faCheckCircle} />
  ) : (
    <FontAwesomeIcon icon={faCircle} />
  );

  function handleContactItemClick() {
    setIsContactChecked(prev => !prev);
  }

  return (
    <li className={styles.contactItem} onClick={handleContactItemClick}>
      <div className={styles.avatarContainer}>{avatarElement}</div>
      <div className={styles.contactInfo}>
        <p className={styles.name}>
          {first_name} {last_name}
        </p>
        <p className={styles.email}>{email}</p>
      </div>
      <div className={styles.checkCircle}>{checkCircleElement}</div>
    </li>
  );
};

export default ContactItem;
