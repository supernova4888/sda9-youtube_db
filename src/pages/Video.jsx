// NPM Packages
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

// Project files
import VideoDescription from "../components/VideoDescription";
import Information from "../data/information.json";

export default function Video({ match }) {
  // Constants
  const routerID = match.params.id;
  const video = Information.find((item) => item.videoId === routerID); // hey find inside the json the object that has the key "videoId" that matches "match.params.id"

  return (
    <div id="video" className="container">
      {/* Video Player */}
      <div className="video-container">
        {/* Replace with a React external library */}
        <YouTube videoId={video.videoId} />
      </div>

      <div className="body-container">
        <h1 className="title">{video.title}</h1>
        <p className="description">
          {video.views} views • {video.uploadDate}
        </p>

        <hr />

        {/* Meta data for the description of the video */}
        <VideoDescription information={video} />

        <hr />

        <Link className="button" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
