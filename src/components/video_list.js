import React from 'react';
import VideoListItem from "./video_list_item"

const VideoList = (props) => {
 const videoItems = props.videos.map( (video) => { 
   return (
    <VideoListItem 
      onVideoSelect={props.onVideoSelect} //passing the props from videolist down to videolistitem
      key={video.etag} 
      videoData={video} /> 
   ) 
  })
      
  return (
    <div>
      <ul className='col-md-4 list-group'>
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList