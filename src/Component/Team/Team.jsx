import "./Team.css";

export function Team() {
  return (
    <div className="col-md-3 profile text-center">
      <div className="img-box">
        <img
          src="https://image.shutterstock.com/image-photo/passport-picture-businesswoman-brown-hair-600w-250775908.jpg"
          className="img-responsive"
          alt="dorameon"
          width="400px"
          height="400px"
        />
      </div>
      <h2 className="member-heading">Sanya Garg</h2>
      <h3 className="designation">Frontend developer</h3>
    </div>
  );
}
