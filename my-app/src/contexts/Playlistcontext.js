import React from "react";
import { createContext, useContext, useReducer, useState } from "react";
import uuid from "react-uuid";

export const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
   const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
      playlist: [{ id: uuid(), name: "Playlist1", videos: [] }],
   });

   return (
      <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
         {children}
      </PlaylistContext.Provider>
   );
}

export function usePlaylist() {
   return useContext(PlaylistContext);
}

const playlistReducer = (acc, action) => {
   switch (action.type) {
      case "CREATE PLAYLIST":
         console.log(action.payload);
         console.log(acc.playlist);

         //  return {
         //     ...acc,
         //     playlist: [...acc.playlist, acc.playlist.concat(action.payload)],
         //  };
         return {
            ...acc,
            playlist: [
               ...acc.playlist,
               {
                  id: uuid(),
                  name: action.payload,
                  videos: [],
               },
            ],
         };

      case "ADD TO PLAYLIST":
         console.log(acc.playlist);
         return {
            ...acc,
            playlist: acc.playlist.map((item) => {
               return item.id === action.payload.id
                  ? { ...item, videos: [...item.videos, action.payload.video] }
                  : item;
            }),
         };

      case "REMOVE PLAYLIST":
         return {
            ...acc,
            playlist: acc.playlist.filter((item) => item !== action.payload),
         };

      case "REMOVE FROM PLAYLIST":
         return {
            // ...acc,playlist:acc.playlist.map((item) => {
            //    return item.id.filter((item)=>{
            //       return item.id === action.payload.id ?
            //       {...item, }
            //    })

            // })
            ...acc,
            playlist: acc.playlist.map((item) => {
               return item.id === action.payload
                  ? {
                       ...item,
                       videos: item.videos.filter((vid) => {
                          return vid !== action.videos;
                       }),
                    }
                  : item;
            }),
         };
      default:
         break;
   }
};
