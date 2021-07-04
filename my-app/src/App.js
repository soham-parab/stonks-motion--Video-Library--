import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Videos } from "./components/Home/videos";
import { Playlist } from "./components/sidebar/Playlists/playlist";
import { Playvideo } from "./components/playvideo";
import { VideoTemplate } from "./components/Home/videotemplate";
import { useVideos } from "./contexts/Librarycontext";
import { LikedVideos } from "./components/sidebar/likedvideos/likedvideos";
import { WatchLater } from "./components/sidebar/Watch Later/watchlater";
import { Nav } from "./components/Nav/nav";
import { Sidebar } from "./components/sidebar/sidebar";
import { ListPlaylists } from "../src/components/Home/listplaylists";
import { Register } from "../src/Pages/Register/Register";
import { Login } from "./Pages/Login/Login";
import { useAuth } from "./contexts/authContext";

function App() {
  function PrivateRoute({ path, ...props }) {
    const { auth } = useAuth();
    return auth ? (
      <Route {...props} path={path} />
    ) : (
      <Navigate state={{ from: path }} replace to="/login" />
    );
  }

  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <PrivateRoute path="/playlists" element={<Playlist />} />
        <Route path="/videotemplate/:id" element={<VideoTemplate />} />
        <PrivateRoute path="/likedvideos" element={<LikedVideos />} />
        <PrivateRoute path="/watchlater" element={<WatchLater />} />
        <Route path="/playlistlisting/:id" element={<ListPlaylists />} />
      </Routes>
    </div>
  );
}

export default App;
