import axios from "axios";

export const usersApi = axios.create({
    baseURL: process.env.REACT_APP_USERS_API || 'http://localhost:8080'
})

Object.assign(usersApi.defaults.headers, {
    "x-api-key": process.env.REACT_APP_X_API_KEY || "",
    "application": process.env.REACT_APP_APPLICATION || "",
    "Accept": "application/json",
    "Content-Type": "application/json",
})