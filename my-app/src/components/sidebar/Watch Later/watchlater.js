import { React } from "react";
import { useVideos } from "../../../contexts/Librarycontext";
import { useEffect } from "react";
import axios from "axios";

import "./watchlater.css";
import { FaThumbsDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import { removeFromWatchLater } from "../../../utilities/utilities";
import { Sidebar } from "../sidebar";
export function WatchLater() {
  const { auth } = useAuth();
  const { state, dispatch } = useVideos();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://video-library-restapi.sohamparab13.repl.co/watchlater",
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );
        console.log(response.data);
        dispatch({ type: "SET WATCH LATER", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(state.watchLater);
  return (
    <div className="videos-main-div">
      <Sidebar />
      <div className="parent-data">
        {state.watchLater.length &&
          state.watchLater.map((vid) => {
            return (
              <div className="card-parent-div">
                {" "}
                <Link to={`/videotemplate/${vid.video}`}>
                  <div className="video-cardbody">
                    <div className="videoImgDiv">
                      <img
                        className="thumbnail-image"
                        src={vid.thumbnail}
                        alt="nothing"
                      />
                    </div>
                    {vid.subcategory.typer}
                    <br />

                    <h3 className="video-title"> {vid.title}</h3>
                  </div>
                </Link>
                <button
                  className="like-button"
                  onClick={
                    () => removeFromWatchLater(vid, dispatch, auth)
                    // dispatch({
                    //    type: "REMOVE FROM WATCHLATER VIDEOS",
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
