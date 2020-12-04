/*
Create an instance of axios with custom config.
*/
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

export default axios.create({
  baseURL,
});
