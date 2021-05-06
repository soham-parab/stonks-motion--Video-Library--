import { usePlaylist } from "../../contexts/Playlistcontext";
import "./addnewplaylist.css";
export function AddToPlaylist() {
   const { playlistState, playlistDispatch } = usePlaylist();

   console.log(Object.keys(playlistState.playlist));
   return (
      <div className="playlist-div">
         {playlistState.playlist.map((playlist) => {
            return (
               <div className="alert alert-primary">
                  <h2>{Object.keys(playlist)}</h2>
               </div>
            );
         })}
      </div>
   );
}
