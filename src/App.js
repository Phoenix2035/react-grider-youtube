import React, {useEffect, useState} from 'react'
import SearchBar from "./Components/SearchBar";
import youtube from "./Api/youtube";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";

function App() {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        onTermSubmit('cars')
    }, [])

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }

    const onVideoSelect = videoItem => {
        setSelectedVideo(videoItem)
    }


    return (
        <div className='ui container'>
            <SearchBar onTermSubmit={onTermSubmit}/>
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo}/>
                    </div>

                    <div className='five wide column'>
                        <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
