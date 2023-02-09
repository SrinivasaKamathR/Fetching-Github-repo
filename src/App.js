import React, { useState } from "react";

function Name() {
  return <h1>Srinivas</h1>;
}

function fetchGithubRepos(username) {
  const url = "https://api.github.com/users/" + username + "/repos";
  return fetch(url).then((res) => {
    return res.json();
  });
}

function DisplayGitHubRepos() {
  const [repos, setRepos] = useState([]);
  fetchGithubRepos("arfatsalman");
  return null;
}

// class DisplayGitHubRepos extends React.Component {
//   state = { username: "", repos: [] };
//   componentDidMount() {}
//   handleClick = () => {
//     fetchGithubRepos(this.state.username).then((data) => {
//       this.setState({ repos: data });
//     });
//   };
//   render() {
//     return (
//       <>
//         GitHub Username:
//         <input
//           value={this.state.username}
//           onChange={(e) => {
//             this.setState({ username: e.target.value });
//           }}
//         />
//         <button onClick={this.handleClick}>Fetch Github Repos</button>
//         {this.state.repos.map((repo,i) => {
//           return <h4 key={i}>{repo.name}</h4>;
//         })}
//       </>
//     );
//   }
// }
export default function App() {
  return <DisplayGitHubRepos />;
}
