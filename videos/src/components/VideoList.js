import React from 'react';
import VideoItem from './VideoItem';

// importing video item just created
// map over 'videos' array
// for every video inside, render one single video item
const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map((video) => {
		// map video array and return a new array of video items
		// pass the video that we are currently iterating over in the response
		return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
	});	
	// props.videos (the array from api)
	return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;