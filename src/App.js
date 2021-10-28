import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddContact from './Components/Contacts/AddContact';
import EditContact from './Components/Contacts/EditContact';
import ContactsList from './Components/Contacts/ContactsList';

const contacts = [
  {
    id: 1,
    name: 'Name1',
    address: {
      street: 'Street1',
      city: 'City1',
      state: 'State1',
      zip: '11',
    },
    phone: '11'
  },
  {
    id: 2,
    name: 'Name2',
    address: {
      street: 'Street2',
      city: 'City2',
      state: 'State2',
      zip: '22'
    },
    phone: '22'
  },
  {
    id: 3,
    name: 'Name3',
    address: {
      street: 'Street3',
      city: 'City3',
      state: 'State3',
      zip: '33'
    },
    phone: '33'
  },
];

function App() {
  const [contactsList, setContactsList] = useState(contacts);
  const [contactToEdit, setContactToEdit] = useState(null);

  const addContactHandler = contact => {
    setContactsList(prevContacts => {
      return [contact, ...prevContacts]
    });
    console.log(contact);
  };

  const deleteContactHandler = (event) => {
    setContactsList(prevContacts => {
      const updatedList = prevContacts.filter(contact => contact.id.toString() !== event.target.id);
      setContactsList(updatedList);
    });
  };

  const saveContactHandler = (event) => {
  }

  const editContactHandler = (event) => {
    const itemToEdit = contactsList.filter(contact => contact.id.toString() === event.target.id);
    setContactToEdit(itemToEdit[0]);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2 className="App-h2">Contacts</h2>
      {contactToEdit !== null && (
        <EditContact onSaveContact={saveContactHandler} contactToEditObj={contactToEdit} />
      )}
      {contactToEdit === null && (
        <div>
          <AddContact onAddContact={addContactHandler} />
          <ContactsList contacts={contactsList} onDeleteContact={deleteContactHandler} onEditContact={editContactHandler} />
       </div>
      )}
    </div>
  );
};

export default App;