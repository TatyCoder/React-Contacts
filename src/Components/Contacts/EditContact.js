import { useState } from 'react';
import styles from './EditContact.module.css'
import ContactForm from './ContactForm';

const EditContact = (props) => {

  const saveContactDataHandler = (enteredContactData) => {
    const contactData = {
      ...enteredContactData,
      id: Math.random().toString(),
    };

    props.onEditContact(contactData);
  };


  const stopEditingHandler = () => {
//    setIsEditing(false);
  };

  return (
    <div>
        <ContactForm 
          onSaveContactData={saveContactDataHandler}
          onCancel={stopEditingHandler}
          contactToEdit={props.contactToEditObj}
        />
    </div>
  );
};

export default EditContact;