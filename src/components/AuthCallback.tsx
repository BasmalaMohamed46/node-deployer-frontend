import { useEffect } from "react";

const AuthCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");
    const provider = params.get("provider");

    if (accessToken && provider) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("provider", provider);

      window.location.href = "/dashboard";
    } else {
      console.error("No access token and provider found in URL");
    }
  }, []);

  return <div>Loading...</div>;
};

export default AuthCallback;
