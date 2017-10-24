import React from'react';

// const VideoListItem = (props) => {
//   const video = props.videoData
// } THIS IS THE SAME AS BELOW BUT WITH ES6

const VideoListItem = ({videoData, onVideoSelect}) => {
  const imageUrl = videoData.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(videoData)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-bdoy">
          <div className="media-heading">{videoData.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem