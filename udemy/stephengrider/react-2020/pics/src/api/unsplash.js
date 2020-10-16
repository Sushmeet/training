import axios from "axios";

const baseURL = "https://api.unsplash.com";

export default axios.create({
  baseURL,
  headers: {
    Authorization: "Client-ID lfYlW1SGjbu2cR5y9nlhtBEHhDbve28GmIVKvClvlPw",
  },
  timeout: 2000,
});
