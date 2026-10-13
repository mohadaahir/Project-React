import ContactItem from './ContactItem';

const ContactList = ({ contacts, dispatch, setEditingContact }) => {
  return (
    <div className="mt-5">
      <h3 className="mt-0 mb-4 text-2xl text-gray-900">Contacts</h3>
      {contacts.length > 0 ? (
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
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
        <p className="m-0 text-center text-gray-500">No contacts available.</p>
      )}
    </div>
  );
};

export default ContactList;
