import { useState } from 'react';
import styles from './AddContact.module.css'
import ContactForm from './ContactForm';

const AddContact = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveContactDataHandler = (enteredContactData) => {
    const contactData = {
      ...enteredContactData,
      id: Math.random().toString(),
    };

    props.onAddContact(contactData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing && (
        <button className={styles.button} onClick={startEditingHandler}>Add New Contact</button>
      )}
      {isEditing && (
        <ContactForm 
          onSaveContactData={saveContactDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default AddContact;