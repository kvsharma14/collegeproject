import "./Notification.css";

export function Notification() {
  var down = false;
  function toggleNotifi() {
    if (down) {
      document.getElementById("box").style.height = "0px";
      document.getElementById("box").style.opacity = 0;
      down = false;
    } else {
      document.getElementById("box").style.height = "510px";
      document.getElementById("box").style.opacity = 1;
      down = true;
    }
  }
  return (
    <>
      <nav className="nav-notifi">
        <div className="icon" onClick={toggleNotifi}>
          <img src="img/bell.png" alt="" /> <span>17</span>
        </div>
        <div className="notifi-box" id="box">
          <h2>
            Notifications <span>17</span>
          </h2>
          <div className="notifi-item">
            <img src="img/avatar1.png" alt="img" />
            <div className="text">
              <h4>Elias Abdurrahman</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="notifi-item">
            <img src="img/avatar2.png" alt="img" />
            <div className="text">
              <h4>John Doe</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="notifi-item">
            <img src="img/avatar3.png" alt="img" />
            <div className="text">
              <h4>Emad Ali</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="notifi-item">
            <img src="img/avatar4.png" alt="img" />
            <div className="text">
              <h4>Ekram Abu </h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="notifi-item">
            <img src="img/avatar5.png" alt="img" />
            <div className="text">
              <h4>Jane Doe</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </nav>
      {/* <script src="js/script.js"></script> */}
    </>
  );
}
