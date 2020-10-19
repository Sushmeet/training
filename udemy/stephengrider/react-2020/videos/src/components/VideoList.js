import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const videoList = this.props.videos.map((video) => {
      return (
        <VideoItem
          video={video}
          key={video?.id?.videoId}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });
    return <div className="ui relaxed divided list">{videoList}</div>;
  }
}

export default VideoList;
