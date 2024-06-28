import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const ProfileState = () => {
    const userName = "Jhon Doe";
    const balance = 15;
    const loggedIn = false;
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
                <NavLink className="btn-getstarted nav-link" to="/about">
                    Get Started
                </NavLink>
        )
    }
    </>
  );
}

export default ProfileState;


