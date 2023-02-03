// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const API_KEY = 'AIzaSyApI60Cgpj5iVn8Y0bIFXZWQFI0qxtm9AA';

export const videoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${API_KEY}`

export function searchURL(keyword) {
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&regionCode=kr&type=video&key=${API_KEY}`
}

export function channelURL(channelID) {
    return `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelID}&key=${API_KEY}`
}
