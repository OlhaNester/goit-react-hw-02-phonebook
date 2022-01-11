import { Component } from 'react';
import ContactForm from './components/ConactForm/CotactForm';

class App extends Component {
  state = {
    contacts: [],
  };
  handleSubmitForm = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmitForm} />

        <h2>Contacts</h2>
        {/* <Filter ... />
  <ContactList ... /> */}
      </div>
    );
  }
}

export default App;
