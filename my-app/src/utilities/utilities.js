import React from "react";
import axios from "axios";

export const postLikedVideos = (video, dispatch) => {
   (async function () {
      try {
         const response = await axios.post(
            "https://video-library-restapi.sohamparab13.repl.co/likedvideos",
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
            }
         );

         dispatch({ type: "UPDATE LIKED VIDEOS", payload: response.data });
      } catch (error) {
         console.log(error);
      }
   })();
};

export const postWatchLaterVideos = (video, dispatch) => {
   (async function () {
      try {
         const response = await axios.post(
            "https://video-library-restapi.sohamparab13.repl.co/watchlater",
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
            }
         );

         dispatch({ type: "UPDATE WATCH LATER", payload: response.data });
      } catch (error) {
         console.log(error);
      }
   })();
};

export const postNewPlaylist = (newPlaylist, playlistDispatch) => {
   (async function () {
      try {
         const response = await axios.post(
            "https://video-library-restapi.sohamparab13.repl.co/playlists",
            {
               playlist: {
                  playlist: newPlaylist,
                  videos: [],
               },
            }
         );

         playlistDispatch({ type: "CREATE PLAYLIST", payload: response.data });
      } catch (error) {
         console.log(error);
      }
   })();
};
