import { useEffect } from "react";

const AuthCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const jwtToken = params.get("jwt");
    const provider = params.get("provider");

    if (jwtToken && provider) {
      localStorage.setItem("accessToken", jwtToken);
      localStorage.setItem("provider", provider);

      window.location.href = "/dashboard";
    } else {
      console.error("No access token and provider found in URL");
    }
  }, []);

  return <div>Loading...</div>;
};

export default AuthCallback;
