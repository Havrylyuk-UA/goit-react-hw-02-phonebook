import './ContactForm.css';

export const ContactForm = ({ handlePushForm }) => {
  return (
    <>
      <form onSubmit={handlePushForm}>
        <label>
          <legend>Name</legend>
          <input type="text" name="name" required />
        </label>
        <label>
          <legend>Number</legend>
          <input type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
