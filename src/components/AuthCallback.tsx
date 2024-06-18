import { useEffect } from "react";

const AuthCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");
    console.log(accessToken);

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);

      window.location.href = "/dashboard";
    } else {
      console.error("No access token found in URL");
    }
  }, []);

  return <div>Loading...</div>;
};

export default AuthCallback;
