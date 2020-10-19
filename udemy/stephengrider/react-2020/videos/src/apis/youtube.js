import axios from "axios";

const key = "AIzaSyC4V1f5LILeHtQmSDK0dY-Skn1eGqEuXqQ";
const baseURL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL,
  key,
  type: "video",
  timeout: 2000,
});
