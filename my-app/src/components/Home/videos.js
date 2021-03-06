import { data } from "../../librarydata/librarydata";
import uuid from "react-uuid";
import { Playvideo } from "../playvideo";
import { useState, useEffect } from "react";
import "./videos.css";
import { FaThumbsUp, FaRegClock, FaBorderNone } from "react-icons/fa";
import { usePlaylist } from "../../contexts/Playlistcontext";
import { Link } from "react-router-dom";
import axios from "axios";

import { useVideos } from "../../contexts/Librarycontext";
import { AddToPlaylist } from "../addnewplaylist/addnewplaylist";
import { useAuth } from "../../contexts/authContext";
import {
  addNewVideoToPlaylist,
  postLikedVideos,
  postNewPlaylist,
  postWatchLaterVideos,
} from "../../utilities/utilities";
import { Sidebar } from "../sidebar/sidebar";
import { useToast } from "../../contexts/toastContext";

export function Videos() {
  const { toast } = useToast();
  const { auth } = useAuth();
  const { state, dispatch } = useVideos();
  const { playlistState, playlistDispatch } = usePlaylist();
  const [modal, setModal] = useState({ display: "none" });
  const [bigModal, setBigModal] = useState({ display: "none" });
  const [newPlaylist, setNewPlaylist] = useState("");
  const [video, setVideo] = useState({});
  const [videoToAdd, setVideoToAdd] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://stonksmotion-rest-api.herokuapp.com/videos"
        );

        dispatch({ type: "SET VIDEOS", payload: response.data });
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="videos-main-div">
      <Sidebar />
      <div className="parent-data">
        {state.videos.map((videoObj) => {
          return (
            <div className="card-parent-div">
              <Link
                className="video-links"
                to={`/videotemplate/${videoObj.video}`}
              >
                <div className="video-cardbody">
                  <div className="videoImgDiv">
                    <img className="thumbnail-image" src={videoObj.thumbnail} />
                  </div>
                  <h3 className="video-title"> {videoObj.title}</h3>

                  <small>{videoObj.subcategory.typer}</small>
                </div>
              </Link>

              <button
                className="like-button"
                onClick={() => postLikedVideos(videoObj, dispatch, auth, toast)}
              >
                <FaThumbsUp className="like-icon" />
              </button>
              <button
                className="like-button"
                onClick={() =>
                  postWatchLaterVideos(videoObj, dispatch, auth, toast)
                }
              >
                <FaRegClock className="like-icon" />
              </button>

              <button
                className="add-to-playlist"
                onClick={() => {
                  if (auth) {
                    setBigModal({ display: "flex" });
                    setVideo(videoObj);
                    setVideoToAdd(videoObj);
                  } else {
                    toast("Please log in", { type: "info" });
                  }
                }}
              >
                Add to playlist
              </button>
            </div>
          );
        })}

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
                      className="save-changes"
                      onClick={() => {
                        postNewPlaylist(newPlaylist, playlistDispatch, auth);
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
                        addNewVideoToPlaylist(
                          playlist,
                          videoToAdd,
                          playlistDispatch,
                          auth
                        )
                      }
                      // playlistDispatch({
                      //    type: "ADD TO PLAYLIST",
                      //    payload: { video, id: playlist.id },
                      // })

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
    </div>
  );
}
