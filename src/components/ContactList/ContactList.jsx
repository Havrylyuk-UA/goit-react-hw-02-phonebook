import './ContactList.css';

export const ContactList = ({ name, number, handleRemoveContact }) => {
  return (
    <>
      <li>
        {name}: {number}
        <button
          type="button"
          className="delete-btn"
          onClick={handleRemoveContact}
        >
          Delete
        </button>
      </li>
    </>
  );
};
