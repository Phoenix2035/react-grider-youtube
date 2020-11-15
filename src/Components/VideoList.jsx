import React from 'react';
import VideoItem from "./VideoItem";

function VideoList({videos, onVideoSelect}) {
    return (
        <div className='ui relaxed divided list'>
            {
                videos.map(item => <VideoItem key={item.id.videoId} video={item} onVideoSelect={onVideoSelect}/>)
            }
        </div>
    );
}

export default VideoList;