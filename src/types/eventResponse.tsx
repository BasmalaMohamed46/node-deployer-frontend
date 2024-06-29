import { CommitType } from "./commit";

export interface EventResponse {
  map(
    arg0: (
      event: { commits: CommitType[] },
      index: string
    ) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  commits: CommitType[];
}
