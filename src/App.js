import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { nanoid } from 'nanoid';

import { AppContainer } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (this.state.contacts.find(contact => contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()) !== undefined) {
       alert(`${newContact.name} is already in contacts`);
    } else 

    {this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }))}
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  }
  
  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
  const filteredContacts = this.state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
   
    return (
      <AppContainer>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={ this.changeFilter} /> 
        
        <ContactList contacts={filteredContacts} onDelete={this.deleteContact} />
      </AppContainer>
    );
  }
}

export default App;
