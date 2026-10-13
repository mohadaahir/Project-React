import { useState, useEffect } from 'react';

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
    <form className="mb-6 rounded-[14px] border border-gray-200 bg-gray-50 p-5" onSubmit={handleSubmit}>
      <h3 className="mt-0 mb-4 text-2xl text-gray-900">{isEditing ? 'Edit Contact' : 'Add New Contact'}</h3>
      <div className="mb-4">
        <label className="flex flex-col gap-1.5 font-semibold text-gray-700">
          Name:
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
            className="w-full rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 text-gray-900"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="flex flex-col gap-1.5 font-semibold text-gray-700">
          Email:
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
            className="w-full rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 text-gray-900"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="flex flex-col gap-1.5 font-semibold text-gray-700">
          Phone:
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
            className="w-full rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 text-gray-900"
          />
        </label>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <button type="submit" className="cursor-pointer rounded-[10px] bg-blue-600 px-4 py-2.5 font-semibold text-white transition-opacity duration-200 hover:opacity-90">
          {isEditing ? 'Update' : 'Add'}
        </button>
        {isEditing && (
          <button type="button" className="cursor-pointer rounded-[10px] bg-gray-200 px-4 py-2.5 font-semibold text-gray-900" onClick={resetForm}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
