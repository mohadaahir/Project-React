import { useReducer, useState } from 'react';
import { reducer, initialState } from './reducer';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = state.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-app">
      <h2>Contact Management App</h2>
      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />
      <div className="search">
        <label>
          Search by name:
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type a name..."
          />
        </label>
      </div>
      <ContactList
        contacts={filteredContacts}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
      />
    </div>
  );
};

export default ContactApp;
