import './ContactForm.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handlePushForm = this.handlePushForm.bind(this);
  }

  handlePushForm = e => {
    e.preventDefault();
    const { contacts, handlePushContact } = this.props;
    const { name, number } = this.state;

    if (contacts && contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contact!`);
    }

    const contact = {
      id: nanoid(10),
      name,
      number,
    };

    handlePushContact(contact);
  };

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeNumber(e) {
    this.setState({ number: e.target.value });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handlePushForm}>
          <label>
            <legend>Name</legend>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChangeName}
              required
            />
          </label>
          <label>
            <legend>Number</legend>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChangeNumber}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
