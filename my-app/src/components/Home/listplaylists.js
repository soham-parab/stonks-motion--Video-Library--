import { useHistory, useParams } from "react-router-dom";
import "./listplaylists.css";
import { useVideos } from "../../contexts/Librarycontext";
import { usePlaylist } from "../../contexts/Playlistcontext";
import { Link } from "react-router-dom";
import { deleteFromPlaylist } from "../../utilities/utilities";
import { useAuth } from "../../contexts/authContext";
export const ListPlaylists = () => {
  const { state, dispatch } = useVideos();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { id } = useParams();
  const { auth } = useAuth();

  return (
    <div className="parent-dataa">
      {playlistState.playlist
        .filter((item) => {
          return item._id === id;
        })
        .map((item) => {
          return item.videos.map((vid) => {
            return (
              <div className="map-link">
                <Link to={`/videotemplate/${vid.video}`}>
                  <div className="video-cardbodyy">
                    <div className="videoImgDivv">
                      <img className="thumbnail-image" src={vid.thumbnail} />
                    </div>
                    <h3 className="video-titlee"> {vid.title}</h3>

                    <small>{vid.subcategory.type}</small>
                  </div>
                </Link>
                <button
                  className="remove-button"
                  onClick={
                    () => {
                      console.log(item._id, vid._id);
                      deleteFromPlaylist(item, vid, auth);
                    }
                    // playlistDispatch({
                    //    type: "REMOVE FROM PLAYLIST",
                    //    payload: item.id,
                    //    videos: vid,
                    // })
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
