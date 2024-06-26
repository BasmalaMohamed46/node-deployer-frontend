// src/components/interfaces/repo.interface.ts

import { DockerImage } from "./dockerImage.interface";

export interface Repo {
  id: string;
  url: string;
  userId: string;
  event: string | null;
  env: string | null;
  nodeVersion: string;
  createdAt: string;
  updatedAt: string;
  dockerImage: DockerImage;
}
