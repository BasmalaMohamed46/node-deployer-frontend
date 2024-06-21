import RepoItem from "./RepoItem";
import { DashboardResponse } from "../types/DashboardResponse";
import "../styles/repoList.css";

interface RepoListProps {
  data: DashboardResponse;
}

function RepoList({ data }: RepoListProps) {

  return (
    <div className="repo-list-container">
      <div className="repo-list">
        {data.repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default RepoList;
