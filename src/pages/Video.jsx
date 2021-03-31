// NPM Packages
import YouTube from "react-youtube";

// Project files
import Header from "../components/Header";
import VideoDescription from "../components/VideoDescription";
import Information from "../data/information.json";

export default function Video() {
  // Constants
  const video = Information[0];

  return (
    <div id="video">
      {/* Header */}
      <Header />

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

        <a className="button" href="#">
          Back to home
        </a>
      </div>
    </div>
  );
}
