import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { VideosProvider } from "./contexts/Librarycontext";
import { PlaylistProvider } from "./contexts/Playlistcontext";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { ToastProvider } from "./contexts/toastContext";
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastProvider>
        <Router>
          <VideosProvider>
            <PlaylistProvider>
              <App />
            </PlaylistProvider>
          </VideosProvider>
        </Router>
      </ToastProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
