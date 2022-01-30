import React from "react";
import "./VideoDetail.css"

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div className="video-box">
                <h4>Loading...</h4>
            </div>
        )
    }
    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`
    return (
        <div className="video-box">
            <div className="video-player-box">
                <iframe
                    className="video-iframe"
                    title="Youtube Video Player"
                    src={videoSrc} />
            </div>
            <div className="video-description-box">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;