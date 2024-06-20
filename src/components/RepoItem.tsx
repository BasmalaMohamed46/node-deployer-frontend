import { Repo } from "../types/Repo";
import "../styles/repoItem.css";
import { formatDistanceToNow, parseISO } from "date-fns";

interface RepoItemProps {
  repo: Repo;
}

function RepoItem({ repo }: RepoItemProps) {
  const provider = localStorage.getItem("provider");

  const updatedTime = parseISO(repo.updated_at);
  const timeDifference = formatDistanceToNow(updatedTime, { addSuffix: true });

  const imageUrl = provider ? `/images/${provider.toLowerCase()}.png` : "";

  return (
    <div className="repo-item">
      <div className="repo-info">
        {provider && (
          <img src={imageUrl} alt={`${provider} logo`} className="provider" />
        )}
        <a
          href={repo.http_url_to_repo}
          className="repo-link"
          title={repo.http_url_to_repo}
          target="_blank"
        >
          <span className="repo-name">{repo.path_with_namespace}</span>
        </a>
        <span className="separator"></span>
        <span className="repo-time">{timeDifference}</span>
      </div>
      <button className="connect-button">Connect</button>
    </div>
  );
}

export default RepoItem;
