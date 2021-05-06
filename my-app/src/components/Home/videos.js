import { data } from "../../librarydata/librarydata";
import uuid from "react-uuid";
import { Playvideo } from "../playvideo";
import { useState } from "react";
import "./videos.css";
import { FaThumbsUp, FaRegClock, FaBorderNone } from "react-icons/fa";
import { usePlaylist } from "../../contexts/Playlistcontext";
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

import { useVideos } from "../../contexts/Librarycontext";
import { AddToPlaylist } from "../addnewplaylist/addnewplaylist";

export function Videos() {
   const { state, dispatch } = useVideos();
   const { playlistState, playlistDispatch } = usePlaylist();
   const [modal, setModal] = useState({ display: "none" });
   const [bigModal, setBigModal] = useState({ display: "none" });
   const [newPlaylist, setNewPlaylist] = useState("");
   const [video, setVideo] = useState({});

   return (
      <div className="videos-main-div">
         <div className="parent-data">
            {/* {bigModal && <AddToPlaylist />} */}
            {data.map((videoObj) => {
               return (
                  <div className="card-parent-div">
                     <Link
                        className="video-links"
                        to={`/videotemplate/${videoObj.video}`}
                     >
                        {" "}
                        <div className="video-cardbody">
                           <div className="videoImgDiv">
                              <img
                                 className="thumbnail-image"
                                 src={videoObj.thumbnail}
                              />
                           </div>
                           <h3 className="video-title"> {videoObj.title}</h3>
                           {/* <p className="vidDescrip">{videoObj.description}</p>
                            */}
                           <small>{videoObj.subcategory.type}</small>
                        </div>{" "}
                     </Link>

                     <button
                        className="like-button"
                        onClick={() =>
                           dispatch({
                              type: "SET LIKED VIDEOS",
                              payload: videoObj,
                           })
                        }
                     >
                        <FaThumbsUp className="like-icon" />
                     </button>
                     <button
                        className="like-button"
                        onClick={() =>
                           dispatch({
                              type: "SET WATCH LATER",
                              payload: videoObj,
                           })
                        }
                     >
                        <FaRegClock className="like-icon" />
                     </button>

                     <button
                        className="add-to-playlist"
                        onClick={() => {
                           setBigModal({ display: "flex" });
                           setVideo(videoObj);
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
                                 onChange={(e) =>
                                    setNewPlaylist(e.target.value)
                                 }
                              />
                           </div>
                           <div class="modal-footer">
                              <button
                                 className="save-changes"
                                 onClick={() =>
                                    playlistDispatch({
                                       type: "CREATE PLAYLIST",
                                       payload: newPlaylist,
                                    })
                                 }
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
                              {/* <h2>{Object.keys(playlist)}</h2> */}
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
      </div>
   );
}
