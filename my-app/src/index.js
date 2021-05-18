import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { VideosProvider } from "./contexts/Librarycontext";
import { PlaylistProvider } from "./contexts/Playlistcontext";

ReactDOM.render(
   <React.StrictMode>
      <VideosProvider>
         <PlaylistProvider>
            <App />
         </PlaylistProvider>
      </VideosProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
