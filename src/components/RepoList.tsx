import React from "react";
import RepoItem from "./RepoItem";
import { DashboardResponse } from "../types/dashboardResponse";
import "../styles/repoList.css";

interface RepoListProps {
  data: DashboardResponse;
  onConnect: (repoId: string, repoUrl: string, repoName: string) => void; 
}

const RepoList: React.FC<RepoListProps> = ({ data, onConnect }) => {
  return (
    <div className="repo-list-container">
      <div className="repo-list">
        {data.repos.map((repo) => (
          <RepoItem
            key={repo.id}
            repo={repo}
            onConnect={(repoId, repoUrl, repoName) => onConnect(repoId, repoUrl, repoName)} 
          />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
