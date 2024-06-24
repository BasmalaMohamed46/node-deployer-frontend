import { Tier } from "./tier.interface";
import { DockerImage } from "./dockerImage.interface";

export interface Container {
  id: string;
  dockerImageId: string;
  port: string;
  ip: string;
  tierId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  tier: Tier;
  dockerImage: DockerImage;
}
