import RepoList from "./RepoList";
import SideBar from "./SideBar";
import "../styles/dashboard.css";

function Dashboard() {
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
              <RepoList />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
