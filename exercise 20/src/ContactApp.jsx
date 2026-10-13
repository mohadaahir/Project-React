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
    <div className="mx-auto w-full max-w-[900px] rounded-[18px] bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
      <h2 className="mt-0 mb-5 text-center text-[2rem] text-gray-900">Contact Management App</h2>
      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />
      <div className="my-5">
        <label className="flex flex-col gap-2 font-semibold text-gray-700">
          Search by name:
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type a name..."
            className="w-full rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 text-gray-900"
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
