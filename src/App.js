import logo from './logo.svg';
import './App.css';
import AddContact from './Components/Contacts/AddContact';
import ContactsList from './Components/Contacts/ContactsList';

const contacts = [{
  id: 1,
  name: "Name1",
  address: {
      street: "Street1",
      city: "City1",
      state: "State1",
      zip: "Zip1"
  },
  phone: "Phone1"
},
{
  id: 2,
  name: "Name2",
  address: {
      street: "Street2",
      city: "City2",
      state: "State2",
      zip: "Zip2",
  },
  phone: "Phone2"
},
{
  
  id: 3,
  name: "Name3",
  address: {
      street: "Street3",
      city: "City3",
      state: "State3",
      zip: "Zip3",
  },
  phone: "Phone3"
}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2 className="App-h2">Contacts</h2>
      <AddContact />
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default App;