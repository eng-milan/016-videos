import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
import "./App.css"

const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        onTermSubmit("buildings")
    }, [])

    const onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        })
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }

    return <div>
        <SearchBar onFormSubmit={onTermSubmit} />
        <div className="main-content-box">
            <VideoDetail video={selectedVideo} />
            <VideoList
                onVideoSelect={setSelectedVideo}
                videos={videos} />
        </div>
    </div>
}

export default App