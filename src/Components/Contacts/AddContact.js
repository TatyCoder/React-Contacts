import { useState } from 'react';
import styles from './AddContact.module.css'
import ContactForm from './ContactForm';

const emptyContact =   {
  name: '',
  address: {
    street: '',
    city: '',
    state: '',
    zip: ''
  },
  phone: ''
}

const AddContact = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const saveContactDataHandler = (enteredContactData) => {
    const contactData = {
      ...enteredContactData,
      id: Math.random().toString()
    };

    props.onAddContact(contactData);
    setIsAdding(false);
    props.onHideContactsList(false);
  };

  const startAddingHandler = () => {
    props.onHideContactsList(true);
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    props.onHideContactsList(false);
    setIsAdding(false);
  };

  return (
    <div>
      {!isAdding && (
        <button className={styles.button} onClick={startAddingHandler}>Add New Contact</button>
      )}
      {isAdding && (
        <ContactForm 
          onSaveContactData={saveContactDataHandler}
          onCancel={stopAddingHandler}
          contactToEdit={emptyContact}
        />
      )}
    </div>
  );
};

export default AddContact;