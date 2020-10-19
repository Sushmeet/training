import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  render() {
    const currentVideo = this.props.video;
    const videoThumbnail = this.props.video?.snippet.thumbnails.high.url;
    const videoTitle = this.props.video?.snippet.title;
    return (
      <div onClick={() => this.props.onVideoSelect(currentVideo)} className="video-item item">
        <img className="ui image" src={videoThumbnail} alt={videoTitle} />
        <div className="content">
          <div className="header">{videoTitle}</div>
          <div className="description">Updated 10 mins ago</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;


// functional componenet equivalent 

// function VideoItem({ video, onVideoSelect }) {
//     const videoThumbnail = video?.snippet.thumbnails.high.url;
//     const videoTitle = video?.snippet.title;
//     return (
//       <div
//         onClick={() => onVideoSelect(video)}
//         className="video-item item"
//       >
//         <img className="ui image" src={videoThumbnail} alt={videoTitle} />
//         <div className="content">
//           <div className="header">{videoTitle}</div>
//           <div className="description">Updated 10 mins ago</div>
//         </div>
//       </div>
//     );
//   }