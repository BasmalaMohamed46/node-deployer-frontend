import { useEffect, useState } from "react";
import { getContainers } from "../../services/ContainersService";
import { Container } from "../interfaces/container.interface";
import { formatDistanceToNow } from "date-fns";

export default function Containers() {
  const [containers, setContainers] = useState<Container[]>([]);
  const [filteredContainers, setFilteredContainers] = useState<Container[]>([]);
  const [selectedTab, setSelectedTab] = useState("All");
  const [activeCount, setActiveCount] = useState(0);
  const [suspendedCount, setSuspendedCount] = useState(0);

  useEffect(() => {
    const fetchContainers = async () => {
      try {
        const data = await getContainers();
        setContainers(data);
        setActiveCount(
          data.filter((container) => container.status === "up").length
        );
        setSuspendedCount(
          data.filter((container) => container.status !== "up").length
        );
        setFilteredContainers(data); // Initially show all containers
      } catch (error) {
        console.error("Failed to fetch containers", error);
      }
    };

    fetchContainers();
  }, []);

  useEffect(() => {
    let filtered = containers;
    if (selectedTab === "Active") {
      filtered = containers.filter((container) => container.status === "up");
    } else if (selectedTab === "Suspended") {
      filtered = containers.filter((container) => container.status !== "up");
    }
    setFilteredContainers(filtered);
  }, [selectedTab, containers]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${selectedTab === "Active" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabClick("Active")}
          >
            Active ({activeCount})
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              selectedTab === "Suspended" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleTabClick("Suspended")}
          >
            Suspended ({suspendedCount})
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${selectedTab === "All" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabClick("All")}
          >
            All ({containers.length})
          </a>
        </li>
      </ul>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Service name</th>
            <th scope="col">Status</th>
            <th scope="col">Type</th>
            <th scope="col">Runtime</th>
            <th scope="col">Region</th>
            <th scope="col">Last deployed</th>
          </tr>
        </thead>
        <tbody>
          {filteredContainers.map((container) => (
            <tr key={container.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <svg
                  fill="currentColor"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM14 7.5H11C10.9416 5.65854 10.4646 3.85458 9.605 2.225C10.7893 2.54895 11.8457 3.22842 12.6316 4.17171C13.4175 5.115 13.8952 6.27669 14 7.5ZM8 14C7.88846 14.0075 7.77654 14.0075 7.665 14C6.62915 12.3481 6.05426 10.4491 6 8.5H10C9.95026 10.4477 9.38058 12.3466 8.35 14C8.23348 14.0082 8.11653 14.0082 8 14ZM6 7.5C6.04975 5.55234 6.61942 3.65341 7.65 2C7.87264 1.97498 8.09737 1.97498 8.32 2C9.36114 3.6504 9.94124 5.54953 10 7.5H6ZM6.38 2.225C5.52565 3.85582 5.05373 5.65972 5 7.5H2C2.10485 6.27669 2.58247 5.115 3.3684 4.17171C4.15432 3.22842 5.21072 2.54895 6.395 2.225H6.38ZM2.025 8.5H5.025C5.07718 10.3399 5.54739 12.1438 6.4 13.775C5.21943 13.4476 4.16739 12.7666 3.38528 11.8236C2.60317 10.8806 2.12848 9.72076 2.025 8.5ZM9.605 13.775C10.4646 12.1454 10.9416 10.3415 11 8.5H14C13.8952 9.72331 13.4175 10.885 12.6316 11.8283C11.8457 12.7716 10.7893 13.4511 9.605 13.775Z"></path>
                </svg>{" "}
                {container.id}
              </td>
              <td>
                <span
                  className={`badge ${
                    container.status === "up" ? "bg-success" : "bg-warning"
                  }`}
                >
                  {container.status === "up" ? "Deployed" : "Suspended"}
                </span>
              </td>
              <td>Web Service</td>
              <td>
                <span className="badge bg-secondary">Node</span>
              </td>
              <td>Egypt</td>
              <td>
                {formatDistanceToNow(new Date(container.updatedAt), {
                  addSuffix: true,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
