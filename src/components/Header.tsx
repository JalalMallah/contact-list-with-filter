import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Contacts</h1>
      <form>
        <label htmlFor='user-search'>
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <input type='text' id='user-search' />
      </form>
    </header>
  );
};

export default Header;
