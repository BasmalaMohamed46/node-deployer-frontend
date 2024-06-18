export interface Repo {
  id: string;
  url: string;
  name: string;
  userId: string;
  dockerImage?: DockerImage;
  event: string;
  env: string;
  createdAt: string;
  updatedAt: string;
  provider: string;
  account?: string;
}

export interface DockerImage {}
