import "../styles/event.css";
import type { CommitType } from "../types/commit";

interface CommitProps {
  commit: CommitType;
}

function Commit({ commit }: CommitProps) {
  return (
    <div className="flex items-center flex-1 event">
      <svg
        fill="currentColor"
        aria-hidden="true"
        className="w-6 h-6 mr-4 text-faint event-img"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.5 1L8.5 4L9.2073 4.70115L11 2.9092V14H3V6H2V14C2.00033 14.2651 2.10579 14.5193 2.29326 14.7067C2.48072 14.8942 2.73489 14.9997 3 15H11C11.2651 14.9997 11.5193 14.8942 11.7067 14.7067C11.8942 14.5193 11.9997 14.2651 12 14V2.9077L13.7929 4.70115L14.5 4L11.5 1Z"></path>
        <path d="M8 12H6C5.73488 11.9997 5.4807 11.8942 5.29323 11.7068C5.10576 11.5193 5.0003 11.2651 5 11V9C5.0003 8.73488 5.10576 8.4807 5.29323 8.29323C5.4807 8.10576 5.73488 8.0003 6 8H8C8.26512 8.0003 8.5193 8.10576 8.70677 8.29323C8.89424 8.4807 8.9997 8.73488 9 9V11C8.9997 11.2651 8.89424 11.5193 8.70677 11.7068C8.5193 11.8942 8.26512 11.9997 8 12ZM6 9V11H8V9H6Z"></path>
      </svg>
      <div className="event-details">
        <span>{commit.message}</span>
        <a href={commit.url} target="_blank" className="commit-url">
          <span className="event-id">{commit.id}</span>
        </a>
        <span className="event-time">
          {new Date(commit.timestamp).toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default Commit;
