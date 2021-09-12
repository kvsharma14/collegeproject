import "./Card.css";

export function Card() {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img
            src="https://image.shutterstock.com/image-photo/passport-picture-businesswoman-brown-hair-600w-250775908.jpg"
            alt="dorameon"
            className="card_img"
          />
          <div className="card_info">
            <h3 className="card_title"> Sanya Garg </h3>
            <h3 className="card_title_id"> Project Id 101</h3>
            <span className="card_category"> Software Developer</span>
            <a href=" " target="_blank">
              <button className="card-btn">Accept</button>
              <button className="card-btn">Decline</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
