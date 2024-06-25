// src/components/interfaces/dockerImage.interface.ts

import { Container } from "./container.interface";

export interface DockerImage {
  id: string;
  repoId: string;
  Containers: Container[];
  createdAt: string;
  updatedAt: string;
}
