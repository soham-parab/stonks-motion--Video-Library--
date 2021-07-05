import "./nav.css";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

export function Nav() {
  const { auth, setAuth } = useAuth();
  function logoutHandler() {
    setAuth(() => {
      localStorage.removeItem("auth");
    });
  }

  return (
    <div>
      <div className="nav-header">
        <p className="para">StonksMotion</p>
      </div>
      <div className="nav-div">
        <ul className="nav">
          <li classNameName="nav-item">
            <Link className="link-nav" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link-nav" to="/library">
              Library
            </Link>
            {!auth ? (
              <Link className="link-nav" to="/login">
                Login
              </Link>
            ) : (
              <Link className="link-nav" to="/" onClick={logoutHandler}>
                Logout
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
