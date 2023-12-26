import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handlePushForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const { contacts } = this.state;

    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contact!`);
    }

    const contact = {
      id: nanoid(10),
      name,
      number,
    };

    this.setState({ contacts: [...contacts, contact] });

    form.reset();
  };

  handleRemoveContact = id => {
    const { contacts } = this.state;

    this.setState({ contacts: contacts.filter(item => item.id !== id) });
  };

  handleFilterContact = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContactList = filter
      ? contacts.filter(item => item.name.toLowerCase().includes(filter))
      : contacts;

    return (
      <div className="contact-container">
        <h1>Phonebook</h1>
        <ContactForm handlePushForm={this.handlePushForm} />
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
