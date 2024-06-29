import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const accessToken = decodeURIComponent(
      searchParams.get("accessToken") || ""
    );
    const provider = decodeURIComponent(searchParams.get("provider") || "");

    console.log(accessToken);
    console.log(provider);
    if (accessToken && provider) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("provider", provider);

      navigate("/");
    } 
  }, []);

  return <div>Loading...</div>;
};

export default AuthCallback;
