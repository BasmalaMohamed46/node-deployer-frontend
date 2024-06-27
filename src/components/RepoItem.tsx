import React from "react";
import { Repo } from "../types/Repo";
import "../styles/repoItem.css";
import { formatDistanceToNow, parseISO } from "date-fns";

interface RepoItemProps {
  repo: Repo;
  onConnect: (repoId: string, repoUrl: string, repoName: string) => void; 
}

const RepoItem: React.FC<RepoItemProps> = ({ repo, onConnect }) => {
  const provider = localStorage.getItem("provider");

  const updatedTime = parseISO(repo.updated_at);
  const timeDifference = formatDistanceToNow(updatedTime, { addSuffix: true });

  const imageUrl = provider ? `/images/${provider.toLowerCase()}.png` : "";

  return (
    <div className="repo-item">
      <div className="repo-info">
        {provider && (
          <img
            src={imageUrl}
            alt={`${provider} logo`}
            className="provider"
          />
        )}
        <a
          href={repo.http_url_to_repo}
          className="repo-link"
          title={repo.http_url_to_repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="repo-name">{repo.path_with_namespace}</span>
        </a>
        <span className="separator"></span>
        <span className="repo-time">{timeDifference}</span>
      </div>
      <button
        className="connect-button"
        onClick={() => onConnect(repo.id.toString(), repo.http_url_to_repo, repo.path_with_namespace)} 
      >
        Connect
      </button>
    </div>
  );
};

export default RepoItem;
