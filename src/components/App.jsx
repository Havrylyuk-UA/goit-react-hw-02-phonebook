import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleRemoveContact = id => {
    const { contacts } = this.state;

    this.setState({ contacts: contacts.filter(item => item.id !== id) });
  };

  handleFilterContact = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  handlePushContact = contact => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts, contact] });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContactList = filter
      ? contacts.filter(item => item.name.toLowerCase().includes(filter))
      : contacts;

    return (
      <div className="contact-container">
        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          handlePushContact={this.handlePushContact}
        />
        {contacts.length === 0 ? (
          ''
        ) : (
          <>
            <h2>Contacts</h2>
            <Filter handleFilterContact={this.handleFilterContact} />
            <ul>
              {filteredContactList.map(({ id, name, number }) => {
                return (
                  <ContactList
                    key={id}
                    name={name}
                    number={number}
                    handleRemoveContact={() => this.handleRemoveContact(id)}
                  />
                );
              })}
            </ul>
          </>
        )}
      </div>
    );
  }
}
