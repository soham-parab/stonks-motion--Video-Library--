import "./nav.css";
import { Link } from "react-router-dom";

export function Nav() {
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
               </li>
            </ul>
         </div>
      </div>
   );
}
