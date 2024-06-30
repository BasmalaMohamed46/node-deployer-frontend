import { useState, useEffect } from 'react';
import '../styles/event.css';
import { EventResponse } from '../types/eventResponse';
import axios from 'axios';
import Commit from '../components/Commit';
import { CommitType } from '../types/commit';
import { useParams } from 'react-router-dom';
import { getRepos } from '../services/ReposService';

function Event() {
  const [data, setData] = useState<EventResponse | null>(null);
  const accessToken = localStorage.getItem('accessToken');
  const { id } = useParams();

  const fetchCommitData = async (repoId: string) => {
    try {
      const response = await axios.get<EventResponse>(
        `http://localhost:3000/dashboard/commits/${repoId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      // setData(response.data);
      console.log('response', response.data);
      console.log('response', response.data);
    } catch (error) {
      console.error('Error fetching commit data:', error);
    }
  };

  useEffect(() => {
    async function fetchedData() {
      const repos = await getRepos();
      const matchedRepos = repos.find((repo) =>
        repo.dockerImage?.Containers.some((DockerContainer) => DockerContainer.id === id),
      );

      if (matchedRepos) {
        console.log(matchedRepos);
        const { repoId } = matchedRepos;
        fetchCommitData(repoId);
      }
      console.log(matchedRepos);
    }

    fetchedData();
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
