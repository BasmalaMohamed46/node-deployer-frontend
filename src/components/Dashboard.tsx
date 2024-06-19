import RepoList from "./RepoList";
import SideBar from "./SideBar";
import "../styles/dashboard.css";
import { DashboardResponse } from '../types/dashboardResponse';
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchRepos = async () => {
      if (!accessToken) return;

      try {
        const response = await axios.get<DashboardResponse>(
          "http://localhost:3000/auth/gitlab/callback/repo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setData(response.data);
        console.log("Repos:", response.data.repos);
      } catch (error) {
        console.error("Error fetching repos:", error);
        console.error("Error:", error);
      }
    };

    fetchRepos();
  }, [accessToken]);

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
                />
                <i className="fas fa-search search-icon"></i>
              </div>
              {data && <RepoList data={data} />}
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
