// src/components/interfaces/dockerImage.interface.ts

import { DockerContainer } from "./container.interface";

export interface DockerImage {
  id: string;
  repoId: string;
  Containers: DockerContainer[];
  createdAt: string;
  updatedAt: string;
}
