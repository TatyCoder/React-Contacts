import Card from '../UI/Card';
import styles from './AddContact.module.css';

const AddContact = (props) => {
  return (
    <Card className={styles.input}>
      <div>
        <form className={styles.form}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
          <label htmlFor="street">Street</label>
          <input id="street" type="text" />
          <label htmlFor="city">City</label>
          <input id="city" type="text" />
          <label htmlFor="state">State</label>
          <input id="state" type="text" />
          <label htmlFor="zip">Zip Code</label>
          <input id="zip" type="number" />
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="number" />
        </form>
      </div>
    </Card>
  );
};

export default AddContact;
