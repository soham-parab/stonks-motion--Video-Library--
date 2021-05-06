import { useHistory, useParams } from "react-router-dom";
import "./listplaylists.css";
import { useVideos } from "../../contexts/Librarycontext";
import { usePlaylist } from "../../contexts/Playlistcontext";
import {
   BrowserRouter as Router,
   Link,
   Routes,
   Route,
   Navigate,
   useNavigate,
   useLocation,
} from "react-router-dom";
export const ListPlaylists = () => {
   const { state, dispatch } = useVideos();
   const { playlistState, playlistDispatch } = usePlaylist();
   const { id } = useParams();
   console.log(id);
   return (
      <div className="playlist-videos-div">
         {/* {playlistState.playlist.filter((videos) => {
            console.log(id);
            console.log(videos);
            return videos.id === id
               ? videos.videos.map((item) => {
                    console.log(item);
                    console.log(
                       item.title,
                       "wdadsasdsadasdsadasdasdasdasdasdasd"
                    );
                    return <h1>{item.title}</h1>;
                 })
               : videos.videos;
         })} */}

         {playlistState.playlist
            .filter((item) => {
               return item.id === id;
            })
            .map((item) => {
               console.log(item);
               console.log(item.title, "wdadsasdsadasdsadasdasdasdasdasdasd");
               return <h1>{item.title}</h1>;
            })}
      </div>
   );
};
