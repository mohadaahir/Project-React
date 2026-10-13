import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, dispatch, setEditingContact }) => {
  return (
    <div className={styles.contactList}>
      <h3 className={styles.title}>Contacts</h3>
      {contacts.length > 0 ? (
        <ul className={styles.list}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              dispatch={dispatch}
              setEditingContact={setEditingContact}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>No contacts available.</p>
      )}
    </div>
  );
};

export default ContactList;
