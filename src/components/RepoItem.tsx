import { Repo } from '../types/Repo';
import '../styles/repoItem.css';
import { formatDistanceToNow, parseISO } from 'date-fns';

interface RepoItemProps {
  repo: Repo;
  reposUrl: string[];
}



const RepoItem: React.FC<RepoItemProps> = ({ repo, onConnect, reposUrl  }) => {
  const provider = localStorage.getItem("provider");
  let repoUrl: string;
  let repoName: string;
  let repoId: string | number;


  if (provider === 'github') {
    repoUrl = repo.clone_url;
    repoName = repo.name;
    repoId = repo.name;
  } else if (provider === 'gitlab') {
    repoUrl = repo.http_url_to_repo;
    repoName = repo.path_with_namespace;
    repoId = repo.id;
  }


  const updatedTime = parseISO(repo.updated_at);
  const timeDifference = formatDistanceToNow(updatedTime, { addSuffix: true });
  const isRepoConnected = reposUrl.includes(
    repoUrl
  );
  
  const imageUrl = provider ? `/images/${provider.toLowerCase()}.png` : '';

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
          href={repoUrl}
          className="repo-link"
          title={repoUrl}
          target="_blank"
          rel="noopener noreferrer">
          <span className="repo-name">{repoName}</span>
        </a>
        <span className="separator"></span>
        <span className="repo-time">{timeDifference}</span>
      </div>
        <button 
          className={isRepoConnected ? 'connected-button' : 'connect-button'}
          onClick={() =>
          onConnect(
            repoId.toString(),
            repoUrl,
            repoName
          )
        }>
            { isRepoConnected ? 'Connected' : 'Connect' }
         </button>
    </div>
  );
};

export default RepoItem;
