import TeamCard from "./TeamCard";
import PlaceImage from "../assets/img/team/team-2.jpg";
const Team = () => {
  return (
    <section id="team" className="team section">
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Team</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          <TeamCard
            image={PlaceImage}
            name="Jhon Doe"
            role="Full-Stack Developer"
          />
          <TeamCard
            image={PlaceImage}
            name="Jhon Doe"
            role="Full-Stack Developer"
          />
          <TeamCard
            image={PlaceImage}
            name="Jhon Doe"
            role="Full-Stack Developer"
          />
          <TeamCard
            image={PlaceImage}
            name="Jhon Doe"
            role="Full-Stack Developer"
          />
          <TeamCard
            image={PlaceImage}
            name="Jhon Doe"
            role="Full-Stack Developer"
          />
          <TeamCard
            image={PlaceImage}
            name="Jhon Doe"
            role="Full-Stack Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
