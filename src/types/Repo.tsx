export interface Repo {
  id: number;
  path_with_namespace: string;
  updated_at: string;
  http_url_to_repo: string;
  provider: string;
  name: string;
  namespace: {
    path: string;
  };
  path: string;
  clone_url: string;
  repoId: string;
}
