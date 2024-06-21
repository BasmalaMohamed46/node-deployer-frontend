import { Repo } from "./Repo.tsx";
import { User } from "./User.tsx";

export interface DashboardResponse {
  repos: Repo[];
  user: User;
}
