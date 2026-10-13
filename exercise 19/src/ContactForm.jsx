import { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';

const getEmptyContact = () => ({ id: null, name: '', email: '', phone: '' });

const ContactForm = ({ dispatch, editingContact, setEditingContact }) => {
  const [contact, setContact] = useState(() => editingContact || getEmptyContact());
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
      setIsEditing(true);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setContact(getEmptyContact());
    setIsEditing(false);
    setEditingContact(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phone) {
      if (isEditing) {
        dispatch({ type: 'edit', payload: contact });
      } else {
        dispatch({
          type: 'add',
          payload: { ...contact, id: Date.now(), favorite: false },
        });
      }
      resetForm();
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <h3 className={styles.title}>{isEditing ? 'Edit Contact' : 'Add New Contact'}</h3>
      <div className={styles.field}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className={styles.field}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className={styles.field}>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </button>
        {isEditing && (
          <button type="button" className={styles.secondaryButton} onClick={resetForm}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
