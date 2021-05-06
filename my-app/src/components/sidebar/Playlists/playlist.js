import { usePlaylist } from "../../../contexts/Playlistcontext";
import "./playlist.css";
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
export function Playlist() {
   const { playlistState, playlistDispatch } = usePlaylist();
   //    console.log(Object.values(playlistState.playlist));
   //    return null;
   console.log(Object.keys(playlistState.playlist));
   return (
      <div className="playlist-div">
         <h2 className="my-playlist">My Playlists.</h2>
         {playlistState.playlist.map((playlist) => {
            return (
               <div className="alert alert-primary">
                  <Link to={`/playlistlisting/${playlist.id}`}>
                     <h2 className="playlist-btn">{playlist.name}</h2>
                  </Link>

                  <div
                     onClick={() =>
                        playlistDispatch({
                           type: "REMOVE FROM PLAYLIST",
                           payload: playlist,
                        })
                     }
                     className="delete-button"
                  >
                     X
                  </div>
               </div>
            );
         })}
      </div>
   );
}
