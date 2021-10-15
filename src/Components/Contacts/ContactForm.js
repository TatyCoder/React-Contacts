import Card from '../UI/Card';
import styles from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredStreet, setEnteredStreet] = useState('');
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredState, setEnteredState] = useState('');
  const [enteredZip, setEnteredZip] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const streetChangeHandler = (event) => {
    setEnteredStreet(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const stateChangeHandler = (event) => {
    setEnteredState(event.target.value);
  };

  const zipChangeHandler = (event) => {
    setEnteredZip(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const contactData = {
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      state: enteredState,
      zip: +enteredZip,
      phone: +enteredPhone
    };

    console.log(contactData);
    props.onSaveContactData(contactData);

    setEnteredName('');
    setEnteredStreet('');
    setEnteredCity('');
    setEnteredState('');
    setEnteredZip('');
    setEnteredPhone('');
  };

  return (
    <Card className={styles.input}>
      <div>
        <form onSubmit={submitHandler} className={styles.form}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              value={enteredStreet}
              onChange={streetChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={enteredCity}
              onChange={cityChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              id="state"
              type="text"
              value={enteredState}
              onChange={stateChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="zip">Zip Code</label>
            <input
              id="zip"
              type="number"
              value={enteredZip}
              onChange={zipChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="number"
              value={enteredPhone}
              onChange={phoneChangeHandler}
            />
          </div>
          <div>
            <button type="button" className={styles.button} onClick={props.onCancel}>Cancel</button>
            <button type="submit" className={styles.button}>Save Contact</button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ContactForm;