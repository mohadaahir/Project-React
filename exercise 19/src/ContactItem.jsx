import styles from './ContactItem.module.css';

const ContactItem = ({ contact, dispatch, setEditingContact }) => {
  const { id, name, email, phone, favorite } = contact;

  return (
    <li className={`${styles.contactItem} ${favorite ? styles.isFavorite : ''}`}>
      <strong className={styles.header}>
        {name} {favorite && <span className={styles.star}>★</span>}
      </strong>
      <p className={styles.meta}>Email: {email}</p>
      <p className={styles.meta}>Phone: {phone}</p>
      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.actionButton} ${favorite ? styles.favoriteButton : ''}`}
          onClick={() => dispatch({ type: 'toggleFavorite', payload: id })}
        >
          {favorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <button
          type="button"
          className={styles.actionButton}
          onClick={() => setEditingContact(contact)}
        >
          Edit
        </button>
        <button
          type="button"
          className={`${styles.actionButton} ${styles.dangerButton}`}
          onClick={() => dispatch({ type: 'delete', payload: id })}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
