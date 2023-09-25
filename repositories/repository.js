import Axios from "axios";

const baseUrl = '' // API for Bank


const client = Axios.create({
  baseURL: baseUrl,
  headers: {
    accept: "application/json",
  },
});

export default client;
