import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
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
