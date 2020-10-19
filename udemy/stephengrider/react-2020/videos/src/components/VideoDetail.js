import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  if (Object.keys(selectedVideo).length === 0) {
    return <div></div>;
  }

  const description = selectedVideo?.snippet?.description;
  const title = selectedVideo?.snippet?.title;
  const videoId = selectedVideo?.id?.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoUrl} allowFullScreen title={title}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
