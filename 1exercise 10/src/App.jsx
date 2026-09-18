
// App.jsx
import UserList from './uselist';

const App = () => {
  const users = [
    { id: 1, name: 'cali', email: 'moha@example.com' },
    { id: 2, name: 'moha', email: 'cali@example.com' },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
