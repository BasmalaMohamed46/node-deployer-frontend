import { Repo } from "../types/Repo";
import "../styles/repoItem.css";
import { formatDistanceToNow, parseISO } from "date-fns";

interface RepoItemProps {
  repo: Repo;
}

function RepoItem({ repo }: RepoItemProps) {
  const updatedTime = parseISO(repo.updatedAt);
  const timeDifference = formatDistanceToNow(updatedTime, { addSuffix: true });

  const imageUrl = `/images/${repo.provider.toLowerCase()}.png`;

  return (
    <div className="repo-item">
      <div className="repo-info">
        <img
          src={imageUrl}
          alt={`${repo.provider} logo`}
          className="provider"
        />
        <span className="repo-name">
          {repo.account} / {repo.name}
        </span>
        <span className="separator"></span>
        <span className="repo-time">{timeDifference}</span>
      </div>
      <button className="connect-button">Connect</button>
    </div>
  );
}

export default RepoItem;
