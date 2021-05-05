import { React } from "react";
import { useVideos } from "../../../contexts/Librarycontext";
import "./likedvideos.css";
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
export function LikedVideos() {
   const { state, dispatch } = useVideos();

   return (
      <div className="videos-main-div">
         <div className="parent-data">
            {state.likedVideos.map((vid) => {
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
                           {/* <p className="vidDescrip">{videoObj.description}</p>
                            */}
                           <p>{vid.subcategory.type}</p>
                        </div>{" "}
                     </Link>
                     <button
                        className="like-button"
                        onClick={() =>
                           dispatch({
                              type: "REMOVE FROM LIKED VIDEOS",
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
