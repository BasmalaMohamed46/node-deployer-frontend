import React from "react";
import RepoItem from "./RepoItem";
import { DashboardResponse } from "../types/dashboardResponse";
import "../styles/repoList.css";

interface RepoListProps {
  data: DashboardResponse;
  reposUrl: string[];
}

const RepoList: React.FC<RepoListProps> = ({ data, onConnect, reposUrl }) => {
  return (
    <div className="repo-list-container">
      <div className="repo-list">
        {data.repos.map((repo) => (
          <RepoItem
            key={repo.id}
            repo={repo}
            reposUrl={reposUrl}
            onConnect={(repoId, repoUrl, repoName) => onConnect(repoId, repoUrl, repoName)} 
          />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
