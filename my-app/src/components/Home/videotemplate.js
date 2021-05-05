import { useHistory, useParams } from "react-router-dom";
import "./videotemplate.css";

export const VideoTemplate = () => {
   const { id } = useParams();
   console.log(id);

   return (
      <div className="template-div">
         <iframe
            width="90%"
            height="90%"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
         ></iframe>
      </div>
   );
};
