// import { ca } from "date-fns/locale";
import "../styles/sideBar.css";

function SideBar() {
  // const accessToken = localStorage.getItem("accessToken");

  const handleConfigureClick = () => {
    // const response = fetch("http://localhost:3000/auth/gitlab/callback/repo", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });
    // console.log(response.data);
    // // setRepos(data.repositories);
  };

  return (
    <div className="sidebar">
      <div className="provider-section">
        <img
          src="/images/github.png"
          alt="GitHub logo"
          className="provider-logo"
        />
        <h5>GitHub</h5>
        <a target="www.github.com">
          <div className="account-info">
            <div className="me-[6px] fill-gray-800">
              <svg
                fill="currentColor"
                className="fill-secondary mr-0.5 user"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 2.51172C8.49445 2.51172 8.9778 2.65834 9.38893 2.93304C9.80005 3.20775 10.1205 3.59819 10.3097 4.05501C10.4989 4.51183 10.5484 5.01449 10.452 5.49944C10.3555 5.9844 10.1174 6.42985 9.76777 6.77949C9.41814 7.12912 8.97268 7.36722 8.48773 7.46368C8.00277 7.56015 7.50011 7.51064 7.04329 7.32142C6.58648 7.1322 6.19603 6.81177 5.92133 6.40064C5.64662 5.98952 5.5 5.50617 5.5 5.01172C5.5 4.34868 5.76339 3.71279 6.23223 3.24395C6.70107 2.77511 7.33696 2.51172 8 2.51172ZM8 1.51172C7.30777 1.51172 6.63108 1.71699 6.0555 2.10158C5.47993 2.48616 5.03133 3.03279 4.76642 3.67233C4.50152 4.31187 4.4322 5.0156 4.56725 5.69453C4.7023 6.37347 5.03564 6.99711 5.52513 7.48659C6.01461 7.97608 6.63825 8.30942 7.31718 8.44447C7.99612 8.57952 8.69985 8.5102 9.33939 8.2453C9.97893 7.98039 10.5256 7.53179 10.9101 6.95621C11.2947 6.38064 11.5 5.70395 11.5 5.01172C11.5 4.08346 11.1313 3.19322 10.4749 2.53684C9.8185 1.88047 8.92826 1.51172 8 1.51172Z"></path>
                <path d="M13 15.5117H12V13.0117C12 12.6834 11.9353 12.3583 11.8097 12.055C11.6841 11.7517 11.4999 11.4761 11.2678 11.244C11.0356 11.0118 10.76 10.8277 10.4567 10.702C10.1534 10.5764 9.8283 10.5117 9.5 10.5117H6.5C5.83696 10.5117 5.20107 10.7751 4.73223 11.244C4.26339 11.7128 4 12.3487 4 13.0117V15.5117H3V13.0117C3 12.0835 3.36875 11.1932 4.02513 10.5368C4.6815 9.88047 5.57174 9.51172 6.5 9.51172H9.5C10.4283 9.51172 11.3185 9.88047 11.9749 10.5368C12.6313 11.1932 13 12.0835 13 13.0117V15.5117Z"></path>
              </svg>
            </div>
            <p>@MalakNasser</p>
            <div className="ms-[6px] fill-gray-800">
              <svg
                fill="currentColor"
                className="fill-secondary arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 14H3C2.73489 13.9996 2.48075 13.8942 2.29329 13.7067C2.10583 13.5193 2.00036 13.2651 2 13V3C2.00036 2.73489 2.10583 2.48075 2.29329 2.29329C2.48075 2.10583 2.73489 2.00036 3 2H8V3H3V13H13V8H14V13C13.9996 13.2651 13.8942 13.5193 13.7067 13.7067C13.5193 13.8942 13.2651 13.9996 13 14Z"></path>
                <path d="M10 1V2H13.293L9 6.293L9.707 7L14 2.707V6H15V1H10Z"></path>
              </svg>
            </div>
            <span className="repos-separator"></span>
            <span className="repos-count">1 repo</span>
          </div>
          <div className="configure-account">
            <button
              type="button"
              data-testid="git-account-button"
              className="type-interface-01 text-status-highlight hover:bg-black/10 hover:text-status-highlight active:bg-black/20 active:text-status-highlight h-10 py-2.5 px-3 focus-visible:outline focus-visible:outline-focus-action outline-offset-2 outline-2 flex items-center -mx-3"
              onClick={handleConfigureClick}
            >
              Configure account
              <div className="inline-flex w-4 h-4 ms-1.5">
                <svg
                  fill="currentColor"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 4H12.95C12.7 2.85 11.7 2 10.5 2C9.3 2 8.3 2.85 8.05 4H1V5H8.05C8.3 6.15 9.3 7 10.5 7C11.7 7 12.7 6.15 12.95 5H15V4ZM10.5 6C9.65 6 9 5.35 9 4.5C9 3.65 9.65 3 10.5 3C11.35 3 12 3.65 12 4.5C12 5.35 11.35 6 10.5 6Z"></path>
                  <path d="M1 12H3.05C3.3 13.15 4.3 14 5.5 14C6.7 14 7.7 13.15 7.95 12H15V11H7.95C7.7 9.85 6.7 9 5.5 9C4.3 9 3.3 9.85 3.05 11H1V12ZM5.5 10C6.35 10 7 10.65 7 11.5C7 12.35 6.35 13 5.5 13C4.65 13 4 12.35 4 11.5C4 10.65 4.65 10 5.5 10Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
