import { useState, useEffect } from "react";
import "../styles/event.css";
import { EventResponse } from "../types/eventResponse";
import axios from "axios";
import Commit from "../components/Commit";
import { CommitType } from "../types/commit";
import { axiosInstance } from "../interceptors/auth.interceptor";
import { useParams } from "react-router-dom";

function Event() {
  const [data, setData] = useState<EventResponse | null>(null);
  const accessToken = localStorage.getItem("accessToken");
  const { id } = useParams()
  const [repoId, setRepoId] = useState<number>(0);

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
      // setData(response.data);
      console.log("response", response.data);
      console.log("response", response.data);
    } catch (error) {
      console.error("Error fetching commit data:", error);
    }
  };

  useEffect(() => {
    axiosInstance.get(`/docker/containers/${id}`).then(res => {
      setRepoId(res.data);
    }).catch(e => {
        console.log('error', e);
    });
    // fetchCommitData("667f9f3d8a1039b2c1e7229d");
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
