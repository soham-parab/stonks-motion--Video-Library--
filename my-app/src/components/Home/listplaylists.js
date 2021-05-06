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
   console.log(playlistState.playlist);

   return (
      <div className="parent-dataa">
         {playlistState.playlist
            .filter((item) => {
               return item.id === id;
            })
            .map((item) => {
               console.log(item, "playlist");
               console.log(item.videos.title, "video title");

               return item.videos.map((vid) => {
                  return (
                     <div className="map-link">
                        <Link to={`/videotemplate/${vid.video}`}>
                           <div className="video-cardbodyy">
                              <div className="videoImgDivv">
                                 <img
                                    className="thumbnail-image"
                                    src={vid.thumbnail}
                                 />
                              </div>
                              <h3 className="video-titlee"> {vid.title}</h3>
                              {/* <p className="vidDescrip">{videoObj.description}</p>
                               */}
                              <small>{vid.subcategory.type}</small>
                           </div>{" "}
                        </Link>
                        <button
                           className="remove-button"
                           onClick={() =>
                              playlistDispatch({
                                 type: "REMOVE FROM PLAYLIST",
                                 payload: item.id,
                                 videos: vid,
                              })
                           }
                        >
                           Remove from Playlist.
                        </button>
                     </div>
                  );
               });
            })}
      </div>
   );
};
