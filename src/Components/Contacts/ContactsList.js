import Card from '../UI/Card';
import styles from './ContactsList.module.css'

const ContactsList = (props) => {
  console.log(props.contacts);
  return (
    <Card className={styles.contacts}>
      <ul>
        {props.contacts.map((contacts) => (
          <li key={contacts.id}>{contacts.name}</li>
        ))}
      </ul>
    </Card>
  );
};

export default ContactsList;