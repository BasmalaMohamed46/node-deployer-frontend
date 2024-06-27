import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const provider = params.get("provider");

    if (accessToken && provider) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("provider", provider);

      navigate('/dashboard')
    } else {
      console.error("No access token and provider found in URL");
    }
  }, []);

  return <div>Loading...</div>;
};

export default AuthCallback;
