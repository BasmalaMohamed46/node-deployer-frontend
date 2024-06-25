// src/components/interfaces/container.interface.ts

import { Tier } from "./tier.interface";

export interface DockerContainer {
  id: string;
  dockerImageId: string;
  port: string;
  ip: string;
  tierId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  tier: Tier;
}
