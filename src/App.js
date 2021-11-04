import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddContact from './Components/Contacts/AddContact';
import EditContact from './Components/Contacts/EditContact';
import ContactsList from './Components/Contacts/ContactsList';

const contacts = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
  const [hideList, setHideList] = useState(false);

  const addContactHandler = contact => {
    setContactsList(prevContacts => {
      return [contact, ...prevContacts]
    });
    console.log(contact);
  };

  const deleteContactHandler = (event) => {
    setContactsList(prevContacts => {
      const updatedList = prevContacts.filter(contact => contact.id !== event.target.id);
      setContactsList(updatedList);
    });
  };

  const editContactHandler = (event) => {
    const itemToEdit = contactsList.filter(contact => contact.id === event.target.id);
    setContactToEdit(itemToEdit[0]);
  };

  const saveEditedContactHandler = (contact) => {
    const updatedContacts = contactsList.filter(c => c.id !== contact.id);
    updatedContacts.push(contact);
    console.log(updatedContacts);
    setContactsList(updatedContacts);
  } 

  // const hideContactsListHandler = (hide) => {
  //   setHideList(hide);
  // };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2 className="App-h2">Contacts</h2>
      {contactToEdit !== null && (
        <EditContact 
          onSaveContact={saveEditedContactHandler} 
          contactToEditObj={contactToEdit} 
          onHideContactsList={()=>setContactToEdit(null)} 
        />
      )}

      {contactToEdit === null && (
        <div>
          <AddContact 
            onAddContact={addContactHandler} 
            onHideContactsList={(hide)=>setHideList(hide)} 
          />
          {hideList === false && (         
          <ContactsList 
            contacts={contactsList} 
            onDeleteContact={deleteContactHandler} 
            onEditContact={editContactHandler} 
          />
          )}
       </div>
      )}
    </div>
  );
};

export default App;