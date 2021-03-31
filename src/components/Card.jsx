// NPM Package
import { Link } from "react-router-dom";

export default function Card({ information }) {
  // Properties
  const videoThumbObject = require(`../assets/images/${information.thumb}`);
  const channelThumbObject = require(`../assets/images/channels/${information.channelThumb}`);
  const videoThumbURL = videoThumbObject.default;
  const channelThumbURL = channelThumbObject.default;

  return (
    <article className="card">
      {/* Video thumbnail */}
      <Link to={`video/${information.videoId}`}>
        <img
          className="preview"
          src={videoThumbURL}
          alt={information.description}
        />
      </Link>


      {/* Meta data */}
      <div className="meta-data">
        <div className="left">
          <img
            className="channel-thumb"
            src={channelThumbURL}
            alt="Channel thumbnail"
          />
        </div>
        <div className="right">
          <h3 className="title">{information.title}</h3>
          <p className="description">{information.channelName}</p>
          <p className="description">{information.views} views</p>
        </div>
      </div>
    </article>
  );
}
