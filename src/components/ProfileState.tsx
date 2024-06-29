import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfileState = () => {
    const userName = "Jhon Doe";
    const balance = 15;
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const provider = localStorage.getItem("provider");
    const accessToken = localStorage.getItem("accessToken");


  useEffect(() => {
    if (provider && accessToken) {
      setLoggedIn(true);
    }
  }
  , [provider, accessToken]);

  return (
    <>
        {
        loggedIn? (
            <div className="dropdown me-5 pe-5"><Link className="nav-link" to="#"><span>{userName}</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
            <ul>
              <li><Link className="nav-link" to="#">Balance: {balance} $</Link></li>
              <hr />
              <li><Link className="nav-link" to="#">Profile</Link></li>
              <hr />
              <li><Link className="nav-link" to="#">Logout</Link></li>
        
            </ul>
          </div>
        ) : (
          <Link className="btn-getstarted nav-link" to="/login">
            Login
          </Link>
        )
    }
    </>
  );
}

export default ProfileState;


