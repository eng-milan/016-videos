import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
import "./App.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { videos: [], selectedVideo: null }
    }
    componentDidMount() {
        this.onTermSubmit("buildings")
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        })

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return <div>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="main-content-box">
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        </div>
    }
}

export default App