import { usePlaylist } from "../../../contexts/Playlistcontext";
import "./playlist.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Action } from "history";

export function Playlist() {
   const { playlistState, playlistDispatch } = usePlaylist();

   useEffect(() => {
      (async function () {
         try {
            const response = await axios.get(
               "https://video-library-restapi.sohamparab13.repl.co/playlists"
            );

            playlistDispatch({ type: "LOAD PLAYLIST", payload: response.data });
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   // console.log(Object.keys(playlistState.playlist));
   return (
      <div className="playlist-div">
         <h2 className="my-playlist">My Playlists.</h2>
         {playlistState.playlist.map((item) => {
            return (
               <div className="alert alert-primary">
                  <Link className="link" to={`/playlistlisting/${item._id}`}>
                     <h2 className="playlist-btn">{item.name}</h2>
                  </Link>

                  <div
                     onClick={() =>
                        playlistDispatch({
                           type: "REMOVE PLAYLIST",
                           payload: item,
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
