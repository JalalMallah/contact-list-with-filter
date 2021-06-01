import React from 'react';

import styles from 'styles/Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Contacts</h1>
      <form>
        <label htmlFor='user-search'>
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <input type='text' id='user-search' placeholder='Search term...' />
      </form>
    </header>
  );
};

export default Header;
