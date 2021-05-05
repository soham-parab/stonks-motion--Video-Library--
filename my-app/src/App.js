import "./App.css";
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
import { Videos } from "./components/Home/videos";
import { Playlist } from "./components/sidebar/Playlists/playlist";
import { Playvideo } from "./components/playvideo";
import { VideoTemplate } from "./components/Home/videotemplate";
import { useVideos } from "./contexts/Librarycontext";
import { LikedVideos } from "./components/sidebar/likedvideos/likedvideos";
import { WatchLater } from "./components/sidebar/Watch Later/watchlater";
import { Nav } from "./components/Nav/nav";
import {Sidebar} from "./components/sidebar/sidebar"
function App() {
   return (
      <div className="App">
         

         <Router>
            <Nav />
            <Sidebar/>
            <Routes>
               <Route path="/" element={<Videos />} />
               <Route path="/myplaylist" element={<Playlist />} />
               <Route path="/videotemplate/:id" element={<VideoTemplate />} />
               <Route path="/likedvideos" element={<LikedVideos />} />
               <Route path="/watchlater" element={<WatchLater />} />
            </Routes>
         </Router>


       

            
       
      </div>
   );
}

export default App;
