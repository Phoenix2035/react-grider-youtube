import axios from 'axios'


const KEY = 'AIzaSyDxNpK1UtvdgHLB24wQkN27Vu_YhgT7L9w'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})