import "./nav.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export function Nav() {
   return (
      <div>
         <div className="nav-header">
            <p className="para">
               StonksMotion
               {/* <FaCat /> */}
            </p>
         </div>
         <div className="nav-div">
            <ul className="nav">
               <li classNameName="nav-item">
                  <Link className="link-nav" to="/">
                     Home
                     {/* <BsFillHouseFill className="icon" /> */}
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="link-nav" to="/library">
                     Library
                     {/* <FaShoppingCart className="icon" /> */}
                  </Link>
               </li>
               {/* <li className="nav-item">
                   <Link className="link-nav" to="/wishlist">
                      Wishlist <BsHeartFill className="icon" />
                   </Link>
                </li> */}
            </ul>
         </div>
      </div>
   );
}
