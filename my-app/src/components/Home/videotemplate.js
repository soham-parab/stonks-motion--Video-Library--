import { useParams } from "react-router-dom";
import "./videotemplate.css";
import { useState } from "react";
import { useVideos } from "../../contexts/Librarycontext";
import { usePlaylist } from "../../contexts/Playlistcontext";
import { FaThumbsUp } from "react-icons/fa";
import { postLikedVideos } from "../../utilities/utilities";
import { useAuth } from "../../contexts/authContext";
import { useToast } from "../../contexts/toastContext";
export const VideoTemplate = () => {
  const { auth } = useAuth();
  const { toast } = useToast();
  // const [modal, setModal] = useState({ display: "none" });
  const [bigModal, setBigModal] = useState({ display: "none" });
  const [newPlaylist, setNewPlaylist] = useState("");
  const [video, setVideo] = useState({});
  const { playlistState, playlistDispatch } = usePlaylist();
  const { state, dispatch } = useVideos();
  const { id } = useParams();
  console.log(id);
  const videoArr = state.videos.filter((item) => item.video === id);
  const videoMain = videoArr[0];
  console.log(video.title);
  return (
    <div className="sabka-baap">
      <div className="template-div">
        <iframe
          width="95%"
          height="95%"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>{" "}
      <div className="data-div">
        <FaThumbsUp
          onClick={() => postLikedVideos(videoMain, dispatch, auth, toast)}
          className="like-icon"
        />
        <button
          className="add-to-playlist"
          onClick={() => {
            if (auth) {
              setBigModal({ display: "flex" });
              setVideo(videoMain);
            } else {
              toast("Please log in!", {
                type: "info",
              });
            }
          }}
        >
          Add to playlist
        </button>
        {videoMain && <h1> {videoMain.title}</h1>}
        {videoMain && <small>{videoMain.subcategory.type}</small>}
      </div>
      <div style={bigModal} className="big-modal">
        <div className="playlist-divv">
          <button
            className="modal-close"
            onClick={() => setBigModal({ display: "none" })}
          >
            Close
          </button>
          <div class="modal" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Enter Playlist Name</h5>
                </div>
                <div class="modal-body">
                  <input
                    type="text"
                    onChange={(e) => setNewPlaylist(e.target.value)}
                  />
                </div>
                <div class="modal-footer">
                  <button
                    onClick={() => {
                      playlistDispatch({
                        type: "CREATE PLAYLIST",
                        payload: newPlaylist,
                      });
                    }}
                    type="button"
                    class="btn btn-primary"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="playlist-parent-div">
            {playlistState.playlist.map((playlist) => {
              return (
                <div className="alert-primaryy">
                  <h2>{playlist.name}</h2>
                  <button
                    onClick={() =>
                      playlistDispatch({
                        type: "ADD TO PLAYLIST",
                        payload: { video, id: playlist.id },
                      })
                    }
                    className="add-button"
                  >
                    Add
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
