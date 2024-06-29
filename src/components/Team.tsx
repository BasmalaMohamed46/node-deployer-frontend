import TeamCard from "./TeamCard";
import Ziad from "../assets/img/team/Ziad.jpeg";
import Roshdy from "../assets/img/team/roshdy.jpeg";
import Belal from "../assets/img/team/belal.jpg";
import Basmala from "../assets/img/team/basmala.jpg";
import Malak from "../assets/img/team/Malak.jpg";
import Engy from "../assets/img/team/engy.jpg";

const Team = () => {
  const members = [
    {
      image:Roshdy,
      name:"Mostafa Roshdy",
      role:"Full-Stack Developer"
    },
    {
      image:Belal,
      name:"Belal Abo Ata",
      role:"Full-Stack Developer"
    },
    {
      image:Ziad,
      name:"Ziad Elganzory",
      role:"Full-Stack Developer"
    },
    {
      image:Basmala,
      name:"Basmala Mohamed",
      role:"Full-Stack Developer"
    },
    {
      image:Malak,
      name:"Malak Nasser",
      role:"Full-Stack Developer"
    },
    {
      image:Engy,
      name:"Engy Ahmed",
      role:"Full-Stack Developer"
    },
  ];
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
          {members.map((member)=>{
            return (
              <TeamCard
              image={member.image}
              name={member.name}
              role={member.role}
            />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
