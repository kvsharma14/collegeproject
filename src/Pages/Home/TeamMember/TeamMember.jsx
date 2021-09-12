import "./TeamMember.css";
import { Team } from "../../../Component";

export function TeamMember() {
  return (
    <section className="team">
      <div className="container">
        <div className="box-c">
          <a href=" " className="custom-underline">
            Meet the Team
          </a>
        </div>

        <div className="row team1">
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
        </div>
      </div>
    </section>
  );
}
