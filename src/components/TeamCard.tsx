import React from "react";
import "../styles/team.css";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}
const TeamCard: React.FC<TeamCardProps> = ({ image, name, role }) => {
  return (
    <div
      className="col-xl-4 col-md-6 d-flex"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <div className="team-member">
        <div className="member-img">
          <img src={image} className="img-fluid" alt="" />
        </div>
        <div className="member-info">
          <div className="social">
            <a href="">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
