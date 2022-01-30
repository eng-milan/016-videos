import axios from "axios";

const KEY = "AIzaSyA4J3bHFFny26Cjh0T_ayoaceu_q58m8pg"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
})