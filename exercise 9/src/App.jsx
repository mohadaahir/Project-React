import { useState } from "react";
import "./App.css";

function App() {
  const [githubUser, setGithubUser] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(null);

  const fetchSearch = async () => {
    if (!searchInput) return;

    try {
      const response = await fetch(
        `https://api.github.com/users/${searchInput}`
      );

      if (!response.ok) {
        throw new Error("User-kan lama helin");
      }

      const data = await response.json();
      setGithubUser(data);
      setError(null);
    } catch (err) {
      setGithubUser(null);
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      <div>
        <input
          type="text"
          style={{ color: "black" }}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          placeholder="Enter GitHub username"
        />
        <button onClick={fetchSearch}>Search</button>
      </div>

      <div>
        {error && <p style={{ color: "red" }}>{error}</p>}

        {githubUser ? (
          <div>
            <img
              src={githubUser.avatar_url}
              alt={githubUser.login}
              width="100"
            />
            <h2>{githubUser.name}</h2>
            <p>Username: {githubUser.login}</p>
            <p>Bio: {githubUser.bio}</p>
            <p>Followers: {githubUser.followers}</p>
            <p>Following: {githubUser.following}</p>
            <p>Public Repos: {githubUser.public_repos}</p>
            <a href={githubUser.html_url} target="_blank" rel="noreferrer">
              View GitHub Profile
            </a>
          </div>
        ) : (
          !error && <p>Search for a GitHub user</p>
        )}
      </div>
    </div>
  );
}

export default App;git