import { Repo } from "../types/Repo";
import "../styles/repoItem.css";
import { formatDistanceToNow, parseISO } from "date-fns";

interface RepoItemProps {
  repo: Repo;
  reposUrl: string[];
}

function RepoItem({ repo, reposUrl }: RepoItemProps) {
  const updatedTime = parseISO(repo.updated_at);
  const provider = localStorage.getItem("provider");
  const timeDifference = formatDistanceToNow(updatedTime, { addSuffix: true });
  const imageUrl = provider ? `/images/${provider.toLowerCase()}.png` : "";
  const isRepoConnected = reposUrl.includes(
    repo.http_url_to_repo.replace(".git", "")
  );
  console.log(isRepoConnected);

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
          rel="noopener noreferrer"
        >
          <span className="repo-name">{repo.path_with_namespace}</span>
        </a>
        <span className="separator"></span>
        <span className="repo-time">{timeDifference}</span>
      </div>
      {isRepoConnected ? (
        <button className="connected-button" disabled>
          Connected
        </button>
      ) : (
        <button className="connect-button">Connect</button>
      )}
    </div>
  );
}

export default RepoItem;
