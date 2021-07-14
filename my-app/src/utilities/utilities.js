import React from "react";
import axios from "axios";

const baseURL = "https://stonksmotion-rest-api.herokuapp.com";

export const postLikedVideos = (video, dispatch, auth) => {
  if (auth) {
    (async function () {
      console.log(video);
      try {
        const response = await axios.post(
          `${baseURL}/likedvideos`,
          {
            title: video.title,
            description: video.description,
            thumbnail: video.thumbnail,

            runtime: {
              minutes: video.runtime.minutes,
              seconds: video.runtime.seconds,
            },
            video: video.video,
            categoryId: video.categoryId,
            subcategory: {
              type: video.subcategory.type,
              name: video.subcategory.name,
            },
            channel: video.channel,
            views: video.views,
          },
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );

        dispatch({ type: "UPDATE LIKED VIDEOS", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  } else {
    console.log("please login");
  }
};

export function removeFromLikedVideos(video, dispatch, auth) {
  if (auth) {
    (async function () {
      try {
        const response = await axios.delete(
          `https://stonksmotion-rest-api.herokuapp.com/likedvideos/${video._id}`,
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );

        dispatch({ type: "SET LIKED VIDEOS", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }
  console.log("please login");
}

export const postWatchLaterVideos = (video, dispatch, auth) => {
  if (auth) {
    (async function () {
      try {
        const response = await axios.post(
          "https://stonksmotion-rest-api.herokuapp.com/watchlater",
          {
            title: video.title,
            description: video.description,
            thumbnail: video.thumbnail,

            runtime: {
              minutes: video.runtime.minutes,
              seconds: video.runtime.seconds,
            },
            video: video.video,
            categoryId: video.categoryId,
            subcategory: {
              type: video.subcategory.type,
              name: video.subcategory.name,
            },
            channel: video.channel,
            views: video.views,
          },
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );

        dispatch({ type: "UPDATE WATCH LATER", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  } else {
    console.log("please login");
  }
};

export function removeFromWatchLater(video, dispatch, auth) {
  if (auth) {
    (async function () {
      try {
        const response = await axios.delete(
          `https://stonksmotion-rest-api.herokuapp.com/watchlater/${video._id}`,
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );

        dispatch({ type: "SET WATCH LATER", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  } else {
    console.log("please login");
  }
}

export const postNewPlaylist = (newPlaylist, playlistDispatch, auth) => {
  if (auth) {
    (async function () {
      try {
        const response = await axios.post(
          "https://stonksmotion-rest-api.herokuapp.com/playlists",
          { name: newPlaylist, videos: [] },
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );
        console.log(newPlaylist);
        console.log(response.data);
        playlistDispatch({ type: "CREATE PLAYLIST", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  } else {
    console.log("please login");
  }
};

export const addNewVideoToPlaylist = (
  playlist,
  video,
  playlistDispatch,
  auth
) => {
  if (auth) {
    (async function () {
      try {
        const response = await axios.post(
          `https://stonksmotion-rest-api.herokuapp.com/playlists/update/${playlist._id}`,

          {
            video: video,
          },
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );

        // playlistDispatch({
        //    type: "ADD TO PLAYLIST",
        //    payload: { video, id: videos.id },
        // });
      } catch (error) {
        console.log(error);
      }
    })();
  } else {
    console.log("please login");
  }
};

export function removePlaylist(playlist, playlistDispatch, auth) {
  if (auth) {
    (async function () {
      try {
        const response = await axios.delete(
          `https://stonksmotion-rest-api.herokuapp.com/playlists/${playlist._id}`,
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );

        playlistDispatch({ type: "LOAD PLAYLIST", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  } else {
    console.log("please login");
  }
}

export function deleteFromPlaylist(playlist, video, auth) {
  if (auth) {
    (async function () {
      try {
        console.log(playlist, video);
        const response = await axios.post(
          "  https://stonksmotion-rest-api.herokuapp.com/delete",
          {
            playlistId: playlist._id,
            videoId: video._id,
          },
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );
        // playlistDispatch({ type: "LOAD PLAYLIST", payload: response.data });

        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  } else {
    console.log("please login");
  }
}
