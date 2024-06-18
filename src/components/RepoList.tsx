import { useState, useEffect } from "react";
import RepoItem from "./RepoItem";
import { Repo } from "../types/Repo";
import "../styles/repoList.css";
import axios from "axios";

function RepoList() {
  const [repos, setRepos] = useState<Repo[]>([]);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/auth/gitlab/callback/repo`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        // setRepos(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    if (accessToken) {
      fetchRepos();
    }
  }, [accessToken]);

  return (
    <div className="repo-list-container">
      <div className="repo-list">
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default RepoList;
