import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { axiosInstance } from "../interceptors/auth.interceptor";

const ProfileState = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    logout();
    navigate("/login");
  }
  const [username, setUsername] = useState();
  const [balance, setBalance] = useState();

  useEffect(() => {
    const accessToken: string | null = localStorage.getItem("accessToken");

    if (accessToken) {
      const { id } = jwtDecode(accessToken) as { id: string };
      axiosInstance
        .get(`/user/${id}`)
        .then((res) => {
          const { username, balance } = res.data;
          setUsername(username);
          setBalance(balance);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <div className="dropdown me-5 pe-5">
          <Link className="nav-link" to="#">
            <span>{username}</span>{" "}
            <i className="bi bi-chevron-down toggle-dropdown"></i>
          </Link>
          <ul>
            <li>
              <Link className="nav-link" to="#">
                Balance: {balance} $
              </Link>
            </li>
            <hr />
           <li>
              <Link className="nav-link" to="/recharge">
                Recharge
              </Link>
            </li>
            <hr />
            <li>
              <button className="nav-link px-4 py-2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link className="btn-getstarted nav-link" to="/login">
          Login
        </Link>
      )}
    </>
  );
};

export default ProfileState;
