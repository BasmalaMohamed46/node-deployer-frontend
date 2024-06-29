import RepoItem from "./RepoItem";
import { DashboardResponse } from "../types/dashboardResponse";
import "../styles/repoList.css";

interface RepoListProps {
  data: DashboardResponse;
  reposUrl: string[];
}

function RepoList({ data, reposUrl }: RepoListProps) {
  return (
    <div className="repo-list-container">
      <div className="repo-list">
        {data.repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} reposUrl={reposUrl} />
        ))}
      </div>
    </div>
  );
}

export default RepoList;
