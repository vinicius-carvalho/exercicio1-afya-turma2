import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.chucknorris.io/jokes/"
})

export const postform = axios.create({
    baseURL: "https://webhook.site/651bf956-4ba0-4f6d-a8df-59e93e0ea652"
})
