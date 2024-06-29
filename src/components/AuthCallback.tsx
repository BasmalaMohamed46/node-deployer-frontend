import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const accessToken = decodeURIComponent(
      searchParams.get("accessToken") || ""
    );
    const provider = decodeURIComponent(searchParams.get("provider") || "");

      if (accessToken && provider) {
      login(provider, accessToken)
      navigate("/");
    } 
  }, []);

  return <div>Loading...</div>;
};

export default AuthCallback;
