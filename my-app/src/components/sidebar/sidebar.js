import "./sidebar.css"
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    Navigate,
    useNavigate,
    useParams,
    useLocation,
 } from "react-router-dom";

 export const Sidebar = () =>{
     return(
        <div className = "sidebar-div">
        <Link className = "sidebar-link" to="/likedvideos">Liked Videos</Link>
            <Link className = "sidebar-link" to="/watchlater"> Watch Later</Link>
            <Link className = "sidebar-link" to="/playlists">My Playlists</Link>

        </div>
     )




 }