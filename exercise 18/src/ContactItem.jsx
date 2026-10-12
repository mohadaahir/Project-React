const ContactItem = ({ contact, dispatch, setEditingContact }) => {
  const { id, name, email, phone, favorite } = contact;

  return (
    <li className={`contact-item${favorite ? ' is-favorite' : ''}`}>
      <strong>
        {name} {favorite && <span className="star">★</span>}
      </strong>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <div className="item-actions">
        <button
          type="button"
          onClick={() => dispatch({ type: 'toggleFavorite', payload: id })}
        >
          {favorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <button type="button" onClick={() => setEditingContact(contact)}>
          Edit
        </button>
        <button
          type="button"
          className="danger"
          onClick={() => dispatch({ type: 'delete', payload: id })}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
