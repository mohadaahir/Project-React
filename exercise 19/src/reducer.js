export const initialState = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '123-456-7890',
    favorite: true,
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    phone: '098-765-4321',
    favorite: false,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter((contact) => contact.id !== action.payload);
    case 'edit':
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    case 'toggleFavorite':
      return state.map((contact) =>
        contact.id === action.payload
          ? { ...contact, favorite: !contact.favorite }
          : contact
      );
    default:
      return state;
  }
};
