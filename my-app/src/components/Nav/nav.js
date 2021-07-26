import "./nav.css";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";
import { useToast } from "../../contexts/toastContext";
export function Nav() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  function logoutHandler() {
    setAuth(() => {
      localStorage.removeItem("auth");
    });
    toast("Logged out!", { type: "info" });
  }

  return (
    <div>
      <div className="nav-header">
        <p className="para">StonksMotion</p>
      </div>
      <div className="nav-div">
        <ul className="nav">
          {auth && <h3 className="name-header">Hi, {auth.userExists.name}!</h3>}

          <li classNameName="nav-item">
            <Link className="link-nav" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
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
