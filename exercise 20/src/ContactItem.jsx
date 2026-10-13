const ContactItem = ({ contact, dispatch, setEditingContact }) => {
  const { id, name, email, phone, favorite } = contact;

  return (
    <li className={`flex list-none flex-col gap-2.5 rounded-[14px] border p-4 shadow-[0_2px_8px_rgba(15,23,42,0.04)] ${favorite ? 'border-amber-400 bg-[#fffaf0]' : 'border-gray-200 bg-white'}`}>
      <strong className="flex items-center gap-2 text-[1.1rem] font-bold text-gray-900">
        {name} {favorite && <span className="text-amber-500">★</span>}
      </strong>
      <p className="m-0 text-gray-600">Email: {email}</p>
      <p className="m-0 text-gray-600">Phone: {phone}</p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={`cursor-pointer rounded-lg px-3 py-2 font-semibold ${favorite ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-900'}`}
          onClick={() => dispatch({ type: 'toggleFavorite', payload: id })}
        >
          {favorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-lg bg-gray-200 px-3 py-2 font-semibold text-gray-900"
          onClick={() => setEditingContact(contact)}
        >
          Edit
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-lg bg-red-600 px-3 py-2 font-semibold text-white"
          onClick={() => dispatch({ type: 'delete', payload: id })}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
