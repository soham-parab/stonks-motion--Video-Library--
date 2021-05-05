import { data } from "../../librarydata/librarydata";
import uuid from "react-uuid";
import { Playvideo } from "../playvideo";
import { useState } from "react";
import "./videos.css";
import { FaThumbsUp, FaRegClock } from "react-icons/fa";

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

export function Videos() {
   const { state, dispatch } = useVideos();

   return (
      <div className="videos-main-div">
         <div className="parent-data">
            {data.map((videoObj) => {
               return (
                  <div className="card-parent-div">
                     <Link to={`/videotemplate/${videoObj.video}`}>
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
                           <p>{videoObj.subcategory.type}</p>
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
                  </div>
               );
            })}
         </div>
      </div>
   );
}
