import React from "react";
import { createContext, useContext, useReducer, useState } from "react";

export const VideosContext = createContext();

export function VideosProvider({ children }) {
   const [state, dispatch] = useReducer(reducerFunction, {
      likedVideos: [],
      watchLater: [],
      videos: [],
   });

   return (
      <VideosContext.Provider value={{ state, dispatch }}>
         {children}
      </VideosContext.Provider>
   );
}

export function useVideos() {
   return useContext(VideosContext);
}

const reducerFunction = (acc, action) => {
   switch (action.type) {
      case "SET VIDEOS":
         return { ...acc, videos: action.payload };
      case "SET LIKED VIDEOS":
         return { ...acc, likedVideos: [...acc.likedVideos, action.payload] };
      case "SET WATCH LATER":
         return { ...acc, watchLater: [...acc.watchLater, action.payload] };
      case "REMOVE FROM LIKED VIDEOS":
         return {
            ...acc,
            likedVideos: acc.likedVideos.filter(
               (item) => item.id !== action.payload.id
            ),
         };
      case "REMOVE FROM WATCHLATER VIDEOS":
         return {
            ...acc,
            watchLater: acc.watchLater.filter(
               (item) => item.id !== action.payload.id
            ),
         };
      default:
   }
};
