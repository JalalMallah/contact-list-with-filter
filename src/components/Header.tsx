import React, { useState } from 'react';

import styles from 'styles/Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  filterContacts: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ filterContacts }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    filterContacts(e.target.value);
  }

  return (
    <header className={styles.header}>
      <h1>Contacts</h1>
      <form>
        <div className={styles.formControl}>
          <label htmlFor='user-search'>
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input
            type='text'
            id='user-search'
            placeholder='Search contacts...'
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
