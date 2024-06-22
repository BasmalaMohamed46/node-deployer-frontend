import RepoList from "./RepoList";
import SideBar from "./SideBar";
import "../styles/dashboard.css";
import { DashboardResponse } from "../types/DashboardResponse";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const accessToken = localStorage.getItem("accessToken");
  const provider = localStorage.getItem("provider");

  useEffect(() => {
    const fetchRepos = async () => {
      if (!accessToken) return;

      try {
        const response = await axios.get<DashboardResponse>(
          `http://localhost:3000/dashboard/${provider}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchRepos();
  }, [accessToken, provider]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data
    ? {
        ...data,
        repos: data.repos.filter(
          (repo) =>
            repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            repo.namespace.path
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            repo.path.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }
    : null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header">
            <h2>Create a new Static Site</h2>
            <p>Connect your Git repository</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <div className="repos">
            <div className="main-content">
              <h5>Connect a repository</h5>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <i className="fas fa-search search-icon"></i>
              </div>
              {filteredData && <RepoList data={filteredData} />}
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          {data && <SideBar data={data} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
