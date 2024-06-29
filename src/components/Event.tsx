// Event.tsx
import { useState, useEffect } from "react";
import "../styles/event.css";
import { EventResponse } from "../types/eventResponse";
import axios from "axios";
import Commit from "../components/Commit";
import { CommitType } from "../types/commit";

function Event() {
  const [data, setData] = useState<EventResponse | null>(null);
  const accessToken = localStorage.getItem("accessToken");

  const fetchCommitData = async (repoId: string) => {
    try {
      const response = await axios.get<EventResponse>(
        `http://localhost:3000/dashboard/commits/${repoId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setData(response.data);
      console.log("response", response.data);
      console.log("response", response.data);
    } catch (error) {
      console.error("Error fetching commit data:", error);
    }
  };

  useEffect(() => {
    fetchCommitData("667f9f3d8a1039b2c1e7229d");
  }, []);

  return (
    <div className="event-wrapper">
      {data ? (
        data.map((event, index) => (
          <div key={index}>
            {event.commits.map((commit: CommitType) => (
              <Commit commit={commit} />
            ))}
          </div>
        ))
      ) : (
        <div>No Events found</div>
      )}
    </div>
  );
}

export default Event;
