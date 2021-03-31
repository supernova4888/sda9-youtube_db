export default function VideoDescription({ information }) {
  const channelThumbObject = require(`../assets/images/channels/${information.channelThumb}`);
  const channelThumbURL = channelThumbObject.default;

  return (
    <div className="meta-data">
      <div className="left">
        <img
          className="channel-thumb"
          src={channelThumbURL}
          alt="Channel thumbnail"
        />
      </div>
      <div className="right">
        <h2 className="title">{information.channelName}</h2>
        <p className="description">{information.suscribers} suscribers</p>
        <p className="description">{information.description}</p>
      </div>
    </div>
  );
}
