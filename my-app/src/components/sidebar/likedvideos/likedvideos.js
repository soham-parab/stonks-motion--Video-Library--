import { React } from "react";
import { useVideos } from "../../../contexts/Librarycontext";
import "./likedvideos.css";
import { useEffect } from "react";
import { FaThumbsDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "../sidebar";
import { useAuth } from "../../../contexts/authContext";
import { removeFromLikedVideos } from "../../../utilities/utilities";
export function LikedVideos() {
  const { state, dispatch } = useVideos();
  const { auth } = useAuth();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://video-library-restapi.sohamparab13.repl.co/likedvideos",
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );
        console.log(response.data);
        dispatch({ type: "SET LIKED VIDEOS", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="videos-main-div">
      <Sidebar />
      <div className="parent-data">
        {state.likedVideos.length &&
          state.likedVideos.map((vid) => {
            return (
              <div className="card-parent-div">
                {" "}
                <Link to={`/videotemplate/${vid.video}`}>
                  <div className="video-cardbody">
                    <div className="videoImgDiv">
                      <img className="thumbnail-image" src={vid.thumbnail} />
                    </div>
                    <h3 className="video-title"> {vid.title}</h3>
                    <p>{vid.subcategory.typer}</p>
                  </div>{" "}
                </Link>
                <button
                  className="like-button"
                  onClick={
                    () => removeFromLikedVideos(vid, dispatch, auth)

                    // dispatch({
                    //    type: "REMOVE FROM LIKED VIDEOS",
                    //    payload: vid,
                    // })
                  }
                >
                  <FaThumbsDown className="like-icon" />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
