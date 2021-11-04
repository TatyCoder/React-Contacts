import ContactForm from './ContactForm';

const EditContact = (props) => {
  const saveContactDataHandler = (enteredContactData) => {
    props.onSaveContact(enteredContactData);
    props.onHideContactsList(false);
  };

  const stopEditingHandler = () => {
    props.onHideContactsList(false);
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