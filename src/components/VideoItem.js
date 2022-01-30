import React from "react"
import "./VideoItem.css"

const VideoItem = ({ video, onVideoSelect }) => {

    return <div
        className="video-item-container"
        onClick={() => { onVideoSelect(video) }}>
        <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
        <p>{video.snippet.title}</p>
    </div>
}

export default VideoItem;