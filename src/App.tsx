import React, { useEffect, useState } from 'react';

import Header from 'components/Header';
import ContactList from 'components/ContactList';
import Spinner from 'components/Spinner';

import { Contact } from 'interfaces/ContactInterface';

const URL = 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [shouldShowSpinner, setShouldShowSpinner] = useState<boolean>(true);

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getContacts() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setContacts(data.sort(compare));
        setShouldShowSpinner(false);
        return;
      })
      .catch(error => console.error('Error: ', error));
  }

  function compare(a: Contact, b: Contact) {
    const contactA = a.last_name.toUpperCase();
    const contactB = b.last_name.toUpperCase();

    let comparison = 0;
    if (contactA > contactB) {
      comparison = 1;
    } else if (contactA < contactB) {
      comparison = -1;
    }
    return comparison;
  }

  function filterContactsByFirstOrLastName(term: string) {
    const contactListItems = document.querySelectorAll('li')! as NodeListOf<HTMLLIElement>;
    contactListItems.forEach(item => {
      const nameElement = item.querySelector('p')! as HTMLParagraphElement;
      const name = nameElement.textContent!.toLowerCase();
      if (name.includes(term.toLowerCase())) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  return (
    <>
      <Header filterContacts={filterContactsByFirstOrLastName} />
      {shouldShowSpinner && <Spinner />}
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
