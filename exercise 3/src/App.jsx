import UserCard from './UserCard'

const users = [
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'Jane Smith', email: 'jane.smith@example.com' },
  { name: 'Alice Johnson', email: 'alice.johnson@example.com' },
]

const App = () => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.email} name={user.name} email={user.email} />
      ))}
    </div>
  )
}

export default App
