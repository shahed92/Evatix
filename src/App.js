import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userName, setUsername] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [repourl, SetRepourl] = useState("");
  const [repolist, setRepolist] = useState([]);

  const [userInput, setUserinput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setUsername(userInput);
    console.log(userInput);
    await fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        ///public_repos
        const {
          name,
          followers,
          following,
          public_repos,
          repos_url,
          avatar_url,
        } = data;
        SetRepourl(repos_url);
        setName(name);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
        setRepolist("");

        console.log(following);
        console.log(data);
      });
  };

  const handleRepo = () => {
    fetch(repourl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRepolist(data);
      });
  };
  //handle submit
  return (
    <div className="App">
      <nav>GitHub Query</nav>

      <div className="card">
        <div>
          <div className="search_form">
            <input
              type="text"
              placeholder="Search repo"
              value={userInput}
              onChange={(e) => setUserinput(e.target.value)}
            />
            <button className="btn_search" onClick={() => handleSubmit()}>
              Search
            </button>
          </div>
          <div className={avatar ? "user_display" : ""}>
            <img src={avatar} alt="" />
            <h3>{name ? name : ""}</h3>
          </div>
          <div className="git_profile">
            <span>Following: {following ? following : "nan"}</span>
            <span>Followers: {followers ? followers : "NaN"}</span>
            <span>Repos: {repos ? repos : "nan"}</span>
          </div>
          <div className="repo_list">
            <h1 onClick={() => handleRepo()}>Click Repo List</h1>
            <div className="repos">
              {repolist &&
                repolist.map((repoItem) => (
                  <h4>
                    Repo Name: {repoItem.name}{" "}
                    <span>Star: {repoItem.stargazers_count}</span>
                  </h4>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
