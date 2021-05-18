import { React } from "react";
import { useVideos } from "../../../contexts/Librarycontext";

import "./watchlater.css";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
export function WatchLater() {
   const { state, dispatch } = useVideos();

   return (
      <div className="videos-main-div">
         <div className="parent-data">
            {state.watchLater.map((vid) => {
               return (
                  <div className="card-parent-div">
                     {" "}
                     <Link to={`/videotemplate/${vid.video}`}>
                        <div className="video-cardbody">
                           <div className="videoImgDiv">
                              <img
                                 className="thumbnail-image"
                                 src={vid.thumbnail}
                              />
                           </div>
                           <h3 className="video-title"> {vid.title}</h3>

                           <p>{vid.subcategory.type}</p>
                        </div>{" "}
                     </Link>
                     <button
                        className="like-button"
                        onClick={() =>
                           dispatch({
                              type: "REMOVE FROM WATCHLATER VIDEOS",
                              payload: vid,
                           })
                        }
                     >
                        <FaThumbsUp className="like-icon" />
                     </button>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
