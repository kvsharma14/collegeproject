import "./Nav.css";
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <div className="Nav">
      <nav className="NavbarItems">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <h1 className="navbar-logo">DocDotDeck</h1>

        <ul className="nav-menu">
          <li>
            <NavLink to="/index">
              <a href=" " className="nav-links">
                Home
              </a>
            </NavLink>
          </li>

          <li>
            <NavLink to="/FAQ">
              <a href=" " className="nav-links">
                FAQ
              </a>
            </NavLink>
          </li>

          <li>
            <NavLink to="/Achievement">
              <a href=" " className="nav-links">
                Achievements
              </a>
            </NavLink>
          </li>

          <li>
            <div className="menu">
              <ul>
                <li>
                  <a href=" " className="nav-links">
                    <i className="fas fa-ellipsis-v hidden"></i>
                  </a>

                  <ul className="h11 animated flipInX">
                    <li>
                      <NavLink to="/Bookmark">
                        <a href=" " className="nav-links">
                          Bookmark List
                        </a>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/Profile">
                        <a href=" " className="nav-links">
                          Edit Profile
                        </a>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/Request">
                        <a href=" " className="nav-links hide">
                          Request Pending
                        </a>
                      </NavLink>
                    </li>
                    <li>
                      <a href=" " className="nav-links">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>

          {/* <li>
            <a href=" " className="nav-links">
              <i className="fas fa-bell" />
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
