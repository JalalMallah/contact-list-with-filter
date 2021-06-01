import React, { useEffect, useState } from 'react';

import Header from 'components/Header';
import ContactList from 'components/ContactList';

import { Contact } from 'interfaces/ContactInterface';

const URL = 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getContacts();
  }, []);

  function getContacts() {
    fetch(URL)
      .then(res => res.json())
      .then(data => setContacts(data.sort(compare)))
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

  function filterContactByFirstOrLastName(term: string) {
    const contactItems = document.querySelectorAll('li')! as NodeListOf<HTMLLIElement>;
    contactItems.forEach(contact => {
      const nameElement = contact.querySelector('p')! as HTMLParagraphElement;
      const name = nameElement.textContent!.toLowerCase();
      if (name.includes(term)) {
        contact.style.display = 'flex';
      } else {
        contact.style.display = 'none';
      }
    });
  }

  return (
    <>
      <Header filterContacts={filterContactByFirstOrLastName} />
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
